angular-bootstrap-boilerplate
=============================

### A full web frontend stack using bootstrap and angular.

If you want to make a full angular responsive website, this stack is made for you.

This stack was created from yeoman generator "generator-angular" : https://github.com/yeoman/generator-angular

## So what's the difference?
The big difference is that I removed all the jquery part of bootstrap and replaced it with ui-bootstrap : http://angular-ui.github.io/bootstrap/

Here is an exhaustive list of the changes made to the generator :
- Replaced "sass-bootstrap" by "bootstrap-sass-official" as the version is more recent.
- Added ui-bootstrap to handle js part of Bootstrap
- Removed JQuery
- Added Respond.js for Internet Explorer 6 to 8 to handle media queries
- Replaced anguar-route  by angular-ui-router

## Usage
Install the node and bower modules
```
npm install
bower install
```

Run `grunt` for building and `grunt serve` for preview

## Notes

###Karma
If you use another browser than chrome, you'll have to change it in the Karma conf there : https://github.com/mvidailhet/angular-bootstrap-boilerplate/blob/master/karma.conf.js#L46

You will also have to add the right karma-launcher for your browser in package.json : https://github.com/mvidailhet/angular-bootstrap-boilerplate/blob/master/package.json#L36


