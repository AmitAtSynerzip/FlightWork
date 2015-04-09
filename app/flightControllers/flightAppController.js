    /**
     * Created by amitsh on 05-04-2015.
     */

    //Module creation with dependency injection of angular routing
    var module = angular.module("flightMainModule", ['ngRoute']);

    //Application module level controller definition
    var flightController = module.controller("flightMainController", ['$rootScope','$scope', '$http', function ($rootScope,$scope, $http) {
        /*Function to search flights with input source city , destination city and date criteria
        $scope.searchFlight= function(){
            if($scope.flightDate && $scope.srcCit && $scope.destCit) {
                var flightDate = $scope.flightDate.getDate() + "/" +
                    ($scope.flightDate.getMonth() + 1) + "/" + $scope.flightDate.getFullYear();
                //var returnDate = $scope.flightReturnDate.getDate()+ "/" +
                // ($scope.flightReturnDate.getMonth() + 1) + "/" + $scope.flightReturnDate.getFullYear();

                $http.get('data/flightData.json').success(function (data) {


        Using Underscore library to fetch or query json objects, where data-->Flights is complete list of flights and Source/Destination/DepartureDate
                    are input criteria

                    var results = _.where(data.Flights, {
                        Source: $scope.srcCit,
                        Destination: $scope.destCit,//ArrivalDate: returnDate
                        DepartureDate: flightDate

                    });

                    $scope.flights = results; //Bind result to the parent scope
                    return results;
                });
                return results;
            }
        };*/
    }]);

    //Configure module to route as per location
    module.config(['$routeProvider',function($routeProvider){
        $routeProvider.when("/",{
            templateUrl:'template/searchMain.html',
            controller:"searchMainController"
        }).when("/searchResult",{
            templateUrl:'template/searchResult.html',
            controller:"searchResultController"
        }).otherwise({
            redirectTo:"/",
            controller:"searchMainController"
        })
    }]);
