# Minimalistic React Boilerplate

Starter kit for those, who want to learn more about Webpack and Babel.

### What's included

- Webpack
- Babel
- Eslint
- Jest
- Sass support

### Installation

This will setup React project inside MyApp folder

```shell
$ git clone https://github.com/iksz1/react-boilerplate.git MyApp
$ cd MyApp
$ npm install
```

To remove git repository, run `rm -rf .git` (on Windows `rm -r -force .git`).

> Note: If you don't have Git installed, you can download [zip file](https://github.com/iksz1/react-boilerplate/archive/master.zip).

### Usage

`npm start` - start development server  
`npm run build` - create production ready bundle  
`npm run clean` - clean build output  
`npm test` - run Jest

To target specific platform, change settings in `.babelrc`. If polyfills are needed, you can import them in `config/polyfills.js`

[CSS Modules](https://github.com/css-modules/css-modules) are enabled by default. To disable, open `webpack.config.js` and search for `css-loader`. Few lines lower you will see `modules` option.
