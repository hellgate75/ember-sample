EmberSpa.AccessController = Ember.ObjectController.extend({
  needs: 'login',
  access: function() {
    var user = this.get('username');
    var password = this.get('password');
    console.log("User: " + user);
    console.log("PWD: " + password);
    var login = this.get('loginData');
    console.log("login: " + password);
  }
});
