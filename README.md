# React Library Starter

A starter template for React component libraries that are intended to be distributed via npm.

**Technologies**

* React
* Webpack
* Babel
* Styled Components
* Jest
* Enzyme

## How to Use This Repository as a Template

1.  Clone the master branch of this repo with no commit history:

    ```
    $ git clone --depth=1 --single-branch https://github.com/tcrosen/react-lib.git <your new dir>
    $ cd <your new dir>
    ```

1.  Modify the `package.json` as necessary so it correctly represents your new library:

```diff
-  "name": "my-react-ui",
+  "name": "your-new-npm-package-name",
-  "version": "2.0.0",
+  "version": "1.0.0",
```

### Local Development

1.  Run `npm start` to start a local development server where you can render and test your components.

### Distributed Development

1.  Build the package for distribution (optionally with watch enabled) `npm run build [-- --watch]`
1.  Run `npm link` to create a local symlink of your package.
1.  In another app, run `npm link <your-package-name>` to install your package locally.
1.  Import components into your app:

    ```js
    import Button from '<your-package-name>/lib/Button';
    ```

## Build Commands

### `npm run start`

Start Webpack development server.

### `npm run build`

Build for release.

### `npm run tdd`

Run tests in watch mode.

### `npm run test`

Run tests once and quit.
