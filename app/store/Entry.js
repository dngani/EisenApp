/**
 * @author Diane Ngani
 */
Ext.define('EisenApp.store.Entry', {
    extend: 'Ext.data.Store',
    alias: 'store.entrystore',
    requires: [ 'EisenApp.model.Entry'  ],
    config: {
        autoLoad: true,
        loadCounter: 0,
        model: 'EisenApp.model.Entry',
        storeId: 'Entry',
        sorters:[
	         {
	      	   property:'entry_id',
	      	   direction: 'ASC'
	         }
        ],
       grouper: {
           groupFn: function (item) {
               return Ext.Date.format(item.get('entry_date'), 'm-Y');
           }// groupFn
       }, // grouper
       groupDir: 'DESC',
           
       listeners: {
           refresh: function() {
		        console.log('Refresh: Entry Store count is ' + this.getCount());
		    },
		    load: function() {
		    	
		    	 if (this.getCount() == 0 && this.getLoadCounter() != 0 ){
		            	var sqlinit=null;
		   				if (null == Ext.getCmp('sqlinit')) {
		   					sqlinit = Ext.create('EisenApp.override.SQLInit',{});
		   				} else {
		   					sqlinit = Ext.getCmp('sqlinit');
		   				}
		   				
		   				sqlinit.initializeEntry();
		            }
		            
		            this.sort();
		            this.setLoadCounter(1);
		        console.log('Load: Entry Store count is ' + this.getCount());
		    } // End Load-Funktion
		}
    }
});