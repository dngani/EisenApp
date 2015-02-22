/**
 * 
 */
Ext.define ('EisenApp.view.EntryFormProduct', {
	extend: 'Ext.Panel',
	alias : 'widget.formproduct',
	requires : [ 'Ext.field.Select', 'Ext.field.Number', 'Ext.form.FieldSet'   ],
	
	initialize : function() {
	
		this.callParent(arguments);
	
		var productset = {
				xtype : 'fieldset',
				zIndex : 1,
				width: '100%',
				margin: '0.5em 0.0em 0.1em 0.0em',
				layout: {
					type:'hbox'
				},
				items: [ 
				         {
				        	xtype: 'selectfield',
	                        name: 'product_id',
	                        flex: 2,
	                        valueField: 'product_id',
	                        displayField: 'name',
	                        store: Ext.getStore('Product')
				         },
				         {
				        	xtype: 'numberfield',
	                        name: 'quantity',
	                        label: 'g',
	                        labelAlign:'right',
	                        placeHolder: '100',
	                        value: 10,
	                        flex: 1,
	                        clearIcon : false,
	                        minValue: 0,
	                        maxValue: 9999
				         },
				         {
				        	xtype: 'button',
		                    iconCls: 'icon-cross',
		                    style: 'background: #DDD; padding: 4px;border-radius: 50%;',
		                    listeners: {
		                    	scope: this,
						        tap: function(view ) {
						        	this.onDeleteEntryLine(view, this.getId());
						        }
						    }
				         }
				]
			};
	
		this.add([ productset ]);
	},
	
	onDeleteEntryLine: function(view, pid) {
		console.log("onDeleteEntryLine "+ pid);
	    this.fireEvent('deleteEntryLine', this, pid);
	},
	
	config : {
		layout: 'hbox'
	}
	
});