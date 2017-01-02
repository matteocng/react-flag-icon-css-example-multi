Example project demonstrating the use of [React Flag Icon Css](//github.com/matteocng/react-flag-icon-css) with [React Css Modules](//github.com/gajus/react-css-modules), standard Css and custom flags. Powered by [Webpack 2](//github.com/webpack/webpack).

## Installation

It is recommended to use [Yarn](https://yarnpkg.com/) instead of npm for managing packages.

Clone the repository:

```bash
$ git clone https://github.com/matteocng/react-flag-icon-css-example-multi.git && cd react-flag-icon-css-example-multi

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

## Contributing

Contributions are welcome. Please use a topic branch, follow the [AngularJS commit style guidelines](//github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines) and check that <code>yarn run pre-commit</code> returns zero errors before opening a PR. Thanks!

## License

This project is licensed under the terms of the [MIT license](LICENSE).
