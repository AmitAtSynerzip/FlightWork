/**
 * Created by amitsh on 05-04-2015.
 */

//Controller definition for main page view
var searchMainController = module.controller("searchMainController",[ '$scope','getFlightDataService',function($scope,getFlightDataService){

    var cities = getFlightDataService.getCities();
    $scope.sourceCity = cities;
    $scope.destiCity = cities;
}]);