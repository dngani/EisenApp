/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'EisenApp',

    requires: [
        'Ext.MessageBox',
        'Ext.form.FieldSet','Ext.field.Select', 'Ext.field.Number', 'Ext.field.Hidden','Ext.field.Search',
        'Ext.Label',
        
        'EisenApp.override.SQLOverride',
        'EisenApp.override.SQLInit',
        'EisenApp.override.MessageBox'
    ],

    views: [
        'MenuHaupt','MenuBottomToolbar',	
        'MainContainer',
        'Main','ChartViewHome','NoteListHome',
        'Entry', 'EntryListView',
        'ProductListView',
        'ChartView',
        'NoteListView','NoteList',
        'SearchView', 'SearchBar','SearchBarField', 'SearchEntryList'
    ],

    controllers: [
        'EisenAppController'
    ],
    
    models : [
      'Entry',
      'Group','Product',
      'IronConsumStatistics',
      'Note'
    ],
    
	stores : [
	          'Entry',
	          'Group','Product',
	          'IronConsumStatistics',
	          'Note'
	],

    icon: "resources/icons/icon60x60.png",

    isIconPrecomposed: true,

    launch: function() {
	
                // Create the Menu and add it to the viewport
		var leftmenu = Ext.create('EisenApp.view.MenuHaupt', {});
		
		Ext.Viewport.setMenu(leftmenu, {
			side : 'left',
			cover: true,
			docked: 'left'
		});
//		Ext.Viewport.toggleMenu('left');
		
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        
        // Initialize the main view
        Ext.Viewport.add(Ext.create('EisenApp.view.MainContainer',{
        	    items: [
    	                {
							xtype: 'home',
							title : 'EisenApp'
//							html : 'Sollte die Startseite sein'
							
						}
	                ] // Items 
        	} // Config
        ));

        if(Ext.os.is.Android){
			// Register the event listener
		    document.addEventListener("backbutton", this.onBackKeyDown, false);
		 }
		
    },

    //Handle the back button
	onBackKeyDown: function() {
		EisenApp.app.fireEvent('backAndroid');
	},


    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
