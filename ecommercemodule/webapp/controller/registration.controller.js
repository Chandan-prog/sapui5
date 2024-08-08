sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/m/MessageBox"],
  function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("ep.ecommercemodule.controller.registration", {
      onInit: function () {
        const oView = this.getView();
        oView.byId("step2").setVisible(false);
      },

      showNextStep: function () {
        const oView = this.getView();
        const aInputs = [
          oView.byId("userName"),
          oView.byId("emailAddress"),
          oView.byId("password"),
        ];

        let bValidationError = false;
        const regex = /@[a-zA-Z]+\.com$|@[a-zA-Z]+\.in$/;

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

        const sEmailAddress = oView.byId("emailAddress").getValue();
        if (!regex.test(sEmailAddress)) {
          MessageBox.error("Invalid Email Address");
          return;
        }

        MessageToast.show("Step 1 completed successfully!");
        oView.byId("step1").setVisible(false);
        oView.byId("step2").setVisible(true);
      },

      showPrevStep: function () {
        const oView = this.getView();
        oView.byId("step2").setVisible(false);
        oView.byId("step1").setVisible(true);
      },

      onSubmit: function () {
        const oView = this.getView();
        const aInputs = [
          oView.byId("firstName"),
          oView.byId("lastName"),
          oView.byId("mobileNumber"),
          oView.byId("address"),
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

        const sMobileNumber = oView.byId("mobileNumber").getValue();
        if (sMobileNumber.length !== 10) {
          MessageBox.error("Invalid Mobile Number");
          return;
        }

        const sEmailAddress = oView.byId("emailAddress").getValue();
        if (localStorage.getItem(sEmailAddress)) {
          MessageBox.error("User email already exists.");
          return;
        }
        const oUserData = {
          userName: oView.byId("userName").getValue(),
          emailAddress: sEmailAddress,
          password: oView.byId("password").getValue(),
          firstName: oView.byId("firstName").getValue(),
          lastName: oView.byId("lastName").getValue(),
          mobileNumber: sMobileNumber,
          address: oView.byId("address").getValue(),
        };
        localStorage.setItem(sEmailAddress, JSON.stringify(oUserData));
        MessageToast.show("Registration completed successfully!");
        const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo('login');
      },
    });
  }
);
