EmberSpa.Router.map(function() {
  this.route('login');
  this.route('logout', {
    path: 'logout/:error'
  });
  this.route('access', {
    path: 'access/:username/:password'
  }, function() {});
  //  this.route('login');
  this.route('welcome');
  this.route('register');
  this.resource('users', function() {
    this.resource('user', {
      path: '/:user_id'
    }, function() {
      this.route('edit');
    });
    this.route('create');
  });

});
