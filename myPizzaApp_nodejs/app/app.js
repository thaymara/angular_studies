require('angular');
require('./locale/angular-locale_pt-br.js');

var MainController = require('./controllers/MainController.js');
var maskTel = require('./directives/maskTel.js');

angular.module('app', []);
angular.module('app', []).controller('MainController', ['$scope', MainController]);
angular.module('app').directive('maskTel', [maskTel]);
