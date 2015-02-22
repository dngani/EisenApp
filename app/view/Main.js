/**
 * 
 */
Ext.define('EisenApp.view.Main', {
	extend : 'Ext.Container',
	alias : 'widget.home',
	config : {
		layout : {
			type : 'vbox',
			pack : 'start'
		},
		id : 'home',
		title : 'EisenApp',
		items : [
		         {
		        	 xtype:'panel',
		        	 layout: 'fit',
		        	 width : '100%',
		        	 height : '45%',
		        	 items:[
			        	{
			 				xtype:'chartviewhome'
			 			}   
		        	 ]
		         },
		         {
					xtype: 'panel',
					layout :'hbox',
					height : '15%',
					style: 'background-color: rgba(0,128,128, 0.8);',
					styleHtmlContent: true,
					styleHtmlCls:'zustand',
					defaults: {
		        	     style: 'color:#EEE;'
		            },		         
					items: [
							 { 
					        	xtype:'panel',
					        	layout:'vbox',
					        	items:[
						        	{ 
							        	xtype:'spacer'
							        },
						        	{ 
							        	xtype:'label',
							        	html:'Zustand'
							        },
							        { 
							        	xtype:'spacer'
							        }
					        	]
					        },
					        {
					        	xtype:'spacer'
					        },					        
					        { 
					        	xtype:'panel',
					        	layout:'vbox',
					        	items:[
						        	{
							        	xtype:'spacer'
							        },
						        	{ 
							        	xtype:'label',
							        	html:'Heute',
							        	style:'font-size:75%;'
							        },
							        { 
							        	xtype:'label',
							        	id: 'heute',
							        	html:'0 mg'
							        },
							        {
							        	xtype:'spacer'
							        }
					        	]
					        },
					        {
					        	xtype:'spacer'
					        },	
					        { 
				        	xtype:'panel',
				        	layout:'vbox',
				        	items:[
					        	{
						        	xtype:'spacer'
						        },
					        	{ 
						        	xtype:'label',
						        	html:'Gestern',
						        	style:'font-size:75%;'
						        },
						        { 
						        	xtype:'label',
						        	id:'gestern',
						        	html:'0 mg'
						        },
						        {
						        	xtype:'spacer'
						        }
				        	]
				        },
				        {
				        	xtype:'spacer'
				        }	
					]
				},
				{
					xtype: 'panel',
					layout : {
						type : 'vbox',
						pack : 'top',
						align : 'top'
					},
					width : '100%',
					height : '40%',
					style: 'background-color:#EEE;',
					styleHtmlContent: true,
					styleHtmlCls:'home_notiz',
					items: [
					        { 
					        	xtype:'titlebar',
					        	title:'Letzte Notizen',
					        	docked: 'top',
					        	id:'home_notiz_title',
					        	style:'background-color: white; color: #666;'
					        },
							{
								xtype:'notelisthome',
								width: '100%'
							}
					]
				}
	         ] // Items im Main

	},
	initialize: function () {
		console.log('init Main');
//		this.callParent(arguments);
    },

    launch: function () {
		console.log('launch Main');
//		this.callParent(arguments);
    }

});