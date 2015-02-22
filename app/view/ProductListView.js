/**
 * 
 */
Ext.define('EisenApp.view.ProductListView', {
	extend : 'Ext.Panel',
	alias : 'widget.productlistview',
	requires : [ 'EisenApp.view.ProductList'],
	config : {
		title : 'Nahrungsmittel',
		layout : {
			type : 'vbox',
			pack : 'top',
			align : 'center'
		},
		id : 'productlistview',
		width : '100%',
		height : '100%',
		items : [ {
			xtype : 'panel',
			id : 'productListAction',
			layout : {
				type : 'hbox'
			},
			minHeight : '15%',
			docked : 'top',
			defaults : {
				xtype : 'button',
				height : '75%'
			},
			items : [ {
				xtype : 'spacer'
			}, {
				text : 'Nahrungsmittel',
				iconCls : 'icon-plus',
				id : 'product_add',
				minWidth : '50%',
				maxWidth : '80%'

			}, {
				xtype : 'spacer'
			}, {
				text : 'Gruppen',
				iconCls : 'icon-list',
				id : 'product_group',
				minWidth : '20%',
				maxWidth : '40%'
			}, {
				xtype : 'spacer'
			}

			]
		}, {
			xtype : 'panel',
//			zIndex : 1,
			width : '100%',
			margin : '0.5em 0.5em 0.3em 0.0em',
			padding : '.4em',
			style : 'background-color: #EEE;',
			styleHtmlContent : true,
			layout : {
				type : 'hbox'
			},
			items : [ {
				xtype : 'label',
				html : 'Name',
				margin : '0em 0em 0em 0.3em',
				flex : 3

			}, {
				xtype : 'label',
				html : 'Eisen-Gehalt',
				textAlign : 'center',
				flex : 2
			} ]
		}, {
			xtype : 'productlist',
			width : '100%'
		} ],

		listeners : [ {
			delegate : "#product_add",
			event : "tap",
			fn : "onNewProductTap"
		}, {
			delegate : "#product_group",
			event : "tap",
			fn : "onGroupTap"
		} ]
	},

	onNewProductTap : function() {
		console.log("onNewProductTap");
		this.fireEvent("newProductTap", this);
	},

	onGroupTap : function() {
		console.log("onGroupTap");
		this.fireEvent("groupTap", this);
	},

	constructor : function() {
		this.callParent(arguments);

	}
});