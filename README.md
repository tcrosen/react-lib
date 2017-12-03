# React Library Starter

A minimal starter template for React components that are intended to be distributed as a module.

**Technologies**

* Babel
* Webpack
* Jest
* Enzyme

## Development Process

1. Run `npm link` (only required once)
1. Run `npm start`
1. In another app, install using `link`:

```sh
$ npm link react-lib
```

1. Import into the app:

```js
import { ReactLibComponent } from 'react-lib';
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
