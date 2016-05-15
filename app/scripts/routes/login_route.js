EmberSpa.LoginRoute = Ember.Route.extend({
  controller: EmberSpa.LoginController,
  setupController: function(controller, model) {
    controller.loginFailed = false;
  }
});
EmberSpa.LogoutRoute = Ember.Route.extend({
  controller: EmberSpa.LoginController,
  setupController: function(controller, model) {
    var error = model['error'];
    console.log("error: " + !!error);
    controller.loginFailed = !!error;
    window.location = "/#/login";
  }
});
