## TVMaze show + episode viewer implementation.

Deployed: http://rtl-assignments.westeurope.cloudapp.azure.com

The application displays "Powerpuff Girls show" by default, but not limited to.
Search functionality wasn't implemented, but there are two buttons to switch the show.


## Project structure

```
src/
    components - reusable React components
    config - application configuration
    containers - container components that connected to Redux store
    domains -  domain specific bundles of actions/reducers/selectors.
               Currently it's separated to "shows" and "episodes". It's done to show
               separation of two domains.
    pages - components that represent pages. The entry point is Page.js
              that handles routing and main page markup.
    services - independent api, that encapsulates part of application logic. There are
                http and logger services.
    store - configuration of Redux store. Reducers are combined here.
    styles - basic application styles and scss mixins.
    utils - small helpers that can be used across several components/services/...
```

## Installation

yarn install


## Start application

yarn run start


## Run unit tests

yarn run tests

## Run lint

yarn run lint
