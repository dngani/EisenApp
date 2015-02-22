/**
 * @author Diane Ngani
 */
Ext.define("EisenApp.model.Entry", {
    extend: "Ext.data.Model",
    
    config: {
	    fields: [ 
	        {name:'pte_id', type:'string'},
	        {name:'entry_id', type:'string'},
	        {name:'product_id', type:'string'},
	        {name:'entry_date', type:'date', defaultValue: new Date()},
	        {name:'insert_date', type:'date', defaultValue: new Date()}, 
	        {name:'quantity', type:'float', defaultValue: 100},
	        {name:'quantity_unit',type: 'string', defaultValue: 'g'}
	    ],
	              
	    validations: [
	        { type: 'presence', field: 'entry_id', message: 'No ENTRY_ID for the Entry ' },
	        { type: 'presence', field: 'insert_date', message: 'No INSERT_DATE for the Entry ' },
	        { type: 'presence', field: 'entry_date', message: 'No ENTRY_DATE for the Entry ' },
	        { type: 'presence', field: 'quantity', message: 'Geben Sie bitte die Menge ein' },
	        { type: 'length', field: 'quantity', min: 1, message: 'Geben Sie bitte die Menge ein'}
	    ],
	  proxy: {
	      type: 'sql',
	      database: 'EisenApp'
	  } // Proxy
  } // Config
});
