https://www.pierrefay.fr/formation-vuejs/d%C3%A9couverte-installation-tutoriel.html

# Souvenir (ubuntu)
# installation npm
sudo apt-get update
sudo apt-get install nodejs npm

# installation vue-cli
npm install -g vue-cli

# acces à la commande vue
pierre@mypc:~/vuejs$ vue

  Usage: vue <command> [options]

  Commands:

    init        generate a new project from a template
    list        list available official templates
    build       prototype a new project
    help [cmd]  display help for [cmd]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

# Création du projet
vue init webpack timothee-decoster-cv

# repondre aux questions
  This will install Vue 2.x version of the template.
  For Vue 1.x use: vue init webpack#1.0 timothee-decoster-cv
? Project name timothee-decoster-cv
? Project description A Vue.js project
? Author decostertimoth@gmail.com
? Vue build standalone
? Install vue-router? No
? Use ESLint to lint your code? No
? Pick an ESLint preset Standard
? Setup unit tests with Karma + Mocha? No
? Setup e2e tests with Nightwatch? No

   vue-cli · Generated "timothee-decoster-cv".
   To get started:
     cd timothee-decoster-cv
     npm install
     npm run dev
     
   Documentation can be found at https://vuejs-templates.github.io/webpack

# timothee-decoster-cv

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Frog
http://flexboxfroggy.com/#fr