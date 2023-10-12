import { getOwner } from '@ember/owner';

// taken from https://github.com/ember-engines/ember-engines/blob/master/packages/ember-engines/addon/routes.js
function buildRoutes(callback) {
  callback.isRouteMap = true;
  return callback;
}

export function buildEngine(name, routes) {
  return (owner) => {
    owner.register(`router-map:${name}`, buildRoutes(routes));

    return name;
  };
}
