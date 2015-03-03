/**
 * 
 */
Ext.define("EisenApp.model.Product", {
    extend: "Ext.data.Model",
    
    config: {
	        fields: [ 
	                  {name:'product_id', type:'string'},
	                  {name:'name', type:'string'},
	                  {name:'group_name', type:'string'},
	                  {name:'basis', type:'float', defaultValue: 0},
	                  {name:'basis_unit', type:'string', defaultValue:'mg/100g'},
	                  {name:'insert_date', type:'date', defaultValue: new Date()} ,
	                  {name:'active', type:'boolean', defaultValue: true}
	       ],
	       validations: [
	                     {type: 'presence',  field: 'name'},
	                     {type: 'length',    field: 'name',     min: 2},
	                     {type: 'presence',  field: 'group_name'},
	                     {type: 'presence',  field: 'basis'},
	                     {type: 'length',    field: 'basis',     min: 1},
	                     {type: 'presence',  field: 'insert_date'}
	     ],
		 proxy: {
	         type: "sql",
//	         database: 'EisenApp'
	     }
    }
});
