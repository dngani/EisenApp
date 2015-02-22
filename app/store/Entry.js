/**
 * @author Diane Ngani
 */
Ext.define('EisenApp.store.Entry', {
    extend: 'Ext.data.Store',
    alias: 'store.entrystore',
    requires: [ 'EisenApp.model.Entry'  ],
    config: {
        autoLoad: true,
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
		        console.log('Load: Entry Store count is ' + this.getCount());
		    } // End Load-Funktion
		}
    }
});