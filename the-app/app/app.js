import Application from '@ember/application';

import loadInitializers from 'ember-load-initializers';
import Resolver from 'ember-resolver';
import library from 'library';
import config from 'the-app/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  constructor(owner) {
    super(owner);

    library(owner);
  }
}

loadInitializers(App, config.modulePrefix);
