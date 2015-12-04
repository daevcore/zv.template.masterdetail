sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("zv.template.masterdetail.controller.App", {
		onInit: function(){
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
	});

});