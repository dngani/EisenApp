/**
 * 
 */
Ext.define("EisenApp.override.MessageBox", {
    override: "Ext.MessageBox",
    statics: {
        OK    : {text: 'OK',     itemId: 'ok',  ui: 'action'},
        YES   : {text: 'Ja',    itemId: 'yes', ui: 'action'},
        NO    : {text: 'Nein',     itemId: 'no'},
        CANCEL: {text: 'Abbrechen', itemId: 'cancel'},

        INFO    : Ext.baseCSSPrefix + 'msgbox-info',
        WARNING : Ext.baseCSSPrefix + 'msgbox-warning',
        QUESTION: Ext.baseCSSPrefix + 'msgbox-question',
        ERROR   : Ext.baseCSSPrefix + 'msgbox-error',

        OKCANCEL: [
            {text: 'Abbrechen', itemId: 'cancel'},
            {text: 'OK',     itemId: 'ok',  ui : 'action'}
        ],
        YESNOCANCEL: [
            {text: 'Abbrechen', itemId: 'cancel'},
            {text: 'Nein',     itemId: 'no'},
            {text: 'Ja',    itemId: 'yes', ui: 'action'}
        ],
        YESNO: [
            {text: 'Nein',  itemId: 'no'},
            {text: 'Ja', itemId: 'yes', ui: 'action'}
        ]
    }
});