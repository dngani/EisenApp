/**
 * @author Diane Ngani
 */
Ext.define( 'EisenApp.store.Note', {
	extend: 'Ext.data.Store',
	config: {
		autoLoad: true,	
//        autoSync: true,
		model: 'EisenApp.model.Note',	
		storeId: 'Note',		// Zur eindeutigen Identifikation innerhalb der Anwendung
	    sorters:[
                 {
              	   property:'note_to',
              	   direction: 'DESC'
                 }  
           ],
       
	   listeners: {
	        refresh: function() {
	            console.log('Refresh: Note Store count is ' + this.getCount());
	        },
	        load: function() {
	        	console.log('Load: Note Store count is ' + this.getCount());
	        }
	    }
	}
});