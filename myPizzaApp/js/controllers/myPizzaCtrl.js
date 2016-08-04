angular.module("myPizza").controller("myPizzaCtrl", function($scope){
    $scope.name = "My Pizza";
    $scope.clients = [
      {name: "Peter", tel:"5555-5555", address:"645 SW Ave"},
      {name: "Mary", tel:"6666-5555", address:"433 ST Ave"},
      {name: "Liza", tel:"3333-5555", address:"12 AP Ave"}
    ];

    $scope.addClient = function(client){
      $scope.clients.push(angular.copy(client)); //copy the data to not link the value
      $scope.formClient.$setPristine();
      delete $scope.client;
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
    };

    $scope.deleteClient = function(client){
      $scope.clients.splice($scope.clients.indexOf(client), 1);
    };

    $scope.orderBy = function(col){
      $scope.order = col;
      $scope.reverse = !$scope.reverse; //alterna o valor entre true e false (primeira vez que clica é false)
    };
});
