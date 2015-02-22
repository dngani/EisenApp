/**
 * 
 */
Ext.define ('EisenApp.view.GroupList', {
	extend: 'Ext.List',
	alias: 'widget.grouplist',
	requires: ['EisenApp.store.Group'],
	config: {
		fullscreen: true,
		scrollable : true,
		layout : {
			type : 'fit'
		},
		id : 'grouplist',
		width : '100%',
		height : '100%',
		store: 'Group',
		itemTpl: '<div id="groupname">{group_name}</div>'
//		listeners: {
//	        itemtap: function(view,index,target, record) {
//	            Ext.Msg.alert('Beschreibung', 'Diese Gruppe ...  ' + record.get('group_name'));
//	        }
//	    }
	}
	
	
	
});