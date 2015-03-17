/**
 * 
 */
Ext.define ('EisenApp.view.SearchBar', {
	extend: 'Ext.dataview.List',
	alias: 'widget.searchbar',
	requires: ['EisenApp.store.Product'],
	config: {
		fullscreen: true,
		scrollable : true,
		grouped: true,
		pinHeaders: true,
		allowDeselect: true,
		onItemDisclosure: true,
		layout : {
			type : 'fit'
		},
		id : 'searchbar',
		height : '100%',
		emtpyText: 'Keine Nahrungsmittel vorhanden.',
		store: 'Product',
		itemTpl: '<div id="productname">{name}</div><div id="productbasis">{basis} {basis_unit}</div><div id="productgroup">{group_name}</div>',
		
		items: [
	        {
	            xtype: 'searchbarfield',
	            docked:'top'
            }
		  ], // Items
		  
		  listeners : {
				disclose : function(list, record) {
					console.log("onDisclose");
					this.onDisclose(list, record);
				}
	     }
	},
	
	onDisclose: function ( view, record ){
	    this.fireEvent('onDisclose', view, record);
	}

	
});