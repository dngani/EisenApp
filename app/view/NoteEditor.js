/**
 * 
 */
Ext.define('EisenApp.view.NoteEditor',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.noteeditor',
					requires : [ 'Ext.form.FieldSet'],
					config : {
						title: 'Notizen',
						layout : {
							type : 'vbox',
							pack : 'top'
//							align : 'center',
						},
						id : 'noteeditor',
						width : '100%',
						height : '100%',
						items : [
								{
									xtype : 'titlebar',
									title: 'Neues Notiz',
									width: '100%',
									id: 'subtitle',
									docked: 'top'
								},
								{
									xtype : 'panel',
									id : 'noteAction',
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
											text : 'Abbrechen',
											iconCls : 'icon-cross',
											id : 'note_cancel',
											minWidth : '40%',
											maxWidth : '50%'
	
										}, {
											xtype : 'spacer'
										}, {
											text : 'Speichern',
											iconCls : 'icon-checkmark',
											id : 'note_save',
											minWidth : '40%',
											maxWidth : '50%'
										}, {
											xtype : 'spacer'
										}
									]
								},

								{
									xtype : 'fieldset',
									defaults : {
										required : true,
										labelAlign : 'left',
										margin: '0.5em 0em 0.5em 0em',
										width: '100%'
									},
									items : [ {
												xtype : 'hiddenfield',
												id: 'note_id',
												name : 'note_id',
												value : 'n_1'
											}, {
												xtype : 'hiddenfield',
												id: 'insert_date',
												name : 'insert_date',
												value : new Date()
											},{
												xtype : 'datepickerfield',
												name : 'note_to',
												id : 'note_to',
												iconCls : 'icon-calendar',
												label : 'Eintragstag:',
												labelAlign : 'top',
												value : new Date(),
												picker : {
													yearFrom : 2010
												}
											}, {
												xtype : 'hiddenfield',
												id: 'note_type',
												name : 'note_type',
												value : '0'
											},{
												xtype : 'spacer'
											}, {
												xtype : 'textareafield',
												name : 'description',
												id : 'description',
												maxRows: 2,
												labelAlign : 'top',
												placeHolder : 'Schreiben Sie Ihr Notiz hier'
											},{
												xtype : 'spacer'
											},{
												xtype : 'image',
												id: 'img_url',
												name : 'img_url',
												height: 300,
												style: 'background-size: 100% 100% !important;',
												src: ''
											}
									]
								} ],
						listeners : [ {
							delegate : '#note_cancel',
							event : 'tap',
							fn : 'onCancelTap'
						}, {
							delegate : '#note_save',
							event : 'tap',
							fn : 'onSaveTap'
						}, {
							delegate : '#newField',
							event : 'tap',
							fn : 'onNewFieldSet'
						}
						]
					},
					
		 onCancelTap: function () {
	         console.log('onCancelTap');
	         this.fireEvent('onCancelNote', this);
	     },
	     
	     onSaveTap: function () {
	         console.log('onSaveTap');
	         this.fireEvent('onSaveNote', this);
	     }
	    

});