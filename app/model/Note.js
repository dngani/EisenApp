/**
 *  @author Diane Ngani
 */
Ext.define("EisenApp.model.Note", {
    extend: "Ext.data.Model",
    
    config: {
    	idProperty: 'id',
    	identifier: { type: 'uuid' },
        fields: [ 
                  {name:'note_id', type:'string'},
                  {name:'insert_date', type:'date', defaultFormat: 'd/m/Y'},
                  {name:'note_to', type:'date', defaultValue: new Date(), defaultFormat: 'd/m/Y'},
                  {name:'note_type', type:'number', defaultValue: 0},
                  {name:'img_url', type:'string', defaultValue: ''},
                  {name:'description', type:'string'}
              ],
              
              validations: [
                            { type: 'presence', field: 'note_id', message: 'No NE_ID for the Note' },
                            { type: 'presence', field: 'insert_date', message: 'No INSERT_DATE for the Note' },
                            { type: 'presence', field: 'note_to', message: 'No NOTE_TO for the Note' },
                            { type: 'presence', field: 'note_type', message: 'No TYPE for the Note' }
//                            { type: 'presence', field: 'description', message: 'No DESCRIPTION for the Note' },
            ],
            
            proxy: {
                type: 'localstorage',
                id: 'eisenapp_note'
            }
  }
		
});
