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

1.  Modify the `package.json` file so it correctly represents your new library:

```diff
-  "name": "my-react-ui",
+  "name": "your-new-npm-package-name",
-  "version": "2.0.0",
+  "version": "1.0.0",
-  "description": "A collection of themable React components.",
+  "description": "Your new description",
-  "author": "Terry Rosen",
+  "author": "Your Name"
  "license": "ISC",
  "repository": {
    "type": "git",
-    "url": "https://github.com/tcrosen/react-lib.git"
+    "url": "https://github.com/your-github-name/your-repo.git"
  }
```

### Development Components

1.  Run `npm start` to start the development server.
1.  Run `npm link` to create a local symlink of your package.

1.  Run `npm start` to start webpack.
1.  In another app, run `npm link my-react-lib` to install your package locally.
1.  Import your components into your app:

    ```js
    import Button from 'my-react-lib/lib/Button';
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
