Example project demonstrating the use of [React Flag Icon Css](https://github.com/matteocng/react-flag-icon-css-example-multi) with [React Css Modules](//github.com/gajus/react-css-modules) or standard Css, and custom flags.

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

#### Option A) React Css Modules

Run the [webpack development server](//github.com/webpack/webpack-dev-server) and apply the configuration for [React Css Modules](//github.com/gajus/react-css-modules):

```bash
$ yarn start
```

or with npm:

```bash
$ npm run start
```

Open a browser and go here: [http://localhost:8080](http://localhost:8080).

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

## Notes

This example app uses the <code>USE_CSS_MODULES</code> environment variable (set by <code>[package.json](package.json)</code> scripts) to allow for an easy "switch" between a configuration with or without [React Css Modules](//github.com/gajus/react-css-modules) (see: [webpack.config.js](webpack/webpack.config.js)). This results in more complex code than need be.

In a real project you would probably choose to either go with [React Css Modules](//github.com/gajus/react-css-modules) or standard Css, removing the <code>USE_CSS_MODULES</code> switch and <code>getStylePropName</code>, replacing <code>[options.stylePropName]</code> in the React components with either <code>className</code> (standard Css) or <code>styleName</code> (modules).

## Styles

This example app uses `sass` (`.scss`) styles, but `sass` is not required to use `react-flag-icon-css-example-multi`. Your app can use any CSS preprocessor (such as [`postcss`](https://github.com/postcss/postcss)) or no CSS preprocessor at all. For instance, to use [`postcss`](https://github.com/postcss/postcss) in your stylesheets:

- rename `.scss` files to `.css`.
- remove _`sass-loader`_ from [webpack.config.js](webpack/webpack.config.js).
- `npm install` or `yarn add` the `PostCSS` plugins that you need.
- `import()` them into [webpack.config.js](webpack/webpack.config.js)
- add them to the `postcss-loader` section after `autoprefixer`.

## Contributing

Contributions are welcome. Please use a topic branch, follow the [AngularJS commit style guidelines](//github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines) and check that <code>yarn run pre-commit</code> returns zero errors before opening a PR. Thanks!

## License

This project is licensed under the terms of the [MIT license](LICENSE).
