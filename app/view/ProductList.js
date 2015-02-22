/**
 * 
 */
Ext.define ('EisenApp.view.ProductList', {
	extend: 'Ext.dataview.List',
	alias: 'widget.productlist',
	requires: ['EisenApp.store.Product'],
	config: {
		fullscreen: true,
		scrollable : true,
		grouped: true,
		pinHeaders: true,
		allowDeselect: true,
		layout : {
			type : 'fit'
		},
		id : 'productlist',
		height : '100%',
		emtpyText: 'Keine Nahrungsmittel vorhanden.',
		store: 'Product',
		itemTpl: '<div id="productname">{name}</div><div id="productbasis">{basis} {basis_unit}</div><div id="productgroup">{group_name}</div>',
		
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