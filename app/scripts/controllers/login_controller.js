EmberSpa.LoginController = Ember.ObjectController.extend({
  loginFailed: false,
  isProcessing: false,
  isSlowConnection: false,
  timeout: null,
  model: function() {
    return this.store.createRecord('login', {
      username: '',
      password: ''
    });
  },
  success: function() {
    this.reset();
    document.location = "/welcome";
  },

  failure: function() {
    this.reset();
    this.set("loginFailed", true);
  },

  slowConnection: function() {
    this.set("isSlowConnection", true);
  },

  reset: function() {
    clearTimeout(this.get("timeout"));
    this.setProperties({
      isProcessing: false,
      isSlowConnection: false
    });
  },
  actions: {
    reset: function() {
      this.setProperties({
        uername: '',
        password: ''
      });

    },
    login: function() {
      this.set("timeout", setTimeout(this.slowConnection.bind(this), 5000));
      this.setProperties({
        loginFailed: false,
        isProcessing: true
      });
      var props = this.getProperties(
        "username", "password");
      this.transitionToRoute('access', props.username, props.password);
      // $.post("/access", this.getProperties("username", "password"))
      //   .then(
      //     this.success.bind(this), this.failure.bind(this));
    }
  }
});
