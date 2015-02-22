/**
 * 
 */
Ext.define ('EisenApp.view.NoteList', {
	extend: 'Ext.dataview.List',
	alias: 'widget.notelist',
	requires: ['EisenApp.store.Note'],
	config: {
		fullscreen: true,
		allowDeselect:true,
		layout : {
			type : 'fit'
		},
		id : 'notelist',
		height : '100%',
		emptyText: 'Keine Notizen vorhanden.',
		store: 'Note',
		itemTpl: '</pre><div id="note-date-to">F&uuml;r: {note_to:date("d-m-Y")}</div>'+
		    '<tpl if="note_type==1"> <div class="img" style="background-image: url({img_url}); height: 150px; background-size: 100% 100%;"></div></tpl>'+
			'<div id="note-desc">{description}</div> '+
			'<div id="note-insert-date">hinzugefügt am {insert_date:date("d-m-Y")} </div> </pre>',
			
		listeners: {
		        select: function(view, record) {
		            console.log("onSelectItem");
		        	this.onSelectItem(view, record);
		        },
		        
		        deselect: function(record){
					console.log("onDeSelectItem");
				 	this.onDeSelectItem(record);
		        }

		    }
	},

	// Wenn ein Element in der List ausgewählt wird
	onSelectItem: function(view, record) {
	    this.fireEvent('selectItem', this, record);
	},
	
	onDeSelectItem: function(view, record) {
	    this.fireEvent('deselectItem', this, record);
	}
	
});