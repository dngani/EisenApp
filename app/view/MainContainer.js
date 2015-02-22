/**
 * @autor Diane Ngani
 */

Ext.define('EisenApp.view.MainContainer', {

	extend : 'Ext.navigation.View',
	alias : 'widget.maincontainer',
	
	config : {
		fullscreen: true,
		id:'maincontainer',
		layout: {
			type: 'card'
		},
		defaultBackButtonText: '',
		navigationBar: {
		    ui: 'dark',
		    docked: 'top',
		    height: '15%',
		    backButton : {
		        align : 'left',
		        iconCls: 'icon-arrow-left',
		        iconMask: true,
		        ui : 'plain'
		      },
		      
		    items: [{
		    	 xtype:'button',
		    	    id: 'menu-btn',
		    	    iconCls: 'icon-list2',
		    	    align:'left',
		    	    ui : 'plain',
		    	    handler: function(){
		    	    	if(Ext.Viewport.getMenus().left.isHidden()){
		    	    		Ext.Viewport.showMenu('left');
		    	    	}else{
		    	    		Ext.Viewport.hideMenu('left');
		    	    	}
		    	    }
		    }]
		}
		
	},
	
	showMenuTap: function () {
		  console.log("showMenuTap");
	      this.fireEvent("showMenu", this);
	},
	
	initialize: function () {
		console.log('init Nav Bag');
		this.callParent(arguments);
	},

    launch: function () {
		console.log('launch Nav Bag');
//		this.callParent(arguments);
    }

});