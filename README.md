Gizu
====

Gizu is visualiation tool for Git. It compute a CLOC on all the commits of a project and display the results into a treemap representation with help of [d3](http://d3js.org/).

Installation
------------

First you have to create a dataset for your git repository :

```
  sh bin/git-cloc.sh YOUR_GIT_REPOSITORY
```

For example, YOUR_GIT_REPOSITORY could be `git@github.com:fzaninotto/uptime.git`.

Usage
-----

To run the app, just start it with Grunt :
```
  grunt serve
```