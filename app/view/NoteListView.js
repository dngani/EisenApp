/**
 * 
 */
Ext.define('EisenApp.view.NoteListView',
				{
					extend : 'Ext.Panel',
					alias : 'widget.notelistview',
					requires : [ 'EisenApp.view.NoteList' ],
					config : {
						title: 'Schnellnotizen',
						layout : {
							type : 'vbox',
							pack : 'top',
							align : 'center'
						},
						id : 'notelistview',
						width : '100%',
						height : '100%',
						items : [
									{
										xtype : 'panel',
										id : 'noteListAction',
										layout : {
											type : 'hbox'
										},
										minHeight : '15%',
										docked : 'top',
										defaults : {
											xtype : 'button',
											height : '75%'
										},
										items : [ 
											          {
												xtype : 'spacer'
											}, {
												text : 'Notiz schreiben',
												iconCls : 'icon-plus',
												id : 'note_add',
												minWidth : '50%',
												maxWidth : '80%'
										
											}, {
												xtype : 'spacer'
											}, {
												text : 'Bild',
												iconCls : 'icon-camera',
												id : 'note_foto',
												minWidth : '25%',
												maxWidth : '50%'
											}, {
												xtype : 'spacer'
											}
										]
									},
							        {
										xtype: 'notelist',
										width: '100%'
							        }
								],
						
								  listeners: [{
							             delegate: "#note_add",
							             event: "tap",
							             fn: "onNewNoteTap"
							         }, {
							             delegate: "#note_foto",
							             event: "tap",
							             fn: "onFotoTap"
							         }]
					     },
					     
					     onNewNoteTap: function () {
					         console.log("onNewNoteTap");
					         this.fireEvent("newNoteTap", this);
					     },
					     
					     onFotoTap: function () {
					         console.log("onFotoTap");
					         this.fireEvent("fotoTap", this);
					     }
});