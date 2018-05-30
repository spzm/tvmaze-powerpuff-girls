## TVMaze show + episode viewer implementation.

Deployed: http://rtl-assignments.westeurope.cloudapp.azure.com

Application by default displays Powerpuff Girls show but not limited to.
Search functionality wasn't implemented but please use the two other shows
button to verify it's functionality.

## Project structure

```
src/
    components - common React reusable components
    config - configuration setup for application
    containers - components that are connected to Redux store
    domains - separation of domain specific bundles of actions/reducers/selectors
               Current separation to shows and episodes is done to demonstrate clean
               separation of two domains rather than say that show and episodes are from
               separate domains.
    pages - pages components that handle page construction. The entrypoint here is Page.js
              that handles routing and main page makeup.
    services - independent api that encapsulates part of logic to usefull api. Here are
                http and logger services.
    store - configuration of Redux store, combine reducers to create state tree
    styles - basic application styles and scss mixins
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
