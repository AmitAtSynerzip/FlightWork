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
        searchFlight: function (flightDate, flightReturnDate, srcCit, destCit) {
            if(flightDate && srcCit && destCit){

                $http.get('data/flightData.json').success(function (data) {
                    /*Using Underscore library to fetch or query json objects,
                     where data-->Flights is complete list of flights and Source/Destination/DepartureDate
                     are input criteria: Good for large app but with small module like this , its better to use loop
                     var results = _.where(data.Flights, {
                        Source: srcCit,
                        Destination: destCit,//ArrivalDate: returnDate
                        DepartureDate: flightDate
                     });*/

                    var resultFlights = [];
                    data.Flights.forEach(function (flight) {
                        if (flightReturnDate) {
                            if ((flight.Source == srcCit) && (flight.Destination == destCit) && (flight.DepartureDate == flightDate) && (flight.ArrivalDate == flightReturnDate)) {
                                searchResult.push(flight);
                                console.log(searchResult);
                            }
                        } else {
                            if ((flight.Source == srcCit) && (flight.Destination == destCit) && (flight.DepartureDate == flightDate)) {
                                searchResult.push(flight);
                                console.log(searchResult);
                            }
                        }
                    });

                });
            }
        }
    }
});