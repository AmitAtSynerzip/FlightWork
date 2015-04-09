/**
 * Created by amitsh on 05-04-2015.
 */

module.factory('getFlightDataService', function ($http) {

    var flightService = {};
    flightService.citydata = [];
    $http.get('data/cityData.json').success(function (data) {
        data.cities.forEach(function (i) {
            flightService.citydata.push(i);

        });
        flightService.citydata= angular.copy(data.cities);
        console.log(this.citydata);

    });
    return flightService

});

module.factory('searchFlightResults',function($http){

    var searchResult = [];
    var flightDate={};
    var srcCit={};
    var destCit={};

    return {
        getResult:function(){
            console.log(searchResult);
            return searchResult;
        },
        setResult:function(data){
            name={Id:data};
            this.name={Id:data};
        },
        searchFlight:function(flightDate,srcCit,destCit){
            if(flightDate && srcCit && destCit){
                /*var flightDepartDate = flightDate.getDate() + "/" +
                    (flightDate.getMonth() + 1) + "/" + flightDate.getFullYear();*/
                $http.get('data/flightData.json').success(function (data) {
                    /*Using Underscore library to fetch or query json objects, where data-->Flights is complete list of flights and Source/Destination/DepartureDate
                     are input criteria*/
                    var results = _.where(data.Flights, {
                        Source: srcCit,
                        Destination: destCit,//ArrivalDate: returnDate
                        DepartureDate: flightDate
                    });
                    results.forEach(function (i) {
                        searchResult.push(i);

                    });

                });
            }
        }
    }
});