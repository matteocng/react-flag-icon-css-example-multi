Example project demonstrating the use of [React Flag Icon Css](https://github.com/matteocng/react-flag-icon-css) with [Css Modules](https://github.com/css-modules/css-modules) or standard (global) Css, and custom country flags images.

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![Build Status](https://travis-ci.org/matteocng/react-flag-icon-css-example-multi.svg?branch=master)](https://travis-ci.org/matteocng/react-flag-icon-css-example-multi)
[![Greenkeeper badge](https://badges.greenkeeper.io/matteocng/react-flag-icon-css-example-multi.svg)](https://greenkeeper.io/)
[![dependencies Status](https://david-dm.org/matteocng/react-flag-icon-css-example-multi/status.svg)](https://david-dm.org/matteocng/react-flag-icon-css-example-multi)
[![devDependencies Status](https://david-dm.org/matteocng/react-flag-icon-css-example-multi/dev-status.svg)](https://david-dm.org/matteocng/react-flag-icon-css-example-multi?type=dev)
[![peerDependencies Status](https://david-dm.org/matteocng/react-flag-icon-css-example-multi/peer-status.svg)](https://david-dm.org/matteocng/react-flag-icon-css-example-multi?type=peer)

Powered by [webpack 3](https://github.com/webpack/webpack).

Previous versions:

- [webpack 2](https://github.com/matteocng/react-flag-icon-css-example-multi-example-multi/tree/webpack-2)
- [webpack 1](https://github.com/matteocng/react-flag-icon-css-example-multi-example-multi/tree/webpack-1)

## Installation

Clone the repository:

```bash
$ git clone https://github.com/matteocng/react-flag-icon-css-example-multi-example-multi.git
$ cd react-flag-icon-css-example-multi-example-multi
```

Install the required modules with [Yarn](https://yarnpkg.com/):

```bash
$ yarn
```

or with npm:

```bash
$ npm install
```

#### Option A) Css Modules

Run the [webpack development server](//github.com/webpack/webpack-dev-server) and apply the configuration for [Css Modules](https://github.com/css-modules/css-modules):

```bash
$ yarn start
```

or with npm:

```bash
$ npm run start
```

Open a browser and go here: [http://localhost:8080](http://localhost:8080).

_Please note that this example uses [React Css Modules](https://github.com/gajus/react-css-modules) which is a HOC ([Higher Order Component](https://reactjs.org/docs/higher-order-components.html)) that automatically maps Css Modules to React components. The usage of `React Css Modules` is completely optional; if you don't use it, instead of writing `styleName='some-css-module'`, write `className={styles['some-css-module']}`._

#### Option B) Standard, global Css

Run the [webpack development server](//github.com/webpack/webpack-dev-server) and apply the configuration for standard Css:

```bash
$ yarn start:classes
```

or with npm:

```bash
$ npm run start:classes
```

Open a browser and go here: [http://localhost:8080](http://localhost:8080).

#### Starting the server on another port

You can start the server on another port with this command:

```bash
$ PORT=5100 yarn start
```

or with npm:

```bash
$ PORT=6300 npm run start
```

## Notes on `webpack` configuration

This example app uses the <code>USE_CSS_MODULES</code> environment variable (set by <code>[package.json](package.json)</code> scripts) to allow for an easy "switch" between a configuration with or without [Css Modules](https://github.com/css-modules/css-modules) (see: [webpack.config.js](webpack/webpack.config.js)). This results in more complex code than need be.

In a real project you would never use the <code>USE_CSS_MODULES</code> switch and <code>getStylePropName</code>, and instead of writing <code>[options.stylePropName]</code> in the React components, you would write <code>className</code> or a combination of <code>className</code> and <code>styleName</code> (if you used `React Css Modules` or [`Babel Plugin React Css Modules`](https://github.com/gajus/babel-plugin-react-css-modules)).

Actually, the recommended approach adopted in the upcoming version of [create-react-app](https://github.com/facebook/create-react-app), is to configure `webpack` so that its loaders load files ending in `.module.css` as `Css Modules`, and files ending in `.css` as global Css. If you decide to go this way by using the upcoming version of `create-react-app` or with a custom app, it is easier to use `React Flag Icon Css` with `useCssModules: false`. Otherwise, you may try forcing any file that contains the pattern `flag-icon-css` and ends with `.css` to be loaded as `Css Modules` in your `webpack` configuration (to be tested!).

## Styles

This example app uses `sass` (`.scss`) styles, but `sass` is not required to use `react-flag-icon-css`. Your app can use any CSS preprocessor (such as [`postcss`](https://github.com/postcss/postcss)) or no CSS preprocessor at all. For instance, to use [`postcss`](https://github.com/postcss/postcss) in your stylesheets:

- rename `.scss` files to `.css`.
- remove _`sass-loader`_ from [webpack.config.js](webpack/webpack.config.js).
- `npm install` or `yarn add` the `PostCSS` plugins that you need.
- `import()` them into [webpack.config.js](webpack/webpack.config.js)
- add them to the `postcss-loader` section after `autoprefixer`.

## Contributing

Contributions are welcome. Please use a topic branch, follow the [AngularJS commit style guidelines](//github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines) and check that <code>yarn run pre-commit</code> returns zero errors before opening a PR. Thanks!

## License

This project is licensed under the terms of the [MIT license](LICENSE).
