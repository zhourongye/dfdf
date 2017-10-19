(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ProductListCtrl',['$scope','$ionicLoading','$timeout','$filter',function ($scope,$ionicLoading,$timeout,$filter) {
      $scope.products=[];
      $scope.sourceProducts=[];
      $scope.searchMV={
        content:''
      };
      var isLoading=false;
      var pageIndex=1;
      $scope.$on('$ionicView.enter',function () {
        $ionicLoading.show({
          template:'<ion-spinner icon="ios" class="spinner-light"></ion-spinner>数据加载中，请稍候......'
        });
        $scope.doRefresh();
      });
      $scope.getByName=function () {
        $scope.products=$filter('filter')($scope.sourceProducts,{
          Name:$scope.searchMV.content
        });
      };
      $scope.doRefresh=function () {
        pageIndex=1;
        $scope.hasMore=false;
        $scope.products=[];
        loadData();
      };
      $scope.loadMore=function () {
        pageIndex++;
        loadData();
      };
      function loadData() {
        if(isLoading==true){
          return;
        }
        isLoading=true;
        $timeout(function () {

          var list=[
            {
              ID:1
              ,Images:['views/product/img/1.jpg']
              ,Name:'iphone7'
              ,Price:'5388.599'
              ,Store:12
              ,Barcode:'12121212112'
            }
            ,{
              ID:2
              ,Images:['views/product/img/2.jpg']
              ,Name:'飞机杯'
              ,Price:'9999'
              ,Store:11
              ,Barcode:'12121212113'
            }
            ,{
              ID:3
              ,Images:['views/product/img/3.jpg']
              ,Name:'zzr'
              ,Price:'1'
              ,Store:10
              ,Barcode:'12121212114'
            }
            ,{
              ID:1
              ,Images:[]
              ,Name:'lf'
              ,Price:'2'
              ,Store:9
              ,Barcode:'12121212115'
            }
            ,{
              ID:1
              ,Images:[]
              ,Name:'iphone8'
              ,Price:'5388.599'
              ,Store:8
              ,Barcode:'12121212116'
            }
            ,{
              ID:1
              ,Images:[]
              ,Name:'iphone6s'
              ,Price:'5388.599'
              ,Store:7
              ,Barcode:'12121212117'
            }
          ];
          $scope.products=list;
          isLoading=false;
          $scope.$broadcast('scroll.refreshComplete');
          $ionicLoading.hide();
        },2000);
      }
    }]);
})();
