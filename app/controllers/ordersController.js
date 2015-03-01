
angular.module('customersApp')
.controller('OrdersController', ['$scope', '$routeParams', 'customersFactory', function ($scope, $routeParams, customersFactory) {

    var customerId = $routeParams.customerID;
    $scope.customer = null; 

    function init() {
        customersFactory.getcustomer(customerId)
            .success(function(customer) {
            $scope.customer = customer;
        })
            .error( function( data, status, headers, config) {
            // handle error
            window.alert("ERROR: " + status + " --- " + data);
        });
    }
    
    init();
}]);