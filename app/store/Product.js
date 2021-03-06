/**
 * @ Diane Ngani
 */
Ext.define('EisenApp.store.Product', {
    extend: 'Ext.data.Store',
    alias: 'store.productstore',
    requires: [ 'EisenApp.model.Product' ],
 
    config: {
        autoLoad: true,
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
	        	
//	            if ( this.getCount() == 0 && this.getLoadCounter() == 1 ){
//	            	var sqlinit=null;
//	   				if (null == Ext.getCmp('sqlinit')) {
//	   					sqlinit = Ext.create('EisenApp.override.SQLInit',{});
//	   				} else {
//	   					sqlinit = Ext.getCmp('sqlinit');
//	   				}
//	   				
//	   				 alert("load product");
//	   				sqlinit.initializeProduct();
//	            }
	            
	            this.sort();
	            console.log('Load: Product Store count is ' + this.getCount());
	        }
	    }
    }
});