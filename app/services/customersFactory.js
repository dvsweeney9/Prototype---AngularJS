(function() {
    var customersFactory = function($http) {

        var factory = {};
        factory.getCustomers = function() {
            return $http.get('/customers');
        };
    
        factory.getcustomer = function(customerId) {
            return $http.get('/customers/' + customerId);
        };
        
        factory.getOrders = function() {
            return $http.get('/orders');
        };

        return factory;
    };
    
    customersFactory.$inject = ['$http'];

    angular.module('customersApp').factory('customersFactory', customersFactory);
    
}());