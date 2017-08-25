var app= angular.module('myApp',[]);
    app.controller('myCtrl',['$scope','getDataService',function($scope,getDataService){
      //   $scope.Details = [
      // {
      //   "firstname" : "satish",
      //   "address" : "patancheru",
      //    "postal" : 502319,
      //    "city" : "Hyderabad",
      //    "telephone" : 040-345678,
      //    "mobile" : 9550381350,
      //    "email" : 'satishkmr062@gmail.com',
      //    "ean" : "EAN TEST",
      //    "cvr" : 1598753,
      //    "created" : "01/07/1995"
      // },
      // ]
  

var promise = getDataService.getData();
  promise.then(function (data)
  {
    $scope.Details = data.data;
    console.log($scope.Details);
  });
       $scope.addNew = function(Details){
         $scope.Details.push({ 
                  'firstname': Details.firstname, 
                  'address': Details.address,
                  'postal': Details.postal,
                  'city' : Details.city,
                  'telephone' : Details.telephone,
                  'mobile' : Details.mobile,
                  'email' : Details.email,
                  'ean' : Details.ean,
                  'cvr' : Details.cvr,
                  'created' : Details.created  
              });
         $scope.Details.firstname = '';
        $scope.Details.address = '';
        $scope.Details.postal = '';
        $scope.Details.city = '';
        $scope.Details.telephone = '';
        $scope.Details.mobile = '';
        $scope.Details.email = '';
        $scope.Details.ean = '';
        $scope.Details.cvr = '';
        $scope.Details.created = '';
       }
            $scope.remove = function ($index) {
$scope.Details.splice($index, 1 );
}

    
    }]);
        

app.service("getDataService", function ($http, $q)
{
  var deferred = $q.defer();
  $http.get('main.json').then(function (data)
  {
    deferred.resolve(data);
  });

  this.getData = function ()
  {
    return deferred.promise;
  }
})