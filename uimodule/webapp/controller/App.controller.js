const path = 'sap/ui/core/mvc/Controller'

sap.ui.define([
  path,
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
  'use strict';
  return Controller.extend(path, {
    onShowHelloFct: function () {
      // read message from i18n model
      var oBundle = this.getView().getModel("i18n").getResourceBundle();
      var sRecipient = this.getView().getModel().getProperty("/recipient/name");
      var sRecipient_juhu = this.getView().getModel().getProperty("/recipient/test");
      var sMsg = oBundle.getText("helloMsg", [sRecipient, sRecipient_juhu]);
      // show message
      MessageToast.show(sMsg);
    }
  });
});