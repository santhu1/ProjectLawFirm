
    var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);


    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/about', {
                templateUrl: 'js/views/about.html'
            })
            .when('/contact', {
                templateUrl: 'js/views/contact.html',
                controller: 'contactController'
            })
            .when('/home', {
                templateUrl: 'js/views/home.html'
            })
            .when('/doctors', {
                templateUrl: 'js/views/doctors.html',
                controller: 'doctorController'
            })
            .when('/news', {
                templateUrl: 'js/views/news.html',
                controller: 'newsController'
            })
            .when('/post', {
                templateUrl: 'js/views/post.html'
            }).when('/practices', {
                templateUrl: 'js/views/practices.html'

            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);


/*app.controller('doctorController',['$scope',function ($scope) {

    $scope.img1="../images/thumbnail-smile.jpg";
    $scope.frame = [
        {
            'img': '../images/thumbnail-frontview.jpg',
            'name': "Pauline H. Wilson",
            'info': 'A physician or medical doctor is a professional who practices medicine, which is concerned ' +
            'with promoting, maintaining, or restoring human health through the study, diagnosis, and treatment of disease'

        },
        {
            'img': '../js/images/logo.png',
            'name': "Kenneth E. Lunderberg",
            'info': 'A physician or medical doctor is a professional who practices medicine, which is concerned ' +
            'with promoting, maintaining, or restoring human health through the study, diagnosis, and treatment of disease'
        }

    ];
}]);*/

