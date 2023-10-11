import EmberRouter from '@ember/routing/router';

import { setupRoutes as library } from 'library';
import { setupRoutes as settings } from 'settings';
import config from 'the-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  settings(this);
  library(this);
});
