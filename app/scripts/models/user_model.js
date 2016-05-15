/*global Ember*/
EmberSpa.User = DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  type: DS.attr(),
  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});

// probably should be mixed-in...
EmberSpa.User.reopen({
  attributes: function() {
    var model = this;
    return Ember.keys(this.get('data')).map(function(key) {
      return Em.Object.create({
        model: model,
        key: key,
        valueBinding: 'model.' + key
      });
    });
  }.property()
});

// delete below here if you do not want fixtures
// EmberSpa.User.FIXTURES = [
//
//   {
//     id: 0,
//     username: 'admin',
//     password: 'admin',
//     name: 'Amministratore',
//   },
//
//   {
//     id: 1,
//     username: 'webuser',
//     password: 'webuser',
//     name: 'Standard Users',
//   }
//
// ];
