Ext.define('EisenApp.override.SQLOverride', {
    override: 'Ext.data.proxy.SQL',

/* //Overridden method
    getDatabaseObject: function() {
        return openDatabase(this.getDatabase(), '1.0', 'Sencha Database', 5 * 1024 * 1024);
    }
*/
	// Override der Methode getDatabaseObject () leider nicht leicht mit dem Plugin. Der Plugin ist nach dem Store-Loading verfügbar.
    // Deswegen wird die Datenbank manuell geöffnet.
    openDB: function(){
        return window.sqlitePlugin.openDatabase('EisenApp.db','1.0','EisenApp Database', -1);
    }
    
 });