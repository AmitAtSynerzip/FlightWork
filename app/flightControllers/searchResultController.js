/**
 * Created by amitsh on 05-04-2015.
 */

//Controller definition for result page view
var searchResultController = module.controller("searchResultController",[ '$scope','searchFlightResults',function($scope,searchFlightResults){
    $scope.flights = searchFlightResults.getResult();
}]);