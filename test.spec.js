"use-strict";
load p =pageij.js
describe("OStore App", function() {

    it("step1: Click tile 'Manage Templates' App ", function() {
       //*********************Block for sap.ui.core.Icon - Perform Click*****************************************************************

element(by.ui5(p.ui5ControlProperties_po)).click();
//!!*******************************************************************************************************


    });

	it("step2: Provide an Opportunity Title", function(){
		var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.Input","mProperties":{"type":"Text","placeholder":"Enter the Title for a new opportunity"}},
							"parentProperties":{"metadata":"sap.m.FlexItemData","mProperties":{}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{},
							"childProperties":{}
							};
var value ="Test";    //value to be entered by user
element(by.ui5(ui5ControlProperties)).getAttribute("id").then(function(id) {
element(by.css("[id='"+id+"'] input")).sendKeys(value);
});
	});
	
	it("Step3: Enter the Number of people required", function(){
	
	var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.ui.core.Icon","mProperties":{"src":"sap-icon://add"}},
							"parentProperties":{"metadata":"sap.m.StepInput","mProperties":{"valueState":"None"}},
							"prevSiblingProperties":{"metadata":"NumericInput","mProperties":{"textAlign":"End","type":"Number","valueState":"None"}},
							"nextSiblingProperties":{},
							"childProperties":{}
							};
element(by.ui5(ui5ControlProperties)).click();

	});
	
	it("Step4: Enter the Start Date", function(){
	
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.DatePicker","mProperties":{"valueFormat":"yyyyMMdd"}},
							"parentProperties":{"metadata":"sap.m.FlexItemData","mProperties":{}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{},
							"childProperties":{}
							};
var value ="Mar 01, 2018";    //value to be entered by user
element(by.ui5(ui5ControlProperties)).getAttribute("id").then(function(id) {
element(by.css("[id='"+id+"'] input")).sendKeys(value);
});
	});
	
	it("Step4: Enter the Start Date", function(){
	var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.DatePicker","mProperties":{"valueFormat":"yyyyMMdd"}},
							"parentProperties":{"metadata":"sap.m.FlexItemData","mProperties":{}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{},
							"childProperties":{}
							};
var value ="Mar 02, 2018";    //value to be entered by user
element(by.ui5(ui5ControlProperties)).getAttribute("id").then(function(id) {
element(by.css("[id='"+id+"'] input")).sendKeys(value);
});
});

it("Step5: Select Opportunity Type", function(){
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.ComboBox","mProperties":{}},
							"parentProperties":{"metadata":"sap.m.FlexItemData","mProperties":{}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{},
							"childProperties":{"metadata":"sap.ui.core.InvisibleText","mProperties":{"text":"Arrow Down"}}
							};
var value='CRT';  //value to be entered by user
var UI5Action='change,selectionChange';
element(by.ui5Action(ui5ControlProperties,UI5Action,Index,value)).perform();
});

it("Step6: Enter a Description", function(){
var ui5ControlProperties =  {
							"elementProperties":{"metadata":"sap.m.TextArea","mProperties":{"placeholder":"Enter description"}},
							"parentProperties":{"metadata":"sap.m.FlexItemData","mProperties":{}},
							"prevSiblingProperties":{},
							"nextSiblingProperties":{},
							"childProperties":{}
							};
var value ="Test";    //value to be entered by user
element(by.ui5(ui5ControlProperties)).getAttribute("id").then(function(id) {
element(by.css("[id='"+id+"'] textarea")).sendKeys(value);
});
});

it("Step7: Click on Save button", function(){
var ui5ControlProperties =  {
                            "elementProperties":{"metadata":"sap.m.Toolbar","mProperties":{}},
                            "parentProperties":{"metadata":"sap.m.FlexItemData","mProperties":{}},
                            "prevSiblingProperties":{},
                            "nextSiblingProperties":{},
                            "childProperties":{"metadata":"sap.m.ToolbarSpacer","mProperties":{}}
                            };
element(by.ui5(ui5ControlProperties)).click();
});

});
