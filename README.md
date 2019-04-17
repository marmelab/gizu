<table>
        <tr>
            <td><img width="60" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/beaker.svg" alt="hackday" /></td>
            <td><strong>Archived Repository</strong><br />
                    The code of this repository was written during a <strong>Hack Day</strong> by a <a href="https://marmelab.com/en/jobs">Marmelab developer</a>. It's part of the distributed R&D effort at Marmelab, where each developer spends 2 days a month for learning and experimentation.<br />
        <strong>This code is not intended to be used in production, and is not maintained.</strong>
        </td>
        </tr>
</table>

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

Create a config file :

```
  cp app/scripts/services/config.js.dist app/scripts/services/config.js
```

Create a Dataset
----------------

Before starting Gizu you need to create a dataset for your git repository :

```
  grunt git-import --repository=YOUR_GIT_REPOSITORY
```

For example, YOUR_GIT_REPOSITORY could be `git@github.com:fzaninotto/uptime.git`.


You can also use the `--step` option if you don't want to process every commits :

```
  grunt git-import --repository=YOUR_GIT_REPOSITORY --step=5
```

5 commits will be skipped between each CLOC.


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

Usage
-----

To run the app, just start it with Grunt :
```
  grunt serve
```

Tests
-----

To run tests, just do :

```
  grunt test
```

License
-------

Gizu is licensed under the [MIT Licence](LICENSE), courtesy of [marmelab](http://marmelab.com).
