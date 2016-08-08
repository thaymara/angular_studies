module.exports = function($scope, $filter, configValue, routeInfo){
  $scope.name = $filter("uppercase")(configValue.appName);
  $scope.clients = [
    {name: "Peter", tel:"5555-5555", address:"645 SW Ave"},
    {name: "Mary", tel:"6666-5555", address:"433 ST Ave"},
    {name: "Liza", tel:"3333-5555", address:"12 AP Ave"}
  ];

  // $scope.day = new Date();
  // $scope.total = 27.35;
  $scope.msg = "";
  $scope.page = routeInfo.routeName;
  $scope.navclass = routeInfo.navClass;

  $scope.addClient = function(client){
    $scope.clients.push(angular.copy(client)); //copy the data to not link the value
    $scope.formClient.$setPristine();
    delete $scope.client;
    $scope.msg = "Successfully addedd record"
  };

  $scope.editClient = function(client){
    $scope.client = client;
    $scope.editing = true;
  };

  $scope.saveClient = function(client){
    client = angular.copy($scope.client);
    $scope.formClient.$setPristine();
    delete $scope.client;
    $scope.editing = false;
    $scope.msg = "Successfully edited record";
  };

  $scope.deleteClient = function(client){
    $scope.clients.splice($scope.clients.indexOf(client), 1);
    $scope.msg = "Successfully deleted record";
  };

  $scope.orderBy = function(col){
    $scope.order = col;
    $scope.reverse = !$scope.reverse; //alterna o valor entre true e false (primeira vez que clica é false)
  };
};
