
angular.module('customersApp')
.controller('CustomersController', ['$scope', '$log', 'customersFactory', 'appSettings', function ($scope, $log, customersFactory, appSettings) {
            
    $scope.sortBy = 'name';
    $scope.reverse = 'false';
    $scope.appSettings = appSettings;
    $scope.customers = [];
    
    $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
    };
    
    function init() {
        customersFactory.getCustomers()
            .success(function(customers) {
            $scope.customers = customers;
        })
            .error( function( data, status, headers, config) {
                $log.log(data.error + status);
        });
    }
    
    init();
}]);