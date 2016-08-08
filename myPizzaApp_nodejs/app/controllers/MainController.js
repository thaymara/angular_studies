module.exports = function($scope, $filter, configValue, routeInfo){
  $scope.name = $filter("uppercase")(configValue.appName);
  $scope.page = routeInfo.routeName;
  $scope.navclass = routeInfo.navClass;
};
