Example project demonstrating the use of [React Flag Icon Css](//github.com/matteocng/react-flag-icon-css) with [React Css Modules](//github.com/gajus/react-css-modules) or standard (global) Css, and custom flags. Powered by [webpack 1](//github.com/webpack/webpack).

### This is the `webpack` **1** example, [click here](https://github.com/matteocng/react-flag-icon-css-example-multi) if you are looking for the `webpack` **3** example.

## Deprecation warning

**webpack 1 is deprecated**, this branch is an example for existing apps that can't or won't be updated to `webpack 2/3`. We recommend upgrading to `webpack 3` ([official migration guide](https://webpack.js.org/guides/migrating/)) and then looking at the `react-flag-icon-css` [webpack 3 example](https://github.com/matteocng/react-flag-icon-css-example-multi) (or the [webpack 2 example](https://github.com/matteocng/react-flag-icon-css-example-multi/tree/webpack-2)) in the master branch.

## Installation

It is recommended to use [Yarn](https://yarnpkg.com/) instead of npm for managing packages.

Clone the repository:

```bash
$ git clone -b webpack-1 https://github.com/matteocng/react-flag-icon-css-example-multi.git
$ cd react-flag-icon-css-example-multi

```

Install the required modules:

```bash
$ yarn
```

Run the [Webpack development server](//github.com/webpack/webpack-dev-server) and apply the configuration for [React Css Modules](//github.com/gajus/react-css-modules):

```bash
$ yarn start
```

... or use standard Css:


```bash
$ yarn start:classes
```

Open a browser and go here: [http://localhost:8080](http://localhost:8080).

## Notes

This example project uses the <code>USE_CSS_MODULES</code> environment variable (set by the <code>package.json</code> scripts) to allow for an easy "switch" between a configuration with or without [React Css Modules](//github.com/gajus/react-css-modules). This results in more complex code than need be.

In a real project you would probably choose to either go with [React Css Modules](//github.com/gajus/react-css-modules) or standard Css, removing the <code>USE_CSS_MODULES</code> switch and <code>getStylePropName</code>, replacing <code>[options.stylePropName]</code> in the React components with either <code>className</code> (standard Css) or <code>styleName</code> (modules).

## Styles

This example app uses `sass` (`.scss`) styles, but `sass` is not required to use `react-flag-icon-css`. Your app can use any CSS preprocessor (such as [`postcss`](https://github.com/postcss/postcss)) or no CSS preprocessor at all. For instance, to use [`postcss`](https://github.com/postcss/postcss) in your stylesheets:
-   rename `.scss` files to `.css`.
-   remove *`sass-loader`* from [webpack.config.js](webpack/webpack.config.js).
-   `npm install` or `yarn add` the `PostCSS` plugins that you need.
-   `import()` them into [webpack.config.js](webpack/webpack.config.js)
-   add them to the `postcss` section after `autoprefixer`.

## Contributing

Contributions are welcome. Please use a topic branch, follow the [AngularJS commit style guidelines](//github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines) and check that <code>yarn run pre-commit</code> returns zero errors before opening a PR. Thanks!

## License

This project is licensed under the terms of the [MIT license](LICENSE).
