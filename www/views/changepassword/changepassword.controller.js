(function () {
  'use strict';
  angular.module('starter.controllers').controller('ChangePasswordCtrl',['$scope','popupService',function ($scope,popupService) {
    $scope.user={
      oldPassword:'',
      password:'',
      confirmPassword:''
    };
    $scope.save=function () {
      console.log($scope.changePasswordForm.$valid);
      if($scope.changePasswordForm.$valid){
        console.log('save');
        popupService.toast('修改成功');
      }
    };
  }]);
})();
