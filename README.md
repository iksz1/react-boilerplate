### React Webpack boilerplate

Simple boilerplate that doesn't try to include everything.

### What's included

* Webpack 4
* Babel 7
* Polyfills: Promise, Fetch, Object.assign
* Eslint
* Jest
* Sass support

### Installation

Inside your project's folder run

```shell
git clone https://github.com/iksz1/react-boilerplate.git
```

or

```shell
npm install iksz1/react-boilerplate
```

then

```shell
npm install
```

> Note: If you don't have Git installed you can simply download zip package.

### Usage

* `npm start` - starts development server
* `npm run build` - creates production ready bundle
* `npm test` - runs Jest

[CSS Modules](https://github.com/css-modules/css-modules) are enabled by default. To disable open `webpack.config.js` and search for `css-loader`. Few lines lower you will see `modules` option.
