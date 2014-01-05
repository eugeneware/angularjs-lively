# angularjs-lively

An [angularjs](http://angularjs.org) module that enables you to use
[livelystream](https://github.com/eugeneware/livelystream) websocket real-time
object to database synchronization in the browser with angularjs.

## Installation

### npm

If you're using [browserify](https://github.com/substack/node-browserify) then
install via npm:

``` bash
$ npm install angularjs-lively
```

Note that you'll also need [angularjs-shoe](https://github.com/eugeneware/angularjs-shoe)
installed as this module depends on it for websocket communication. You can
install that with:

``` bash
$ npm install angularjs-shoe
```

and require ```angularjs-lively``` in your ```browserify``` code:

``` js
require('angularjs-lively');
```

### bower

If you're using [bower](http://bower.io) then install using the bower command
line:

``` bash
$ bower install angularjs-lively
```

Note that you'll also need [angularjs-shoe](https://github.com/eugeneware/angularjs-shoe)
installed as this module depends on it for websocket communication. You can
install that with:

``` bash
$ bower install angularjs-shoe
```

### Old school

If you just want to use the client library without a package manager then
simply include the ```build/angularjs-bower.js``` or
```build/angularjs-bower.min.js``` file into your HTML:

``` html
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <!-- AngularJS needs to be included before -->
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular.min.js"></script>

    <!-- Then you can include the angularjs-shoe module from your project -->
    <script type="text/javascript" src="/scripts/angularjs-shoe.min.js"></script>

    <!-- Then you can include the angularjs-lively module from your project -->
    <script type="text/javascript" src="/scripts/angularjs-lively.min.js"></script>

    <!-- Then your regular angular code -->
    <script type="text/javascript" src="/scripts/client.js"></script>
  </body>
</html>
```

## Using angularjs-lively from your AngularJS controllers

To use lively from your controllers you simply define ```eugeneware.lively```
as a module dependency for your app and then you can use dependency injection
to refer to the ```lively``` variable:

``` js
// client.js
var app = angular.module('MyApp', ['eugeneware.lively']);

app.controller('MyCtrl', function ($scope, lively) {
  $scope.test = ''
  // sychronize $scope.test to the 'test' key in the remote database
  // listening to the /replicate websocket endpoint
  lively('/replicate', $scope, 'test', $scope.test);
});
```

## License

### Copyright (c) 2014, Eugene Ware
#### All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.
3. Neither the name of Eugene Ware nor the names of its contributors
   may be used to endorse or promote products derived from this software
   without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY EUGENE WARE ''AS IS'' AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL EUGENE WARE BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
