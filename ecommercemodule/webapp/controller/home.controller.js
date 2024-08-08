sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel", 
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter",
    "ep/ecommercemodule/model/product.model"
  ],
  function (Controller, JSONModel, Filter, FilterOperator, Sorter, product) {
    "use strict";
    return Controller.extend("ep.ecommercemodule.controller.home", {
      onInit: function () {
        var oModel = product.getProductsModel();
        this.getView().setModel(oModel);
      },
      onSearch: function (oEvent) {
        var sQuery = oEvent.getParameter("newValue");
        var oFilter = new Filter("name", FilterOperator.Contains, sQuery);
        var oBinding = this.byId("productFlexBox").getBinding("items");
        oBinding.filter([oFilter]);
      },

      onCategoryFilter: function (oEvent) {
        var sKey = oEvent.getParameter("selectedItem").getKey();
        var oBinding = this.byId("productFlexBox").getBinding("items");
        var aFilters = [];
        if (sKey) {
          aFilters.push(new Filter("category", FilterOperator.EQ, sKey));
        }
        oBinding.filter(aFilters);
      },

      onSortOrderChange: function (oEvent) {
        var sKey = oEvent.getParameter("selectedItem").getKey();
        var bDescending = sKey === "desc";
        var oBinding = this.byId("productFlexBox").getBinding("items");

        var oSorter = new Sorter("price", bDescending);
        oBinding.sort(oSorter);
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

      logoutButtonHandler: function() {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("login")
        localStorage.setItem("loggedInUser",null)
      }
    });
  }
);
