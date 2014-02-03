# Gizu [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Gizu is visualization tool for Git. It computes a CLOC on all the commits of a project and displays the results into a treemap representation with help of [d3](http://d3js.org/).

![screenshot](http://marmelab.com/gizu/img/gizu.gif)

Installation
------------

Install dependencies :

```
  npm install
  bower install
```

Then you have to create a dataset for your git repository :

```
  grunt git-import --repository=YOUR_GIT_REPOSITORY
```

For example, YOUR_GIT_REPOSITORY could be `git@github.com:fzaninotto/uptime.git`.

Create a config file :

```
  cp app/scripts/services/config.js.dist app/scripts/services/config.js
```

Usage
-----

To run the app, just start it with Grunt :
```
  grunt serve
```

Configuration
-------------

You can exclude files from the treemap. Go into your config file `app/scripts/services/config.js` and add paths to `exclude` (all paths have to be prefixed by `./`).

For example :

```js
  'use strict';
  angular.module('gizuApp')
    .constant('config', {
      exclude: [
        './vendors/jquery.min.js',
        './public'
      ]
  });
```

License
-------

Gizu is licensed under the [MIT Licence](LICENSE), courtesy of [marmelab](http://marmelab.com).