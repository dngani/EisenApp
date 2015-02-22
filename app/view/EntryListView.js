/**
 * 
 */
Ext.define ('EisenApp.view.EntryListView', {
	extend: 'Ext.dataview.List',
	alias: 'widget.entrylist',
	config: {
		fullscreen: true,
		title: 'Alle Eintr&auml;ge',
		scrollable : true,
		grouped: true,
		pinHeaders: true,
		allowDeselect:true,
		layout : 'fit',
		emptyText:'keine Einträge vorhanden.',
		id : 'entrylist',
		width : '100%',
		height : '100%',
		store: 'IronConsumStatistics',
		itemTpl: '<div id="entry_date">{entry_date:date("d-m-Y")} </div><div id="entry_iron_value"><span id="eisenwert">Eisenwert: </span>{entry_iron_value} mg </div><div style="clear:both"></div>',
	
// 		Listeners für einzelne ListItem
		listeners : {
				select : function(view, record) {
					console.log("onSelectItem");
					this.onSelectItem(view, record);
				},

				deselect: function(record){
					console.log("onDeSelectItem");
				 	this.onDeSelectItem(record);
				}
		}
    },
	
	onSelectItem: function(view, record) {
	    this.fireEvent('selectItem', this, record);
	},
	
	onDeSelectItem: function(view, record) {
	    this.fireEvent('deselectItem', this, record);
	}

	
});

