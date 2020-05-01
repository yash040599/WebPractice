/// <reference path="angular.min.js" />

var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.myCol = 'Violet';

    var hobbies = ['Playing & Gaming', 'Watching movies in theater', 'Coding, coz money!']
    $scope.hobbies = hobbies;
});
