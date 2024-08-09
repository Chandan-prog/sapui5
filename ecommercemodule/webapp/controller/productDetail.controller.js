sap.ui.define(
    ["sap/ui/core/mvc/Controller", 
    "ep/ecommercemodule/model/product.model"],
    function (Controller, product) {
      "use strict";
  
      return Controller.extend("ep.ecommercemodule.controller.productDetail", {
        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("productDetail").attachPatternMatched(this.onProductMatched, this);
        },
        onProductMatched: function (oEvent) {
            var oArgs = oEvent.getParameter("arguments");
            var sProductId = oArgs.productId;
            this.loadProductData(sProductId);
        },
        loadProductData: function (sProductId) {
            var oModel = product.getProductsModel();
            const productList = oModel.getProperty("/products");
            const [productDetail] = productList.filter((product) => product.id === sProductId);
            var oProductModel = new sap.ui.model.json.JSONModel(productDetail);
            this.getView().setModel(oProductModel, "productModel");

            const relatedProducts = productList.filter((product) => product.category === productDetail.category && product.id !== sProductId);
            const data = {products:relatedProducts}
            var oRelatedProductsModel = new sap.ui.model.json.JSONModel(data);
            this.getView().byId("relatedProductList").setModel(oRelatedProductsModel);
        },
        homeButtonHandler: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("home");
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
    }
);
