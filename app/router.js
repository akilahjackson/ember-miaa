import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  // Posts
  this.route('posts', function () {
		this.route('post', {path: ':post_slug'});
	});


  /// END Router Map
});

export default Router;
