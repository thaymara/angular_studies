require('angular');

var MainController = require('./controllers/MainController.js');

angular.module('app', []);
angular.module('app', []).controller('MainController', ['$scope', MainController]);
