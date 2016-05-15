EmberSpa.AccessRoute = Ember.Route.extend({
  // model: function(params) {
  //   // return this.store.createModel('login', this.getProperties(
  //   //   "username", "password"));
  // },
  controller: EmberSpa.AccessController,
  setupController: function(controller, model) {
    // controller.set('model', model);
    // buffer = model.get('attributes').map(function(attr) {
    //   return {
    //     key: attr.get('key'),
    //     value: attr.get('value')
    //   }
    // });
    // controller.set('buffer', buffer)
    var user = model['username'];
    var password = model['password'];
    console.log("User: " + user);
    console.log("PWD: " + password);
    if (user === 'admin' && password === 'admin') {
      controller.transitionToRoute('welcome');
    } else {
      controller.transitionToRoute('logout', 'true');
      window.location.reload();
    }
  }
});
