sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/m/MessageBox"],
  function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("ep.ecommercemodule.controller.login", {
      onInit: function () {},

      onRegister: function () {
        const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("registration");
      },

      login: function () {
        const oView = this.getView();
        const aInputs = [
          oView.byId("emailAddressLogin"),
          oView.byId("passwordLogin"),
        ];

        let bValidationError = false;

        aInputs.forEach(function (oInput) {
          if (!oInput.getValue()) {
            oInput.setValueState("Error");
            bValidationError = true;
          } else {
            oInput.setValueState("None");
          }
        });

        if (bValidationError) {
          MessageBox.error("Please fill all the required fields.");
          return;
        }

        const sEmailAddress = oView.byId("emailAddressLogin").getValue();
        if (localStorage.getItem(sEmailAddress)) {
          const sPassword = oView.byId("passwordLogin").getValue();
          console.log(localStorage.getItem(sEmailAddress));
          if (
            sPassword ===
            JSON.parse(localStorage.getItem(sEmailAddress)).password
          ) {
            MessageToast.show("Login Successful");
          } else {
            MessageToast.show(
              "Password doesnot match. Kindly check your password"
            );
          }
        } else {
          MessageToast.show("User is not registered. Kindly register.");
        }
      },
    });
  }
);
