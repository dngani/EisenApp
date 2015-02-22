/**
 * 
 */

Ext.define ( 'EisenApp.view.MenuBottomToolbar' ,{
	extend: "Ext.Toolbar",
	alias: 'widget.bottomtoolbar',
	
	requires: ["Ext.Img"],
	
	config: {
		id: 'bottomtoolbar',
		layout: 'hbox',
		height:'100% !important',
		border: 0,
		style: 'background: #DDDDDD none repeat left top !important;',
		docked: "top",
		zIndex: 5,
		defaults: {
            flex: 1,
            xtype: 'button'
        },
		items: [
				{
					iconCls: 'icon-pencil',
					id: 'edit-btn'
				},
		        { xtype: 'spacer' },
		        { xtype: 'spacer' },
		        {
		             iconCls: 'icon-trash',
		             id: 'trash-btn'
		         }
	         ],
         listeners: [{
             delegate: "#edit-btn",
             event: "tap",
             fn: "onEditButtonTap"
         }, {
             delegate: "#trash-btn",
             event: "tap",
             fn: "onTrashButtonTap"
         }]
     },
     
     onEditButtonTap: function () {
         console.log("onEditButton");
         this.fireEvent("onEdit", this);
     },
     
     onTrashButtonTap: function () {
         console.log("onTrashButton");
         this.fireEvent("onDelete", this);
     },
    

	constructor: function (){
		this.callParent(arguments);
		
	}
	
});
