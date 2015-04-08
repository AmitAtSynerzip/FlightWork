/**
 * Created by amitsh on 05-04-2015.
 */

//Controller definition for main page view
var searchMainController = module.controller("searchMainController",[ '$scope','getFlightDataService',function($scope,getFlightDataService){
    $scope.sourceCity = getFlightDataService.citydata;
    $scope.destiCity = getFlightDataService.citydata;;
}]);