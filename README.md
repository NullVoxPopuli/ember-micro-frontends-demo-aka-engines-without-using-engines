# ember-micro-frontends-demo-aka-engines-without-using-engines

Demonstration of splitting app in to microfrontends that get stitched together by a consuming app.

More importantly, this is aiming to be a strategy for managing microfrontends that should work across all types of routing.

The focus of this way of doing microfrontends is more on the developer, and to gain user benefits, users will need to be using full-static mode under embroider-webpack or embroider-vite -- these will allow embroider to automatically find where bundles need to be split, and automatically manage the lazy loading of those bundles..

This requires:
- v2 addons (native npm packages / not v1 addons)[^v1addons]
- inter-library linking must be done via href. 
  - This can be done without a library, but is easier with  [`@properLinks`](https://ember-primitives.pages.dev/4-routing/proper-links)
  - This means that libraries may be used by multiple consumers, or in multiple locations
    - This constraint could be abstracted away with a library with a custom `<a>`-using component to manage dynamic parent route sub-paths.

And note, there is no library _needed_ here. No concept of "engines", we can rely on vanilla javascript and knowledge of how an app is constructed have libraries provide their own sections of the app with minimal glue.


However, there are some things that will be more convenient with a library
- using hrefs: [`@properLinks`](https://ember-primitives.pages.dev/4-routing/proper-links)
- using LinkTo or other: would need to be written

### How this was generated

Taking note of the `pnpm-workspace.yaml`, we can generate an empty example project like this:

```bash
git clone git@github.com:NullVoxPopuli/polaris-starter.git the-app
cd the-app
rm -r ./git
rm -r ./github
cd ..
mkdir packages
cd packages
ember addon -b @embroider/addon-blueprint --skip-git --skip-npm --addon-only library
ember addon -b @embroider/addon-blueprint --skip-git --skip-npm --addon-only settings
cd ../the-app
pnpm add library settings
```


[^v1addons]: note that v1 addons are not programs that an app invokes which then emits JS for the app to consume. this is way slower than if all dependencies were already built.
