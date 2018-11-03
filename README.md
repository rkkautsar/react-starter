> **Use [react-starter-ssr](https://github.com/rkkautsar/react-starter-ssr) for server-side-rendering**

## Description
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Frkkautsar%2Freact-starter.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Frkkautsar%2Freact-starter?ref=badge_shield)


An opinionated simple react boilerplate


## Usage

Clone the boilerplate

```sh
git clone https://github.com/rkkautsar/react-starter
```

Install dependencies

```sh
npm install
npm start # run development server at :4000
npm run build # build production to dist/
```

Reset git

```sh
rm -rf .git
git init
```


## Tech

1. React 16
2. Babel (stage-0, async-await)
3. ESLint + Prettier
4. Redux
    - [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)
    - [Redux Thunk](https://github.com/gaearon/redux-thunk)
    - [Redux Logger](https://github.com/evgenyrodionov/redux-logger)
    - [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
5. [Ava](https://github.com/avajs/ava)
    - [Enzyme](https://github.com/airbnb/enzyme/)
    - [Redux Mock Store](https://github.com/arnaudbenard/redux-mock-store)
6. [React Router](https://reacttraining.com/react-router/)
    - [React Router Redux](https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux)
7. [Styled Components](https://github.com/styled-components/styled-components)
8. [Superagent](https://github.com/visionmedia/superagent)
9. Webpack 4 ([Webpack](https://webpack.js.org/))

## To-do
1. React Loadable & Code Splitting
2. More refactoring


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Frkkautsar%2Freact-starter.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Frkkautsar%2Freact-starter?ref=badge_large)