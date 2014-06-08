var BaseController = RouteController.extend({
});

var LoggedInController = BaseController.extend({
  onBeforeAction: function() {
    console.log('user filter?');
  }
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('overview');

  this.route('playlists', {
    data: {
      playlists: function() {
        return Playlists.find({},{sort: {createdAt: -1}, limit: 5});
      }
    }
  });
  this.route('playlist', {
    path: '/playlist/:_id',
    notFoundTemplate: 'playlistNotFound',
    data: function() {
      return Playlists.findOne(this.params._id);
    }
  });

  this.route('loved');
  this.route('friends');
});