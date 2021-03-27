sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
  "johan/TestApp/model/models",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
], function (UIComponent, Device, models) {
  "use strict";

  return UIComponent.extend("johan.TestApp.Component", {

    metadata: {
      manifest: "json",
      rootView: "johan.TestApp.view.App"
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init: function () {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);

      // enable routing
      this.getRouter().initialize();

      // set the device model
      this.setModel(models.createDeviceModel(), "device");

      // set data model
      var oData = {
        recipient: {
          name: "Welt"
        }
      };
      var oModel = new JSONModel(oData);
      this.setModel(oModel);

      // set i18n model
      var i18nModel = new ResourceModel({
        bundleName: "johan.TestApp.i18n.i18n"
      });
      this.setModel(i18nModel, "i18n");

    }
  });
});