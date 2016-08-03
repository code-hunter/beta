
(function () {
    'use strict';

    angular.module('Hunter.pages.site.player')
        .controller('PlayerCtrl', PlayerCtrl);

    /** @ngInject */
    function PlayerCtrl($scope, $http, $location,$stateParams, toastr) {
        $scope.videoId = $stateParams.id;
        $scope.videoInfo = {};
        $scope.comments = {};
        $scope.suggests ={};

        var player = new window.YKU.Player('youkuplayer',{
            styleid: '0',
            client_id: '3a2c6e512d0fd485',
            vid: $scope.videoId,
            newPlayer: true
        });

        $http.get('/movies/getInfo?id='+$scope.videoId).then(function (res) {
            $scope.videoInfo = res.data;
        });

        $http.get('/movies/getComments?id='+$scope.videoId).then(function (res) {
            $scope.comments = res.data.comments;
        });

        $http.get('/movies/getPage').then(function (res) {
            $scope.suggests = res.data.videos;
        });

    }
})();