/**
 * 
 */

Ext.define("EisenApp.store.Group", {
    extend: "Ext.data.Store",
    
    config: {
    	storeId: 'Group',
    	model: "EisenApp.model.Group",
    	sorters:[
                 {
              	   property:'group_name',
              	   direction: 'ASC'
                 }  
           ],
        data : [
            {group_id: "b10", group_name: "Backwaren und Knabbergebäck"},
            {group_id: "b11", group_name: "Brot"},
            {group_id: "d12", group_name: "Diätische Lebensmittel"},
            {group_id: "e13", group_name: "Eier"},
            {group_id: "f14", group_name: "Fette"},
            {group_id: "f15", group_name: "Fisch"},
            {group_id: "f16", group_name: "Fleisch"},
            {group_id: "g17", group_name: "Geflügel"},
            {group_id: "g18", group_name: "Gemüse"},
            {group_id: "g20", group_name: "Getreide"},
            {group_id: "i21", group_name: "Innereien"},
//            {group_id: "m22", group_name: "Milchprodukte und Käse"},
            {group_id: "n23", group_name: "Nudeln"},
            {group_id: "n24", group_name: "Nüsse und Samen"},
            {group_id: "o25", group_name: "Obst"},
            {group_id: "p26", group_name: "Pilze"},
            {group_id: "g28", group_name: "Gerichte mit Fleisch"},
            {group_id: "v29", group_name: "Vegetarische Gerichte"},
            {group_id: "w30", group_name: "Wild"},
            {group_id: "w31", group_name: "Wurst"},
//            {group_id: "g32", group_name: "Gewürze & mehr"}
        ]
    }
    
});










