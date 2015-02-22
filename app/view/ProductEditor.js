/**
 * 
 */
Ext.define('EisenApp.view.ProductEditor',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.producteditor',
					requires : [ 'EisenApp.store.Group' ],
					config : {
						title: 'Nahrungsmittel',
						edit:false,
						layout : {
							type : 'vbox',
							pack : 'top',
							align : 'center'
						},
						id : 'producteditor',
						width : '100%',
						height : '100%',
						items : [
								{
									xtype : 'titlebar',
									title: 'Neues Nahrungsmittel',
									width: '100%',
									id: 'subtitle',
									docked: 'top'
								},
								{
									xtype : 'panel',
									id : 'productAction',
									layout : {
										type : 'hbox'
									},
									minHeight : '15%',
//									docked : 'top',
									defaults : {
										xtype : 'button',
										height : '75%'
									},
									items : [ {
										xtype : 'spacer'
									}, {
										text : 'Abbrechen',
										iconCls : 'icon-cross',
										id : 'product_cancel',
										minWidth : '40%',
										maxWidth : '50%'
									}, {
										xtype : 'spacer'
									}, {
										text : 'Speichern',
										iconCls : 'icon-checkmark',
										id : 'product_save',
										minWidth : '40%',
										maxWidth : '50%'
									}, {
										xtype : 'spacer'
									}

									]
								},

								{
									xtype : 'fieldset',
									instructions : 'F&uuml;llen Sie bitte die aufgenommene Nahrungsmittel und deren passenden Basiswert.',
									defaults : {
										required : true,
										labelAlign : 'left',
										margin: '0.5em 0em 0.5em 0em'
									},
									items : [ {
										xtype : 'hiddenfield',
										id: 'product_id',
										name : 'product_id',
										value : 'p_1'
									}, {
										xtype : 'hiddenfield',
										id: 'insert_date',
										name : 'insert_date',
										value : new Date()
									}, {
										xtype : 'textfield',
										name : 'name',
										autoComplete:true,
										id : 'productname',
										label : 'Nahrungsmittel:',
										labelAlign : 'top',
										placeHolder : 'Name'
									},{
				                        xtype: 'selectfield',
				                        name: 'group_name',
										id : 'productgroup',
										label : 'Zuordnung:',
										labelAlign : 'top',
										placeHolder:'Gruppe auswählen',
				                        valueField: 'group_name',
				                        displayField: 'group_name',
				                        store: 'Group'
										
									},{
										xtype : 'numberfield',
										name : 'basis',
										id : 'productbasis',
										label : 'Basis-Wert:',
										labelAlign : 'top',
										placeHolder : '20',
										width: '50%',
										style:'float: left;'
									},
									{
				                        xtype: 'textfield',
				                        name: 'basis_unit',
										id : 'productbasis_unit',
										label : 'Einheit',
										labelAlign : 'top',
				                        valueField: 'group_id',
				                        displayField: 'value',
				                        placeHolder : 'mg / 100g',
				                        value: 'mg / 100g',
				                        width: '50%',
				                        disabled:true										
									}
									
									]
								} ],
						listeners : [ {
							delegate : '#product_cancel',
							event : 'tap',
							fn : 'onCancelTap'
						}, {
							delegate : '#product_save',
							event : 'tap',
							fn : 'onSaveTap'
						}
					]
				},
					
		 onCancelTap: function () {
	         console.log('onCancelTap');
	         this.fireEvent('cancelProduct', this);
	     },
	     
	     onSaveTap: function () {
	         console.log('onSaveTap');
	         this.fireEvent('saveProduct', this);
	     },
	     
		editSubtitle: function(){
		    console.log('Launch ProductEditor '+this.getEdit());
		
		    if (this.getEdit()){
		   	 this.down('titlebar').setTitle('Editieren');
			 }
		
		}
	     

});