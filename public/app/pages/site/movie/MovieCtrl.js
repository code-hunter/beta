
(function () {
    'use strict';

    angular.module('Hunter.pages.site')
        .controller('MovieCtrl', MovieCtrl);

    /** @ngInject */
    function MovieCtrl($scope, $http, toastr) {

        $scope.page = 1;
        $scope.size = 10;
        $scope.search_title = '';
        $scope.search_subject = '';

        $http.get('/movies/getPage').then(function (res) {
            $scope.docs = res.data.videos;
        });

        $scope.onPlay = function (videoId) {

            debugger;
            console.log(videoId);
            $scope.$emit("videoChanged", videoId);
            window.location.href = '#/show';
        }
    }
})();