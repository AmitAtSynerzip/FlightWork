/**
 * Created by amitsh on 05-04-2015.
 */

//Controller definition for main page view
var searchMainController = module.controller("searchMainController",[ '$scope','getFlightDataService','searchFlightResults',
    function($scope,getFlightDataService,searchFlightResults){

        //Update Destination city on the basis of Source city selection
        $scope.$watch("srcCit", function (val) {
            if(val){
                $scope.destiCity = angular.copy(getFlightDataService.citydata);
                var removeIndex = $scope.destiCity.indexOf(val);//remove city from source if selected in destination
                $scope.destiCity.splice(removeIndex, 1);
            }
        });

        //Update Source city on the basis of Destination city selection
        $scope.$watch("destCit", function (val) {
            if(val){
                $scope.sourceCity = angular.copy(getFlightDataService.citydata);
                var removeIndex = $scope.sourceCity.indexOf(val);//remove city from source if selected in destination
                $scope.sourceCity.splice(removeIndex, 1);
            }
        });

        $scope.sourceCity = getFlightDataService.citydata;
        $scope.destiCity = getFlightDataService.citydata;

        $scope.searchFlit =function(){
            searchFlightResults.searchFlight($scope.flightDate,$scope.srcCit,$scope.destCit);
        };

        $(function() {
            $("#startDatepicker").datepicker({dateFormat: 'dd/mm/yy'});
            $("#returnDatepicker").datepicker({dateFormat: 'dd/mm/yy'});
        });


}]);

