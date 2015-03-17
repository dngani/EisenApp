/**
 * 
 */
Ext
		.define(
				'EisenApp.controller.EisenAppController',
				{
					extend : 'Ext.app.Controller',
					config : {
						record : null,
						list : null,
						db: null,
						refs : {
							home : 'home',
							hauptmenu : 'hauptmenu',
							main : 'maincontainer',
							menubottom : 'bottomtoolbar',

							entryView : 'entry',
							productFields : '#products',
							productForm : 'formproduct',
							entryList : 'entrylist',

							productList : 'productlist',
							productListView : 'productlistview',
							productEditor : 'producteditor',

							noteList : 'notelist',
							noteListView : 'notelistview',
							noteEditor : 'noteeditor',
							
							searchView:'searchview',
							searchBar:'searchbar',
							searchBarField:'searchbarfield',
							searchEntryList:'searchentrylist'

						},
						control : {
							main : {
								showMenu : 'onShowMenu',
								back : 'onBack'
							},

							hauptmenu : {
								onHome : 'onHomeCommand',
								onNewEntry : 'onNewEntryCommand',
								onAllFood : 'onAllFoodCommand',
								onAllEntries : 'onAllEntriesCommand',
								onStatistic : 'onStatisticCommand',
								onNotes : 'onNotesCommand',
								onSearch : 'onSearchCommand'
							},

							menubottom : {
								onEdit : 'onEditCommand',
								onDelete : 'onDeleteCommand'
							},
							/** ************* */
							entryView : {
								saveEntry : 'saveEntryCommand',
								cancelEntry : 'cancelEntryCommand',
								newFieldSet : 'newFieldSetCommand'
							},
							productForm : {
								deleteEntryLine : 'deleteEntryLineCommand'
							},

							entryList : {
								selectItem : 'OnSelectItem',
								deselectItem: 'OnDeselectItem'
							},
							/** ************* */
							productListView : {
								groupTap : 'onGroupTap',
								newProductTap : 'onNewProductTap'
							},

							productEditor : {
								cancelProduct : 'cancelProductCommand',
								saveProduct : 'saveProductCommand'
							},

							productList : {
								selectItem : 'OnSelectItem',
								deselectItem: 'OnDeselectItem'
							},
							/** ************* */
							noteListView : {
								fotoTap : 'onFotoTap',
								newNoteTap : 'onNewNoteTap'

							},
							noteList : {
								selectItem : 'OnSelectItem',
								deselectItem: 'OnDeselectItem'
							},

							noteEditor : {
								onSaveNote : 'saveNoteCommand',
								onCancelNote : 'cancelNoteCommand'
							},
							
							searchView: {
							
							},
							
							searchbar: {
							    onDisclose:'onDiscloseTap'
							},

							searchBarField: {
							    clearIconTap : 'onClearSearch',
							    keyUp: 'onSearchKeyUp',
							    searchFieldAction: 'onSearchFieldAction'
							},
							
							searchEntryList : {
								onDiscloseEntry:'onDiscloseTap'
							}

						}
					},

					// Helper functions
					getRandomInt : function(min, max) {
						return Math.floor(Math.random() * (max - min + 1))
								+ min;
					},

					displayNewContent : function(component) {

					    var menu = this.getMain().down('button[id=menu-btn]');
						menu.hide();
						    
						Ext.Viewport.hideMenu('left');
						this.getMain().push(component);
						
						if (Ext.getCmp('bottomtoolbar')) {
							this.getMenubottom().hide();
						}
					},

					OnSelectItem : function(list, record) {
					    
						console.log("onSelectItem");
//						console.log(record);
						this.setList(list);
						this.setRecord(record);
						if (null == Ext.getCmp('bottomtoolbar')) {
							this.getMain().add(
									    Ext.create( 'EisenApp.view.MenuBottomToolbar',{	docked : 'bottom'})
									);
						}else {
							this.getMenubottom().show();
						}
						
					},
					
					OnDeselectItem : function(list, record) {
						console.log("onDeSelectItem");
						this.getMenubottom().hide();
					},
					
					// Navigation
					onBack : function() {
//						alert('onBack');
						
						var view = this.getMain(),
						    active = view.getActiveItem(),
						    butt = view.down('button[id=menu-btn]');
						
						if (active.id === 'home'){
						    butt.show();
						}else{
							butt.hide();
						}

						if (Ext.getCmp('bottomtoolbar')) {
							this.getMenubottom().hide();
						}
						
					},
					
					onBackAndroid : function() {

					    var view = this.getMain(),
						    active = view.getActiveItem();
						
						if (active.id !== 'home'){
						    view.pop();
						    this.onBack();
						}
					},

					
					/** ************************************************************************************************************************************ */

					// Left Menu
					onHomeCommand : function() {
						console.log('onBack');
						this.getMain().reset();
						Ext.Viewport.hideMenu('left');
					},

					onNewEntryCommand : function() {
						console.log('onNewEntry');
						
						var now = new Date();
						var noteId = (now.getTime()).toString()
								+ (this.getRandomInt(0, 1000)).toString();

						var newEntryStore = Ext.create('EisenApp.model.Entry',
								{
									entry_id : noteId,
									insert_date : new Date(),
									insert_to : new Date()
								});

						var newEntryView;

						if (null == Ext.getCmp('entryview')) {
							newEntryView = Ext.create('EisenApp.view.Entry', {
								title : 'Neuer Eintrag',
								edit : false
							});
							newEntryView.addProductForm();
						}else{
							newEntryView == Ext.getCmp('entryview');
						}

						newEntryView.setRecord(newEntryStore);
						this.displayNewContent(newEntryView);
					},

					onAllEntriesCommand : function() {
						console.log('onAllEntries');
						Ext.getStore('IronConsumStatistics').setSorters([]);
						Ext.getStore('IronConsumStatistics').sort('entry_date', 'DESC');
						var entryListView = Ext.create('EisenApp.view.EntryListView', {});
						this.displayNewContent(entryListView);
					},

					onAllFoodCommand : function() {
						console.log('onAllFood');

						var productListView;

						if (null == Ext.getCmp('productlistview')) {
							productListView = Ext.create('EisenApp.view.ProductListView', {});
						}else{
							productListView == Ext.getCmp('productlistview');
						}
						
						this.displayNewContent(productListView);
					},

					onStatisticCommand : function() {
						console.log('onStatistic');
						var chartView
				        if (null == Ext.getCmp('chartview')){
				        	chartView = Ext.create('EisenApp.view.ChartView', {});
				        }else{
				        	chartView = Ext.getCmp('chartview');
				        }
				        this.displayNewContent (chartView);
					},
					onNotesCommand : function() {
						console.log('onNotes');
						var notelistview;

						if (null == Ext.getCmp('notelistview')) {
							noteListView = Ext.create('EisenApp.view.NoteListView', {});
						}else{
							noteListView == Ext.getCmp('notelistview');
						}
						this.displayNewContent(noteListView);

					},

					// TASK : Search
					onSearchCommand : function() {
						console.log('onSearch');
						
						var searchView;
						
						Ext.getStore('Product').clearFilter();
						Ext.getStore('Product').load();
						
						if (null == Ext.getCmp('searchview')) {
							searchView = Ext.create('EisenApp.view.SearchView', {});
						}else{
							searchView == Ext.getCmp('searchview');
						}
						this.displayNewContent(searchView);
					},

					/** *************************************************** Entry ********************************************************************************* */

					cancelEntryCommand : function() {
						console.log('cancelEntryCommand');
						this.getMain().pop();
						this.onBack();
					},

					saveEntryCommand : function() {
						console.log('saveEntryCommand');

						var entryEditor = this.getEntryView();

						var currentEntry = entryEditor.getRecord();
						var newValues = entryEditor.getValues();

//						console.log(newValues);

						// Update the current entry's fields with form values.
						currentEntry.set("entry_id", newValues.entry_id+'');
						currentEntry.set("insert_date", new Date());
						currentEntry.set("entry_date", new Date(newValues.entry_date) );

						var errors = null;
						console.log('Current.data\n');
//						console.log(currentEntry);

						var entryStore = Ext.getStore('Entry');
						
						if ( entryStore.findRecord('entry_date', currentEntry.data.entry_date ) != null ){
								Ext.Msg.alert('Achtung', 'Es wurde schon ein Eintrag mit dem gegebenen Datum angelegt. Geben Sie bitte ein neues Datum.', Ext.emptyFn);
								return;
							}
						
						var db = entryStore.getProxy().openDB();
						
						// Insert the new Values in Entry

						var insertd = new Date();
						var len = newValues.product_id.length;
						var id = null;
						var entry = null;
						var entrydata = [];
						
						if (typeof newValues.product_id === 'string') {
							len = 1;
							var tmp = newValues.product_id;
							newValues.product_id = [ tmp ];
							tmp = newValues.quantity;
							newValues.quantity = [ tmp ];
						}
						
						
						db.transaction(function(tx) {
							
//						    alert('Edit Entry:'+entryEditor.getEdit());
							// Falls ein Eintrag editiert wird, werden die bishereige Zeilen in der DB entfernt ... und komplett neu eingefügt :-)
							if ( entryEditor.getEdit() ){
								
									tx.executeSql("DELETE FROM Entry WHERE entry_id = "+currentEntry.data.entry_id+" ;", [], function(tx, res) {
										console.log("Delete Entry rowsAffected: " + res.rowsAffected + " ");
																	
										// remove im Lokal Entry Store ....
										var rec = entryStore.findRecord('entry_id',currentEntry.data.entry_id );
										while(rec != null){
											entryStore.remove(rec);
											rec = entryStore.findRecord('entry_id',currentEntry.data.entry_id );
										}
										
										entryStore.sync();
										
								  }, function(e) {
								    console.log("Delete Entry ERROR: " + e.message);
								  });
							
							}
							
							for ( var c = 0; c < len; c++) {
								id = currentEntry.data.entry_id + '-'+ newValues.product_id[c];
								entrydata = [];
	
								console.log(newValues.product_id[c] + ' \t'+ c);
									
								entry = Ext.create('EisenApp.model.Entry', {
									pte_id : id,
									entry_id : currentEntry.data.entry_id+'',
									product_id : newValues.product_id[c]+'',
									entry_date : currentEntry.data.entry_date,
									insert_date : currentEntry.data.insert_date,
									quantity : newValues.quantity[c],
									quantity_unit: currentEntry.data.quantity_unit+''
								});
								
								errors = entry.validate();
								console.log(errors);
								if (!errors.isValid()) {
									// Show all Erros !! - TO-DO
									Ext.Msg.alert('Achtung', 'Überprüfen Sie bitte Ihre Eingaben', Ext.emptyFn);
									entry.reject();
									return;
								}
									
								entrydata.push(entry.data.pte_id);
								entrydata.push(entry.data.entry_id);
								entrydata.push(entry.data.product_id);
								entrydata.push(entry.data.entry_date);
								entrydata.push(entry.data.insert_date);
								entrydata.push(entry.data.quantity);
								entrydata.push(entry.data.quantity_unit);
								
//								alert(entrydata);	
									var query = "INSERT INTO Entry (pte_id, entry_id,product_id, entry_date, insert_date,quantity,quantity_unit) VALUES (?,?,?,?,?,?,?);";
									tx.executeSql(query, entrydata, function(tx, res) {
							            console.log("INSERT insertId: " + res.insertId + " ");
								    
							            entryStore.add(entry);
//							            entryStore.sync();
							            
								  }, function(e) {
								    console.log("INSERT Entry ERROR: " + e.message);
								  });
	//							}
							} // End For-Schleife
							
							
							// Änderung in Entry-Store melden statt das Store aus der DB komplett neu zu laden
							entryStore.sync();
							entryStore.sort();
							// Das View-Table wird neu geladen. 
							Ext.getStore('IronConsumStatistics').load();
						
						
						});	 // Ende Transaktion
						
						this.getMain().pop();
						this.onBack();

					},

					newFieldSetCommand : function() {
						console.log('newFieldSetCommand');

						if (this.getProductFields().items.length === 1) {
							this.getProductFields().down('panel').down(
									'fieldset').down('button').enable();
						}

						var last = this.getProductFields().items.length - 1;
						var pos = this.getProductFields().items.keys[last];
						pos = pos.substr(7, pos.length);
						var p = parseInt(pos) + 1;

						this.getProductFields().add({
							xtype : 'formproduct',
							id : 'product' + p
						});
					},

					deleteEntryLineCommand : function(view, pid) {
						console.log('deleteEntryLineCommand' + pid);

						var field = 'panel[id=' + pid + ']';

						this.getProductFields().remove(
								this.getProductFields().down(field));

						if (this.getProductFields().items.length === 1) {
							this.getProductFields().down('panel').down(
									'fieldset').down('button').disable();
						}

						console.log(this.getProductFields());
					},

					editEntryCommand : function() {
//						console.log('LIST: '+this.getList()); 
//						console.log('RECORD: '+this.getRecord());
					    
						var entry_id = this.getRecord().data.entry_id+'';
						var entry_date= new Date (this.getRecord().data.entry_date);
						var insert_date ;

//						Ein Eintrag besteht aus mehreren Produkten. Diese müssen zuerst aus der Datenbank-Table Entry gesammelt werden ...
//					    ... und so vorbereitet sein, dass den Editor-Formular die passende Werte anzeigen kann
						// Get Data from Entry
						   
						var store = Ext.getStore('Entry');
//						alert('Filter Entry Count: '+store.getCount());
						store.clearFilter();
						
						store.filter('entry_id', '/'+entry_id+'/i'); // Funktioniert nicht. Ein Bug in Sencha Touch anscheinend. Sollte normalerweise bei der kommenden Schleife helfen
						
						var product_ids = [];
						var quantitys = [];
						
						store.each(function(item) {
//							console.log('Product: '+item.get('product_id') + '-'+ item.get('quantity')+' Entry_id:'+item.get('entry_id')+'\n');
							if (item.get('entry_id') == entry_id){
								product_ids.push(item.get('product_id'));
								quantitys.push(item.get('quantity'));
								insert_date= new Date(item.get('insert_date'));
							}
						});
						
						// Filter entfernen
						store.clearFilter();
						// Falls den Eintrag nur ein Produkt enthält, müssen String statt Array das Editor weitergeben werden
						var len  = product_ids.length
						if(product_ids.length == 1){
							var tmp = product_ids[0];
							product_ids= tmp;
							tmp = quantitys[0];
							quantitys= tmp;
							len = 1;
						}
						
//						alert(product_ids);
//						console.log(quantitys);
						
//						Die Daten werden für das Editor angepasst
						var values = {entry_date: '' ,entry_id:'' , insert_date: '' , product_id: '', quantity:'' };
						values.entry_date = entry_date;
						values.entry_id= entry_id;
						values.insert_date= insert_date;
						values.product_id= product_ids;
						values.quantity= quantitys;
						
//						Für die spätere Speicherung wird eine Model-Instanz von Entry benötigt, um die Daten einwandfrei validieren zu können.
						var entry = Ext.create('EisenApp.model.Entry', {
							entry_date: new Date (entry_date),
							entry_id: entry_id,
							insert_date: new Date (insert_date),
							product_id: null,
							quantity: 0,
							quantity_unit: "g"
							}
						);
						
//						Das Editor wird erzrugt und der Titel für die NavigationView angepasst
						var entryEditor;
						
						if (null == Ext.getCmp('entry')) {
							entryEditor = Ext.create('EisenApp.view.Entry', {
								title : 'Alle Einträge',
								edit : true
							});
//							alert('argument: '+len);
							entryEditor.addProductForm(len);
						} else {
							console.log('ELSE');
							entryEditor = Ext.getCmp('entry');
							entryEditor.setTitle('Alle Einträge');
							entryEditor.setEdit(true);
							entryEditor.addProductForm(len);
						}
						
//						Das Model wird gesetzt, sowie die gesammelte Werte im Formular
						entryEditor.setRecord(entry);
						entryEditor.setValues(values);
					
						this.getList().deselect(this.getRecord());

						this.displayNewContent(entryEditor);

					},
					
					deleteEntryCommand: function(){
					    
					    var rec = this.getRecord();
												
						Ext.Msg.confirm('', 'Sollte der Eintrag endgültig gelöscht werden?', function(buttonId){
							
						    if (buttonId == 'ok' || buttonId == 'yes'  ){
						    	
							    var entryStore = Ext.getStore('Entry');
								
								// Sammlung der Daten in Form eines Arrays für die Übertragung in der Datenbank
								
								var db = entryStore.getProxy().openDB();  // sqlitePlugin auf Smartphone
							
								var query = "DELETE FROM Entry WHERE entry_id LIKE '"+rec.data.entry_id+"' ;" ;

						    	db.transaction(function(tx) {
								    tx.executeSql(query, [], function(tx, res) {
										console.log("rowsAffected: " + res.rowsAffected + " in Entry ");
										
										// remove im Lokal Entry Store ....
										var tmp = entryStore.findExact('entry_id',rec.data.entry_id);
										while(tmp != -1){
											
											entryStore.removeAt(tmp);
											tmp = entryStore.findExact('entry_id',rec.data.entry_id);
										}
										entryStore.sync();
										// Das View-Table wird neu geladen.
										Ext.getStore('IronConsumStatistics').remove(rec);
										Ext.getStore('IronConsumStatistics').sync();
								    }, function(e) {
									    console.log("ERROR: " + e.message);
									  });
								});
						    }
						});
						
					},

					/** ******************************************************* Product ***************************************************************************** */

						// Product View
				   // Neuer Produkt anlegen ( + Nahrungsmittel)
					onNewProductTap : function() {
						console.log("onNewProductTap");

						//	Erstens muss  ein Model eines Produkt angelegt werden.				
						var now = new Date();
						var pId = ((now.getTime()).toString());

						var productStore = Ext.create('EisenApp.model.Product',
								{
									product_id : pId,
									insert_date : new Date(),
									group_name : 'test'

								});

						//	Danach muss  eine Instanz des Produkt-Editor initialisiert.					
						var productView;

						if (null == Ext.getCmp('producteditor')) {
							productView = Ext.create(
									'EisenApp.view.ProductEditor', {});
						} else {
							productView = Ext.getCmp('producteditor');
						}
						
						//	Dann das Model den Editor weitergeben.								
						productView.setRecord(productStore);
						this.displayNewContent(productView);
						
					},

					// Liste der Gruppe anzeigen. 
					onGroupTap : function() {
						console.log("onGroupTap");

						var view;
						if (null == Ext.getCmp('grouplist')) {
							view = Ext
									.create('EisenApp.view.GroupListView', {});
						} else {
							view = Ext.getCmp('grouplist');
						}
						this.displayNewContent(view);
						// Hier können Filter eingefügt werden.           
					},

					// Produkt-Editor: Das Editieren abbrechen
					cancelProductCommand : function() {
						console.log('cancelProductCommand');
						this.getMain().pop();
						this.onBack();
					},

					// Produkt-Editor: Das Editieren speichern
					saveProductCommand : function() {
						console.log('saveProductCommand');
						
						// Die Instanz des Produkt-Editors merken
						var productEditor = this.getProductEditor();

						// Die Instanz des gebundenen Models 
						var currentProduct = productEditor.getRecord();
						// und die eingegebenen Werte speichern
						var newValues = productEditor.getValues();
						var prodname = newValues.name.trim();
						prodname = prodname.slice(0,1).toUpperCase() + prodname.slice(1, prodname.length);
						// Aktualisierung von den Daten des Models.
						currentProduct.set("product_id", newValues.product_id);
						currentProduct.set("active", true);
						currentProduct.set("name", prodname);
						currentProduct.set("group_name", newValues.group_name);
						currentProduct.set("basis", newValues.basis);
						currentProduct.set("basis_unit", newValues.basis_unit);
						currentProduct.set("insert_date", 	new Date());
						
						// Validierung der Daten im Model
						var errors = currentProduct.validate();

						if (!errors.isValid()) {
							console.log(errors);
//							console.log(newValues);
//							console.log(currentProduct.data);
							Ext.Msg.alert('','Prüfen Sie bitte Ihre Eingaben erneut.', Ext.emptyFn);
							currentProduct.reject();
							return;
						}

						console.log(newValues);
						console.log(currentProduct.data);

						// Sammlung der Daten in Form eines Arrays für die Übertragung in der Datenbank
						var productdata = [];
						
						productdata.push(currentProduct.data.product_id);						
						productdata.push(currentProduct.data.name);
						productdata.push(currentProduct.data.group_name);
						productdata.push(currentProduct.data.basis);
						productdata.push(newValues.insert_date);
						productdata.push(currentProduct.data.active);
								
						console.log(productdata);
						 
						var productStore = Ext.getStore('Product');

//						alert(productStore.getRemoteFilter());
						var db = productStore.getProxy().openDB();  // sqlitePlugin auf Smartphone
//						console.log('DB:'+db);
						
						if (!productEditor.getEdit()){
							// Insert into database
									
							db.transaction(function(tx) {
								
								  tx.executeSql("INSERT INTO Product (product_id, name,group_name, basis, insert_date,active) VALUES (?,?,?,?,?,?);", productdata, function(tx, res) {
										    console.log("insertId: " + res.insertId + " -- probably 1");
										    console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
//										    alert("rowsAffected: " + res.rowsAffected + " -- should be 1");
								
								    productStore.add(currentProduct);
								    productStore.sync();
								    productStore.sort();
									productStore.load();
								
								  }, function(e) {
								    console.log("ERROR: " + e.message);
								  });
							});	
							
						}else {
						// Update 
							db.transaction(function(tx) {
							
							    var query = "UPDATE Product SET name='"+productdata[1]+"',group_name='"+productdata[2]+"', basis="+productdata[3]+" WHERE product_id ="+productdata[0]+" ;"; 
								  console.log(query);
							    tx.executeSql(query, [],function(tx, res) {
										    console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
//										    alert("rowsAffected: " + res.rowsAffected + " -- should be 1");
								
										    productStore.add(currentProduct); // Automatisch aktualisiert
										    productStore.sync();
										    productStore.sort();
											productStore.load();

										    // Das View-Table wird neu geladen.
										    Ext.getStore('IronConsumStatistics').load();
								
								  }, function(e) {
								    console.log("ERROR: " + e.message);
								  });
							});	
							
						}
						
						this.getMain().pop();
						this.onBack();

					},

					editProductCommand : function() {
						console.log('editProductCommand');
						// console.log(this.getList());
						// console.log(this.getRecord());

						var productView;

						if (null == Ext.getCmp('producteditor')) {
							productView = Ext.create(
									'EisenApp.view.ProductEditor', {edit: true });
							productView.editSubtitle();
						} else {
							productView = Ext.getCmp('producteditor');
						}

						// console.log(this.getProductEditor());
						productView.setRecord(this.getRecord());
						this.getList().deselect(this.getRecord());
						this.displayNewContent(productView);

					},

					deleteProductCommand : function() {
						console.log('deleteProductCommand');
						
						 var rec = this.getRecord();
						
						 Ext.Msg.confirm('', 'Sollte das Produkt endgültig gelöscht werden?', function(buttonId){
							
						    if (buttonId == 'ok' || buttonId == 'yes'  ){
						    	
								var productStore = Ext.getStore('Product');
							    var active = Ext.getStore('Entry').findExact('product_id', rec.data.product_id);
								
								if (active  == -1){
									// Delete into database
								    var db = productStore.getProxy().openDB();  // sqlitePlugin auf Smartphone
									db.transaction(function(tx) {
										
									var query = "DELETE FROM Product WHERE product_id = "+rec.data.product_id+" ;" ;
								//	console.log(query);
										  tx.executeSql(query, [] , function(tx, res) {
												    console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
								//				    alert("rowsAffected: " + res.rowsAffected + " -- should be 1");
												    productStore.remove(rec);
												    productStore.sync();
										
										  }, function(e) {
										    console.log("ERROR: " + e.message);
										  });
									});	
									
								}else {
								// Message 
								    Ext.Msg.alert('', 'Dieses Produkt kann nicht entfernt werden. Dazu sind einige Einträge gebunden.', Ext.emptyFn);
								}
						    }
						    
						});

					},
					
					/** *************************************************  Schnellnotizen *********************************************************************************** */

					// Note View
					onFotoTap : function() {
						console.log("onFotoTap");
						function success(image_uri) {
//							alert(image_uri);
							// Save in LocalStorage
						   var now = new Date();
						   var noteId = (now.getTime()).toString();
								
							var noteStore = Ext.getStore('Note');
							var noteModel = Ext.create('EisenApp.model.Note', {
									note_id : noteId,
									insert_date : new Date(),
									note_type : '1',
									note_to : new Date(),
									img_url : image_uri,
									description: 'Bild'
							    }
							);
							
							noteStore.add(noteModel);
							noteStore.sync();
							noteStore.load();
//							alert(noteStore.getCount());
	                    }
	 
	                    function fail(message) {
	                        alert("Failed: " + message);
	                    }
	                    
	                    navigator.camera.getPicture(success, fail, 
	                        {
	                            quality: 50,
	                            destinationType: navigator.camera.DestinationType.FILE_URI,
	                            saveToPhotoAlbum: true,
	                            sourceType: navigator.camera.PictureSourceType.CAMERA
	                        }
	                    );
							
					},
					
					onNewNoteTap : function() {
						console.log("onNoteTap");

						var now = new Date();
						var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 1000)).toString();

						var noteStore = Ext.create('EisenApp.model.Note', {
							note_id : noteId,
							insert_date : new Date(),
							note_type : '0',
							note_to : new Date(),
							description:'Init',
							img_url:''
						});

						var view;
						if (null == Ext.getCmp('noteeditor')) {
							view = Ext.create('EisenApp.view.NoteEditor', {});
						} else {
							view = Ext.getCmp('noteeditor');
						}

						console.log(noteStore);
						view.setRecord(noteStore);
						this.displayNewContent(view);
					},

					saveNoteCommand : function() {

						var noteEdit = this.getNoteEditor();

						var currentEntry = noteEdit.getRecord();
						var newValues = noteEdit.getValues();

						// Update the current note's fields with form values.
						currentEntry.set("note_id", newValues.note_id);
						currentEntry.set("insert_date", newValues.insert_date);
						currentEntry.set("note_to", newValues.note_to);
						currentEntry.set("note_type", newValues.note_type);
						currentEntry.set("img_url", newValues.img_url);
						currentEntry.set("description", newValues.description);
						
						console.log(newValues);
						console.log(currentEntry);

						var errors = currentEntry.validate();

						console.log(errors);

						if (!errors.isValid()) {
							Ext.Msg.alert('Achtung','Prüfen Sie bitte Ihre Eingaben!'+errors
									.getByField("img_url")[0].getMessage(),
									Ext.emptyFn);
							currentEntry.reject();
							return;
						}
						console.log(newValues);
						console.log(currentEntry);

						var noteStore = Ext.getStore("Note");

						if (null == noteStore.findRecord('note_id',
								currentEntry.data.note_id)) {
								noteStore.add(currentEntry);
						}
						
						noteStore.sync();
						noteStore.load();
						
						this.getMain().pop();
						this.onBack();
					},

					cancelNoteCommand : function() {
						console.log('cancelNoteCommand');
						this.getMain().pop();
						this.onBack();
					},

					editNoteCommand : function() {

						var noteView;

						if (null == Ext.getCmp('noteeditor')) {
							noteView = Ext.create('EisenApp.view.NoteEditor',
									{});
						} else {
							noteView = Ext.getCmp('noteeditor');
						}

						 console.log(this.getRecord());
						 console.log(noteView);
						noteView.setRecord(this.getRecord());
						noteView.down('image[id=img_url]').setSrc(this.getRecord().data.img_url);
						this.getList().deselect(this.getRecord());
						this.displayNewContent(noteView);
					},

					deleteNoteCommand: function() {
	
					    var rec = this.getRecord();
					    var noteStore = Ext.getStore("Note");
					    console.log(rec.data.note_type);
					    if(rec.data.note_type == 1){
					    		
//					    TODO delete ALL Thunbmail in Gallery 
					    	window.resolveLocalFileSystemURI(rec.data.img_url, OnSuccess, onError);
					    	
					    	function OnSuccess(fileEntry){
					    		Ext.Msg.alert('Achtung',fileEntry.toURL(), Ext.emptyFn);
					    		fileEntry.remove( onSuccess, onError);
				    		    function onSuccess(){ Ext.Msg.alert('','Das Foto wurde erfolgsreich gelöscht', Ext.emptyFn); }
					    	}
					    	
					    	function onError(error){
				    			alert(error.getMessage()) ;
				    		}
					   }
					    
					    noteStore.remove(rec);
					    noteStore.sync();
					    noteStore.load();
					},
					
					/*********************************************************** Suche  *************************************************************************** */						
//					onSearchKeyUp: function(searchField) {
//						
//					  queryString = searchField.getValue();
////					  alert('Suche: ' + queryString);
//					 
//					  var store = Ext.getStore('Product');
//					  store.clearFilter();
//					 
//					  if(queryString){
//					   var thisRegEx = new RegExp(queryString, "i");
//					   store.filterBy(function(record) {
//						    if (thisRegEx.test(record.get('name')) || thisRegEx.test(record.get('group_name'))) {
//						        return true;
//						    };
//						    return false;
//					   });
//					   store.load( ); // Load
//					  }
//					 },
					 
					 onSearchFieldAction: function(searchField) {
						
						  queryString = searchField.getValue();
//							  alert('Suche: ' + queryString);
						 
						  var store = Ext.getStore('Product');
						  store.clearFilter();
						 
						  if(queryString){
						   var thisRegEx = new RegExp(queryString, "i");
						   store.filterBy(function(record) {
							    if (thisRegEx.test(record.get('name')) || thisRegEx.test(record.get('group_name'))) {
							        return true;
							    };
							    return false;
						   });
						   store.load(); // Load
						  }
					  },
					 
					 onClearSearch: function() {
//					  alert('Clear icon is tapped');
					  var store = Ext.getStore('Product');
					  store.clearFilter();
					  store.load();

					 },
					 
					onDiscloseTap: function(list, record){
	
					  var queryString = record.get('product_id')+'';
	
					  var store = Ext.getStore('Entry');
					 
					  store.clearFilter();
					 
					   if(queryString){
						   var thisRegEx = new RegExp(queryString, "i");
						   store.setRemoteFilter(false);
						   alert(store.getRemoteFilter());
						   store.filterBy( function(item) {
//							    alert(item.get('product_id'));
							    if (thisRegEx.test(item.get('product_id'))) {
							        return true;
							    };
							    return false;
						   });
						  
						   store.load(); // Load
//						   alert(store.getCount());
						   
						   Ext.getCmp('searchentrylist').down('label').setHtml(record.get('name'));
						   Ext.getCmp('searchview').setActiveItem(1);
						}
					  
					 },
					 
					onDiscloseTapEntry : function(list, record) {
					    
					     alert('Entry Details');
					     Ext.getCmp('searchview').setActiveItem(2);

					},
					
					
					/*********************************************************** Menu Bottom  *************************************************************************** */

					// Menu - Bottom
					onEditCommand : function() {
						var active = this.getMain().getActiveItem();
						if (active.id == 'entrylist' ||active.id == 'searchentrylist' ) {
							// console.log(this.getEntryView());
							// this.fireEvent('onEditEntry',this);
							this.editEntryCommand();
						} else if (active.id == 'productlistview') {
							// console.log(active);
							this.editProductCommand();
						} else if (active.id == 'notelistview') {
							// console.log(active);
							this.editNoteCommand();
						}
					},

					onDeleteCommand : function() {
						console.log('Test');
						var active = this.getMain().getActiveItem();
						if (active.id == 'entrylist') {
							this.deleteEntryCommand();
						} else if (active.id == 'productlistview') {
							 console.log(active);
							this.deleteProductCommand();
						} else if (active.id == 'notelistview') {
							this.deleteNoteCommand();
						}
					},

					launch : function() {
						this.callParent();
						console.log('Controller launch');
					},
					
					init : function(application) {
						console.log('Controller init');
						
						application.on([{
				            event: 'backAndroid',
				            fn: this.onBackAndroid,
				            scope: this
				        }]);
						
					}
				});
