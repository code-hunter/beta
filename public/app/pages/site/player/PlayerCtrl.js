
(function () {
    'use strict';

    angular.module('Hunter.pages.site.player')
        .controller('PlayerCtrl', PlayerCtrl);

    /** @ngInject */
    function PlayerCtrl($scope, $http, $location,$stateParams, toastr) {
        $scope.videoId = $stateParams.id;

        var player = new window.YKU.Player('youkuplayer',{
            styleid: '0',
            client_id: '3a2c6e512d0fd485',
            vid: $scope.videoId,
            newPlayer: true
        });

    }
})();