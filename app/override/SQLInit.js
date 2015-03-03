/**
 * @ Diane Ngani
 */
Ext.define('EisenApp.override.SQLInit', {
//	singleton: true,
	
    config:{
	    db:null
	},
	
	generateView: function (){
	    
	    console.log('Init View Stores')	;
		
		this.getDb().transaction(function(tx) {
			
		    // Init View
		
		    // View erzeugen
//			tx.executeSql('DROP VIEW IronConsumStatistics');
			var query= "CREATE VIEW IF NOT EXISTS `IronConsumStatistics` AS "
			+"SELECT e.entry_id, e.entry_date, CAST(TOTAL(p.basis*e.quantity/100.0) AS FLOAT) AS entry_iron_value "
			+"FROM Entry AS e JOIN Product AS p ON e.product_id = p.product_id "
			+"GROUP BY e.entry_id "
			+"ORDER BY e.entry_date ASC";
		
		    tx.executeSql(query);
		    
			query = "SELECT *  FROM IronConsumStatistics where 1 = 1 ORDER BY entry_date ASC;";
			
			console.log(query);
			tx.executeSql(query,[], function(tx, results){
				  var len = results.rows.length;
				  var data = [];
				  var tmp;
//					alert("Iron View: " + len + " rows found.");
					
				for (var i=0; i<len; i++){
					var dat = new Date(results.rows.item(i).entry_date),
				    tmp = Ext.create('EisenApp.model.IronConsumStatistics',{
				    	entry_id: results.rows.item(i).entry_id+'',
				    	entry_date: dat,
				    	entry_iron_value: results.rows.item(i).entry_iron_value
				    	}
				    );
				    data.push(tmp);
				}
				
//				alert(tmp.get('entry_date'));
				Ext.getStore('IronConsumStatistics').setData(data);
				
				var nowTMP = new Date() , yesterdayTMP = Ext.Date.add(nowTMP, Ext.Date.DAY, -1);
   				var now = Ext.Date.format(nowTMP, 'M d Y'), yesterday= Ext.Date.format(yesterdayTMP, 'M d Y');
   				
				var rec = Ext.getStore('IronConsumStatistics').findRecord('entry_date', now+'', 0, true, false,false);
				var heute, gestern;
//				alert(rec.get('entry_date'));
//				alert(rec + now);
				
				heute = (rec != null) ? rec.get('entry_iron_value') : 0 ;
				
				rec = Ext.getStore('IronConsumStatistics').findRecord('entry_date', yesterday, 0, true, false,false);
				
//				alert(rec + yesterday);
				gestern = (rec != null) ? rec.get('entry_iron_value') : 0 ;
				
				Ext.getCmp('home').down('label[id=heute]').setHtml(heute+' mg');
				Ext.getCmp('home').down('label[id=gestern]').setHtml(gestern+' mg');
				
			}, function(e){
				  console.log("ERROR: " + e.message);
			  }
			  );
					
		});	

	},
	
	
	initializeProduct: function (){

	    console.log('Init Product Stores');
	   
		this.getDb().transaction(function(tx) {
			
		    // Init Product
				
//	            tx.executeSql('DROP TABLE IF EXISTS Product');
			var query = "CREATE TABLE IF NOT EXISTS `Product` ("
			+"`product_id`	TEXT NOT NULL UNIQUE,"
			+"`name`	TEXT NOT NULL DEFAULT 'Nahrung',"
			+"`group_name`	TEXT NOT NULL DEFAULT 'gid',"
			+"`basis`	REAL NOT NULL DEFAULT '0,5',"
			+"`basis_unit`	TEXT DEFAULT 'mg/100g',"
			+"`insert_date`	TEXT NOT NULL DEFAULT 'Wed Feb 18 2015 18:29:45 GMT+0100 (CET)',"
			+"`active`	TEXT NOT NULL DEFAULT 'true',"
		    +"PRIMARY KEY(product_id) );";
		    
		    tx.executeSql(query);
		    
		    
		    //Alle vorhandene Produkten laden ...
//
		    
			query = "SELECT *  FROM Product where 1 = 1 ORDER BY name;";
			
//			console.log(query);
			tx.executeSql(query,[], function(tx, results){
				  var len = results.rows.length;
				  var data = [];
				  var tmp;
//					alert("Product table: " + len + " rows found.");
				for (var i=0; i<len; i++){
					var dat = new Date(results.rows.item(i).insert_date);
				    tmp = Ext.create('EisenApp.model.Product',{
				    	product_id: results.rows.item(i).product_id+'',
				    	active: results.rows.item(i).active,
				    	name: ''+results.rows.item(i).name+'',
				    	group_name:  results.rows.item(i).group_name+'',
					    basis: results.rows.item(i).basis,
					    basis_unit: results.rows.item(i).basis_unit+'',
					    insert_date: dat
				    	}
				    );
				    
				    data.push(tmp);
				}
				
				// .... und im Store Product hinzufügen
				Ext.getStore('Product').setData(data);
				  
			  }, function(e){
				  console.log("ERROR: " + e.message);
			  }
			  );
					
		});	

	},

	initializeEntry: function(){
		
	    console.log('Init Entry Stores');
	
		this.getDb().transaction(function(tx) {
		    // Init Entry
				
//	        tx.executeSql('DROP TABLE IF EXISTS Entry');
			var query = "CREATE TABLE IF NOT EXISTS `Entry` ( "
				+"`pte_id`	BLOB NOT NULL UNIQUE,"
				+"`entry_id`	TEXT NOT NULL, "
				+"`product_id`	TEXT NOT NULL,"
				+"`entry_date`	TEXT NOT NULL,"
				+"`insert_date`	TEXT NOT NULL,"
				+"`quantity`	REAL NOT NULL DEFAULT 100,"
				+"`quantity_unit`	TEXT DEFAULT 'g',"
				+"	PRIMARY KEY(pte_id),"
				+" FOREIGN KEY(product_id) REFERENCES Product(product_id));";
				
		    tx.executeSql(query);
		    
		    // Alle Entries laden ...
			query = "SELECT *  FROM Entry where 1 = 1;";
			
			console.log(query);
			tx.executeSql(query,[], function(tx, results){
				  var len = results.rows.length;
				  var data = [];
				  var tmp;
//					alert("Entry table: " + len + " rows found.");
					
				for (var i=0; i<len; i++){
					var dat = new Date(results.rows.item(i).entry_date),
					dat2 = new Date(results.rows.item(i).insert_date);
				    tmp = Ext.create('EisenApp.model.Entry',{
				    	pte_id: results.rows.item(i).pte_id+'',
				    	entry_id: results.rows.item(i).entry_id+'',
				    	product_id: results.rows.item(i).product_id+'',
				    	entry_date:  dat,
				    	insert_date:  dat2,
				    	quantity:  results.rows.item(i).quantity,
				    	quantity_unit:  results.rows.item(i).quantity_unit+''
				    	}
				    );
				    
				    var errors= tmp.validate();
//				    alert(errors.isValid());
				    
				    data.push(tmp);
				}
				
				// ... und im Store Entry hinzufügen
				Ext.getStore('Entry').setData(data);
				
			  }, function(e){
				  console.log("ERROR: " + e.message);
			  }
			  );
					
		});	
	},
	
	initializeDB : function(){
	    
		this.initializeProduct();
	    this.initializeEntry();
	    this.generateView();
	},

	constructor: function(){
		var db = window.sqlitePlugin.openDatabase('EisenApp.db');
	    this.setDb(db);
	}

} );