var diff = require('changeset');

angular.module('eugeneware.lively', ['eugeneware.shoe'])
  .factory('lively', function (reconnect) {
    return function (endpoint, scope, key, initValue) {
      reconnect(function (stream) {
        scope.$watch(key, function (newVal, oldVal) {
          var changes = diff(oldVal, newVal);
          if (changes.length) {
            var cmd = ['change', changes];
            stream.write(JSON.stringify(cmd));
          }
        });
        stream.on('data', function (msg) {
          var cmd = JSON.parse(msg);
          switch (cmd[0]) {
            case 'value':
              scope[key] = cmd[1];
              break;

            case 'change':
              scope[key] = diff.apply(cmd[1], scope[key], true);
              break;
          }
        });
        var cmd = ['listen', { key: key, initialValue: initValue }];
        stream.write(JSON.stringify(cmd));
      })
      .connect(endpoint);
    }
  });
