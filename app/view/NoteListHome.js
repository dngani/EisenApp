/**
 * 
 */
Ext.define ('EisenApp.view.NoteListHome', {
	extend: 'Ext.dataview.List',
	alias: 'widget.notelisthome',
	config: {
//		fullscreen: true,
		allowDeselect:true,
		layout : {
			type : 'fit'
		},
		id : 'notelisthome',
		height : '100%',
		emptyText: 'Keine Notizen vorhanden.',
		store: 'Note',
		itemTpl: '</pre><div id="note-date-to">F&uuml;r: {note_to:date("d-m-Y")}</div>'+
			'<div id="note-desc">{description}</div> '+
			'<div id="note-insert-date">hinzugefügt am {insert_date:date("d-m-Y")} </div> </pre>'
		
	}

});