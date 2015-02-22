/**
 * 
 */
Ext.define ('EisenApp.view.SearchEntryList', {
	extend: 'Ext.dataview.List',
	alias: 'widget.searchentrylist',
	requires: ['EisenApp.store.Entry'],
	config: {
		fullscreen: true,
		scrollable : true,
		grouped: true,
		pinHeaders: true,
		allowDeselect:true,
		layout : 'fit',
		emptyText:'keine Einträge vorhanden.',
		id : 'searchentrylist',
		width : '100%',
		height : '100%',
		store: 'Entry',
		itemTpl: '<div id="entry_date">{entry_date:date("d-m-Y")} </div><div id="entry_iron_value">{quantity} {quantity_unit} </div><div style="clear:both"></div>',
	
		items: [
			{
				xtype:'toolbar',
				id: 'searchentrylist',
				layout: 'hbox',
				height:'100% !important',
				border: 0,
				style: 'background: #FFF none; box-shadow: none',
				docked: "top",
				zIndex: 5,
				defaults: {
		            flex: 1
		        },
				items: [
				        { xtype: 'spacer' },
			            {
				             xtype:'label',
				             flex:4,
				             margin: '5% 0%',
				             style:'color: #999; text-shadow:none;'
				        },
				        { xtype: 'spacer' },
						{	
							xtype:'button',
							text:'Zurück',
							style:'font-size: 100%',
							listeners: {
							    tap: function(){
									  Ext.getCmp('searchview').setActiveItem(0);
							    }
						    }
						}
		         ]
			}
		],
		        
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

