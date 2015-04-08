/**
 * Created by amitsh on 05-04-2015.
 */

module.factory('getFlightDataService', function ($rootScope, $http) {

    var flightService = {};

    flightService.citydata = [];

    $http.get('data/cityData.json').success(function (data) {
        data.cities.forEach(function (i) {
            flightService.citydata.push(i);

        });
        console.log(this.citydata);

    });

    return flightService;
});