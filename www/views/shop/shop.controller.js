(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'周荣烨',
        ab:'',
        name1:'周荣烨',
        phone:'18759807919',
        phone1:'18759807919',
        createTime:'2017-9-27 15:30:00',
        email:'260489191@qq.com',
        hylx:'111'
      });
    });
  }])
})();
