# `aurelia-mapbox-with-typescript-and-default-cli-built-in-bundler`

Sample project using leaflet with mapbox-gl pluggin to display a vector map within an Aurelia Project with the default CLI built-in bundler based on requirejs

## Run dev app

Run `npm i`

Run `npm start`, then open `http://localhost:9000`

## Errors

We have two errors: 

The first error appear when we start the project with npm start the following message appear : 
 - 'ERROR [DependencyInclusion] Error: could not find "dist/shared" in package mapbox-gl'

The second error message appear when we open the message there is an error which seems to be related to requirejs:
 - 'vendor-bundle.js:145 Uncaught Error: Mismatched anonymous define() module: function () { 'use strict';'
