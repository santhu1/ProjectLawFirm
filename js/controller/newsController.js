/**
 * Created by SanthoshReddy on 5/23/2016.
 */

app.controller('newsController',function(newsService,$scope){
    "use strict";
    newsService.async().then(function(d){

        $scope.data=d;
    })




});

app.factory('newsService', function($http) {
    var myService = {
        async: function() {
            // $http returns a promise, which has a then function, which also returns a promise
            var promise = $http.get('http://jsonplaceholder.typicode.com/posts').then(function (response) {
                // The then function here is an opportunity to modify the response
                console.log(response.data);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
            // Return the promise to the controller
            return promise;
        }
    };
    return myService;
});

