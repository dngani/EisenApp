/**
 * @autor Diane Ngani
 */

Ext.define ( 'EisenApp.view.MenuHaupt' ,{
	extend: "Ext.Menu",
	alias: 'widget.hauptmenu',
	
	requires: ["Ext.Menu", "Ext.Img"],
	
	config: {
	    id:'hauptmenu',
		//height: '80%',
		docked: 'right',
		border: '0 5 0 0',
		width:'75%',
		layout: 'vbox',
		scrollable: {
		    direction: 'vertical',
		    directionLock: true
		},
		zIndex: 5,
		defaults: {
            flex: 1,
            xtype: 'button',
            textAlign:'left'
        },
		items: [
				{
				iconCls: 'home',
				cls:'menu-button',
	            id: 'home-btn',
	            text:'Startseite'	            	
				},
		        { xtype: 'spacer' },
		        { xtype: 'spacer' },
		        {
		             iconCls: 'icon-plus',
		             id: 'new-entry-btn',
		             text:'Neuer Eintrag'
		         },
		         {
		             iconCls: 'icon-list',
		             id: 'all-entries-btn',
		             text:'Alle Eintr&auml;ge'
		         },
		         {
		             iconCls: 'icon-food',
		             id: 'all-food-btn',
		             text:'Nahrungsmittel'
		         },
		        
		         {
			         iconCls: 'icon-statistics',
		             id: 'statistic-btn',
		             text:'Statistiken'
			     },
			     {
			         iconCls: 'icon-tag',
		             id: 'notes-btn',
		             text:'Schnellnotizen'
			     },
			     {
			         iconCls: 'icon-search',
		             id: 'search-btn',
		             text:'Suche'
			     },
			     { xtype: 'spacer' }

		         ],
		         listeners: [{
		             delegate: "#home-btn",
		             event: "tap",
		             fn: "onHomeButtonTap"
		         }, {
		             delegate: "#new-entry-btn",
		             event: "tap",
		             fn: "onPlusButtonTap"
		         }, {
		             delegate: "#all-food-btn",
		             event: "tap",
		             fn: "onAllFoodButtonTap"
		         }, {
		             delegate: "#all-entries-btn",
		             event: "tap",
		             fn: "onAllEntriesButtonTap"
		         }, {
		             delegate: "#statistic-btn",
		             event: "tap",
		             fn: "onStatisticButtonTap"
		         }, {
		             delegate: "#notes-btn",
		             event: "tap",
		             fn: "onNotesButtonTap"
		         }, {
		             delegate: "#search-btn",
		             event: "tap",
		             fn: "onSearchButtonTap"
		         }]
     },
     
     onHomeButtonTap: function () {
         console.log("onHomeButtonTap");
         this.fireEvent("onHome", this);
     },
     
     onPlusButtonTap: function () {
         console.log("onPlusButtonTap");
         this.fireEvent("onNewEntry", this);
     },
     
     onAllFoodButtonTap: function () {
         console.log("onAllFoodButtonTap");
         this.fireEvent("onAllFood", this);
     },
     onAllEntriesButtonTap: function () {
         console.log("onAllEntriesButtonTap");
         this.fireEvent("onAllEntries", this);
     },
     onStatisticButtonTap: function () {
         console.log("onStatisticButtonTap");
         this.fireEvent("onStatistic", this);
     },
     onNotesButtonTap: function () {
         console.log("onNotesButtonTap");
         this.fireEvent("onNotes", this);
     },
     onSearchButtonTap: function () {
         console.log("onSearchButtonTap");
         this.fireEvent("onSearch", this);
     },

	constructor: function (){
		this.callParent(arguments);
		
	}
	
});
