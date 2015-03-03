/**
 * 
 */

 // Wait for Cordova to load
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
function onDeviceReady() {
    window.sqlitePlugin.importPrepopulatedDatabase({ file: "EisenApp.db", "importIfExists": true });
}