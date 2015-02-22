/**
 * 
 */
Ext.define("EisenApp.model.Group", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'group_id',
        fields: [
            { name: 'group_id', type: 'string' },
            { name: 'group_name', type: 'string' },
            { name: 'description', type: 'int' }
        ],
        validations: [
            { type: 'presence', field: 'group_id' },
            { type: 'presence', field: 'group_name' }
           // { type: 'presence', field: 'title', message: 'Please enter a title for this note.' }
        ]
    }
});