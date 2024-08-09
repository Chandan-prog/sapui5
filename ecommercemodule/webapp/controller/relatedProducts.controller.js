sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("ep.ecommercemodule.controller.relatedProducts", {
        onInit: function () {
            // Initialization code, if needed
        },

        viewProduct: function (oCard) {
            var oSelectedProduct = oCard
              .getSource()
              .getBindingContext()
              .getObject();
            console.log(oSelectedProduct)
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("productDetail", {
              productId: oSelectedProduct.id,
            });
          },
    });
});
