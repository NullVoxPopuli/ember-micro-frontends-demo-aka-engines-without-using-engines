/**
 * the router param here *is* the `this`
 * of the Router.map function
 */
export function setupRoutes(router) {
  router.route('settings', function () {
    this.route('notifications');
    this.route('api-keys');
    this.route('profile');
  });
}
