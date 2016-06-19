/**
 * Created by SanthoshReddy on 5/24/2016.
 */
app.controller('doctorController', function ($scope,contactService) {

    contactService.formData(function(data){
       "use strict";

       $scope.frame=data.info.doctors;
       $scope.docAssit=data.info.associates;

   });
});

