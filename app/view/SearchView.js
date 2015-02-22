/**
 * @autor Diane Ngani
 */

Ext.define('EisenApp.view.SearchView', {

	extend : 'Ext.Panel',
	alias : 'widget.searchview',
	
	config : {
		fullscreen: true,
		id:'searchview',
		layout: 'card',
		title: 'Suche',
		items: [
			{
				xtype:'searchbar'
			},
			{
				xtype:'searchentrylist'
			},
//			{
//				xtype:'searchentrydetails'
//			}
		]	
	},
	
	initialize: function () {
		console.log('init Search');
		this.callParent(arguments);
	},

    launch: function () {
		console.log('launch Search');
//		this.callParent(arguments);
    }

});