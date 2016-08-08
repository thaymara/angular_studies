require('angular');
require('angular-route');
require('./locale/angular-locale_pt-br.js');


var MainController = require('./controllers/MainController.js');
var ClientsController = require('./controllers/ClientsController.js');

var maskTel = require('./directives/maskTel.js');
var alertMsg = require('./directives/alertMsg.js');
var configValue = require('./config/configValue.js');
var routeConfig = require('./config/routeConfig.js');

angular.module('app', ['ngRoute']);
angular.module('app').controller('MainController', ['$scope', '$filter', 'configValue', 'routeInfo', MainController]);
angular.module('app').controller('ClientsController', ['$scope', '$filter', 'configValue', 'routeInfo', ClientsController]);

angular.module('app').directive('maskTel', [maskTel]);
angular.module('app').directive('alertMsg', [alertMsg]);

angular.module('app').value('configValue', configValue);

angular.module('app').config(['$routeProvider', routeConfig]);
