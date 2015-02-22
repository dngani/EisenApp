/**
 * 
 */
Ext.define ('EisenApp.view.SearchBarField', {
	extend: 'Ext.Toolbar',
	alias: 'widget.searchbarfield',
	config: {
		layout: 'fit',
		id:'searchbarfield',
		items: [
	         {
	             xtype: 'formpanel',
	             docked: 'top',
	             height: 55,
	             minHeight:'100%',
	             maxHeight: '100%',
	             items: [
	                 {
	                     xtype: 'searchfield',
	                     placeHolder: 'Nahrungsmittel oder Gruppe ...',
	                     id: 'searchbox',
	                     width: '99%',
	                     inputCls: 'searchbox'
	                 }
	             ]
	         }        

		  ] // Items
	},
	
	onClearIconTap: function(){
	    this.fireEvent('clearIconTap', this);
	},

	onKeyUp: function(searchField, e){
	    this.fireEvent('keyUp', searchField);
	},

	onSearchFieldAction: function(searchField, e){
	    this.fireEvent('searchFieldAction', searchField);
	},

	initialize: function(){
	    this.on({
		    	scope: this,
		        delegate: '#searchbox',
	//	        keyup: 'onKeyUp',
		        action: 'onSearchFieldAction',
		        clearicontap:'onClearIconTap',
		        disclose: 'onDisclosure'
		    });

	}
});