/**
 * Created by amitsh on 05-04-2015.
 */

module.factory('getFlightDataService', function($rootScope,$http){

    var flightService={};
    flightService.data={};
    flightService.getCities = function(){
        $http.get('data/cityData.json').success(function(data){
            flightService.data.cities=data.city;
        });
        return flightService.data;
    };
    return flightService
});