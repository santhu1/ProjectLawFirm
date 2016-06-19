app.controller("mainCtrl", function ($scope) {

    $scope.navigation = {
        about: 'about',
        contact: 'contact',
        home: 'home',
        doctors: 'doctors',
        post: 'post',
        practices: 'practices'
    }


});
app.controller('footerController',
    function ($scope) {
        $scope.contact = {

                address: 'Brooklyn,Newyork,state 1111',
                phone: '(+201) 000 222 999',
                email: 'info@contactMe.com'
            };

            $scope.copyRight = '© Copyright 2023 Manes Winchester. All Rights Reserved.';
    });