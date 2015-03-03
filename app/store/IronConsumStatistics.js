/**
 * 
 */
Ext.define('EisenApp.store.IronConsumStatistics', {
    extend: 'Ext.data.Store',
    requires: [
        'EisenApp.model.IronConsumStatistics'
    ],
    
    config: {
        autoLoad: true,
        counter: 0,
//        autoSync: true,
        model: 'EisenApp.model.IronConsumStatistics',
        storeId: 'IronConsumStatistics',
        
        sorters:[
                 {
              	   property:'entry_date',
              	   direction: 'ASC'
                 }  
           ],
       grouper: {
           groupFn: function (item) {
               return Ext.Date.format(item.get('entry_date'), 'm/Y');
           } // groupFn
       }, // grouper
       groupDir: 'DESC',
           
        listeners: {
            refresh: function() {
                console.log('Refresh: Store count is ' + this.getCount());
            },
            load: function() {
            	
               if( Ext.os.deviceType !== 'Desktop' && this.getCounter() != 0){
            	   var sqlinit=null;
	   				if (null == Ext.getCmp('sqlinit')) {
	   					sqlinit = Ext.create('EisenApp.override.SQLInit',{});
	   				} else {
	   					sqlinit = Ext.getCmp('sqlinit');
	   				}
	   				
	   				sqlinit.generateView();
               }
				this.sort();
                this.setCounter(1);
                
                console.log('Load: View Store count is ' + this.getCount());
//                alert (this.getCounter());
            }
        }
        
    }
});