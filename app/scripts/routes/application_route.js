EmberSpa.ApplicationRoute = Ember.Route.extend({
  // admittedly, this should be in IndexRoute and not in the
  // top level ApplicationRoute; we're in transition... :-)
  model: function() {
    return [{
      descr: "Login",
      view: "login"
    }, {
      descr: "Register",
      view: "register"
    }];
  }
});
