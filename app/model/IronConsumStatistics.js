/**
 * 
 */
Ext.define("EisenApp.model.IronConsumStatistics", {
    extend: "Ext.data.Model",
    config: {
        fields: [ 
                  {name:'entry_id', type:'string'},
                  {name:'entry_date', type:'date'},
                  {name:'entry_iron_value', type:'float', defaultValue: 0}
       ],
       
       proxy :{
    	   type: 'sql',
    	  // database: 'EisenApp'
       }
    }
});
