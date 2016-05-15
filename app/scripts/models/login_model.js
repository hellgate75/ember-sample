/*global Ember*/
EmberSpa.Login = DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
});

// probably should be mixed-in...
EmberSpa.Login.reopen({
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
// EmberSpa.Login.FIXTURES = [
//
//   {
//     id: 0,
//
//   },
//
//   {
//     id: 1,
//
//   }
//
// ];
