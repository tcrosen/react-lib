# React Library Starter

A minimal starter template for React components that are intended to be distributed with styles via npm.

**Technologies**

* React
* Styled Components
* Babel
* Webpack
* Jest
* Enzyme

## Development Process

1.  Run `npm link` to create a local symlink of your package.
1.  Run `npm start` to start webpack.
1.  In another app, run `npm link my-react-lib` to install your package locally.
1.  Import your components into your app:

    ```js
    import Button from 'my-react-lib/lib/Button';
    ```

## Build Commands

### `npm run start`

Start Webpack in watch mode.

### `npm run build`

Run Webpack once and quit.

### `npm run tdd`

Run tests in watch mode.

### `npm run test`

Run tests once and quit.
