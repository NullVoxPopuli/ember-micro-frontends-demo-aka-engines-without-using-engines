# ember-micro-frontends-demo-aka-engines-without-using-engines

Demonstration of splitting app in to microfrontends that get stitched together by a consuming app.

This requires:
- v2 addons (native npm packages / not v1 addons)[^v1addons]

And note, there is no library needed here. No concept of "engines", we can rely on vanilly javascript and knowledge of how an app is constructed have libraries provide their own sections of the app with minimal glue.

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
