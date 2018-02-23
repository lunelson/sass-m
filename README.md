# sass-m

!['sass m'](sass-m.png)

[![npm published v](https://img.shields.io/npm/v/@lunelson/sass-m.svg)]()
[![Build Status](https://travis-ci.org/lunelson/sass-m.svg?branch=master)](https://travis-ci.org/lunelson/sass-m)

A Sass Media-query and Media-scoped variable management system.

```sh
# in terminal, in project dir
npm install --save @lunelson/sass-m

# ...and the peerDependencies
npm install --save @lunelson/sass-throw @lunelson/sass-maps-plus @lunelson/sass-calc @lunelson/sass-u
```
```scss
// in root sass file, assuming 'node_modules' is in Sass' search path
@import '@lunelson/sass-throw/index';
@import '@lunelson/sass-maps-plus/index';
@import '@lunelson/sass-calc/index';
@import '@lunelson/sass-u/index';
@import '@lunelson/sass-m/index';
```
