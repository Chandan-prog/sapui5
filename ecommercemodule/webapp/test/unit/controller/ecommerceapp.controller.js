/*global QUnit*/

sap.ui.define([
	"ep/ecommercemodule/controller/ecommerceapp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ecommerceapp Controller");

	QUnit.test("I should test the ecommerceapp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
