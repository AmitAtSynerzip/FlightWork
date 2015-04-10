/**
 * Created by amitsh on 05-04-2015.
 */

//Controller definition for result page view
var searchResultController = module.controller("searchResultController",[ '$scope','searchFlightResults',function($scope,searchFlightResults){
    $scope.flights = searchFlightResults.getResult();
    $(function() {
        $( "#slider-range" ).slider({
            orientation: "vertical",
            range: true,
            min: 0,
            max: 1000,
            values: [ 75, 300 ],
            style: "height:500px",
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $("#slider-range").slider("values", 5));
    });
}]);