Ext.define("EisenApp.view.ChartView", {
	extend : 'Ext.chart.Chart',
	alias: 'widget.chartview',
	requires: [
        "Ext.TitleBar",
        "Ext.chart.CartesianChart",
        "Ext.chart.series.Line",
        "Ext.chart.axis.Numeric",
        "Ext.chart.axis.Category",
        "Ext.draw.sprite.Circle",
        'Ext.chart.interactions.ItemInfo'
    ],

    
	config : {
		title:'Statistiken',
		layout: 'fit',
		animate: true,
        height: '100%',
        width: '100%',
		minHeight: 150,
		minWidth: 150,
		maxHeight:'100%',
		maxWidth: '100%',
		innerPadding: {top: 5, left:5, right:5, bottom:5} ,
		id:'eisenchart',
        store: 'IronConsumStatistics',
        legend: {
            position: 'bottom'
        },
        series: [
                 {
                     type: "line",
                     xField: "entry_date",
                     yField: "entry_iron_value",
                     title: 'Eisenwert pro Tag',	
                     style: {
                         stroke: "rgb(0, 128, 128)"
                     },
                     marker: {
                         type: "circle",
                         stroke: "rgb(0, 128, 128)",
                         fill: "rgb(0, 128, 128)",
                         radius: 4,
                         lineWidth: 2
                     }
                 }
         ],

        axes: [{
                type: 'category',
                fields: ['entry_date'],
                position: 'bottom', //x-axis
                title: 'Datum',
                grid: true,
		        label: {
			        rotate:90,
			        fontSize: '80%'
			    }, 
		        renderer: function(v){
		        	return Ext.Date.format(v, 'd-m-Y') ;
		        }
            }, {
                type: 'numeric',
                fields: ['entry_iron_value'],
                position: 'left', //y-axis
                title: 'Eisenwert',
                grid: true
        }],
        
		interactions: [{
		    type: 'iteminfo',
		    panel: {
		        width:'90%',
		        height:'30%',
		        items:[{docked: 'top', xtype: 'toolbar', title: 'Details'}]
		    },
		
		    listeners: {
		        show: function(me, item, panel) {
		            panel.setHtml('Eintragsdatum: ' + Ext.Date.format(item.record.get('entry_date'), 'd-m-Y')+ '<br>Eisenwert: '+ item.record.get('entry_iron_value')+' mg');
		        }
		    }
		}]
	},
	
	initialize: function(){
		this.callParent();
		console.log('CHART\n' );
	}

});

