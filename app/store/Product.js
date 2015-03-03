/**
 * @ Diane Ngani
 */
Ext.define('EisenApp.store.Product', {
    extend: 'Ext.data.Store',
    alias: 'store.productstore',
    requires: [ 'EisenApp.model.Product' ],
 
    config: {
        autoLoad: true,
        loadCounter: 0,
        model: 'EisenApp.model.Product',
        storeId: 'Product',
		sorters:[
			{	property:'name',
			    direction: 'ASC'	}  
		],
		grouper: {
			groupFn: function (item) {
			  return item.get('name')[0];
			} // groupFn
		}, // grouper
		groupDir: 'DESC',
       
	   listeners: {
	        refresh: function() {
	            console.log('Refresh: Product Store count is ' + this.getCount());
	        },
	        load: function() {
	        	
	            if ( this.getCount() == 0 && this.getLoadCounter() != 0 ){
	            	var sqlinit=null;
	   				if (null == Ext.getCmp('sqlinit')) {
	   					sqlinit = Ext.create('EisenApp.override.SQLInit',{});
	   				} else {
	   					sqlinit = Ext.getCmp('sqlinit');
	   				}
	   				sqlinit.initializeProduct();
	            }
	            
	            this.sort();
	            this.setLoadCounter(1);
	            console.log('Load: Product Store count is ' + this.getCount());
	        }
	    }
    }
});