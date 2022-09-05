// code goes here

app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope){
    console.log("My controller.....");

    $scope.users = [
        {Product: "Product One", Price: "$22.50"},
        {Product: "Product Two", Price: "$15.00"},
        {Product: "Product Three", Price: "$123.82"},
        {Product: "Product Four", Price: "$123.75"},
    ];

    $scope.addUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "New Product Added successfully";
    };

    $scope.selectUser = function (user){
        console.log(user);
        $scope.clickedUser= user;
    };

    $scope.editUser = function (){
        $scope.message = "Product Edited successfully";
    };

    $scope.deleteUser = function (){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser));
        $scope.message = "Product Delete successfully";
    };

    $scope.clearMessage = function (){
        $scope.message = "";
    };
});