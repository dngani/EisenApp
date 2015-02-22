/**
 * 
 */
Ext.define('EisenApp.view.GroupListView',
				{
					extend : 'Ext.Panel',
					alias : 'widget.grouplistview',
					requires : [ 'EisenApp.view.GroupList' ],
					config : {
						title: 'Nahrungsmittel',
						layout : {
							type : 'vbox',
							pack : 'top',
							align : 'center'
						},
						id : 'grouplistview',
						width : '100%',
						height: '80%',
						minHeight : '50%',
						maxHeight : '90%',
						items : [
									{
										xtype : 'titlebar',
										title: 'Gruppen',
										width: '100%',
										id: 'subtitle'
									},
									{
										xtype : 'fieldset',
										zIndex : 1,
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

											}
										]
									},
							        {
										xtype: 'grouplist',
										width: '100%'
							        }
								],
						listeners : [ 						]
					}
					
});