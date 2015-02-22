/**
 * 
 */
Ext.define('EisenApp.view.Entry',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.entry',
					requires : [ 'EisenApp.view.EntryFormProduct', 'EisenApp.model.Entry'],
					config : {
						edit: false,
						title: 'Alle Einträge',
						scrollable : true,
						layout : {
							type : 'vbox',
							pack : 'center',
							align : 'center'
						},
						id : 'entryview',
						width : '100%',
						height : '100%',
						items : [
								{
									xtype : 'panel',
									id : 'entryAction',
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
										id : 'entry_cancel',
										minWidth : '40%',
										maxWidth : '50%'

									}, {
										xtype : 'spacer'
									}, {
										text : 'Speichern',
										iconCls : 'icon-checkmark',
										id : 'entry_save',
										minWidth : '40%',
										maxWidth : '50%'
									}, {
										xtype : 'spacer'
									}

									]
								},

								{
									xtype : 'fieldset',
//									title: 'Eintragsdaten',
									instructions : 'F&uuml;llen Sie bitte die aufgenommene Nahrungsmittel und die passende Menge.',
									defaults : {
										required : true,
										labelAlign : 'left'
									},
									items : [ {
										xtype : 'hiddenfield',
										id: 'entry_id',
										name : 'entry_id',
										value : 'ne_1'
									}, {
										xtype : 'hiddenfield',
										id: 'insert_date',
										name : 'insert_date',
										value : new Date()
									}, {
										xtype : 'datepickerfield',
										name : 'entry_date',
										id : 'entry_date',
										iconCls : 'icon-calendar',
										label : 'Eintragstag:',
										labelAlign : 'top',
										value : new Date(),
										picker : {
											yearFrom : 2012
										}
									}, {
										xtype : 'fieldset',
										zIndex : 1,
										width : '100%',
										margin : '2em 0.5em 0.1em 0.0em',
										padding : '.4em',
										style : 'background-color: #EEE; border: 1px solid #ddd; border-radius: 0.4em; webkit-border-radius: 0.4em; -moz-border-radius: 0.4em;',
										styleHtmlContent : true,
										layout : {
											type : 'hbox'
										},
										items : [ {
											xtype : 'label',
											html : 'Nahrungsmittel',
											flex : 2

										}, {
											xtype : 'label',
											html : 'Menge',
											flex : 1
										}, ]
									},{
										xtype: 'fieldset',
										id:'products'
									},
									{
										xtype : 'button',
										id : 'newField',
										text:'Neue'
									} 
									
									]
								} ],
								
						listeners : [ {
							delegate : '#entry_cancel',
							event : 'tap',
							fn : 'onCancelTap'
						}, {
							delegate : '#entry_save',
							event : 'tap',
							fn : 'onSaveTap'
						}, {
							delegate : '#newField',
							event : 'tap',
							fn : 'onNewFieldSet'
						},
						]
					},
					
		 onCancelTap: function () {
	         console.log('cancelEntry');
	         this.fireEvent('cancelEntry', this);
	     },
	     
	     onSaveTap: function () {
	         console.log('saveEntry');
	         this.fireEvent('saveEntry', this);
	     },
	     onNewFieldSet: function () {
	         console.log('newFieldSet');
	         this.fireEvent('newFieldSet', this);
	     },
	     
	     addProductForm: function(pos){
	    	 
	    	 console.log('Entry '+ this.getEdit());
	    	 // New Entry
	    	 if (! this.getEdit()){
	    		 
	    		 this.down('fieldset[id=products]').add([
		    		                      {
											xtype : 'formproduct',
											id : 'product0'
		    		                      }, {
											xtype : 'formproduct',
											id : 'product1'
		    		                      }            ]
		    		 );
	    	 }
	    	  else{
		    	 var i;
		    	 for (i = 0; i < pos; i++){
		    		 this.down('fieldset[id=products]').add([
					                 {
										xtype : 'formproduct',
										id : 'product'+i
					                 } ]
					);
		    	 }
	    	 }

	     }

//	     
//	     initialize: function (){
//	         console.log("Entry init");
//		},
////		
//		 launch: function (){
//			console.log("Entry launch");
//		}

});