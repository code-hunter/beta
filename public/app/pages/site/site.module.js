/**
 * Created by zhouyu on 2016/7/17.
 */
(function () {
    'use strict';

    angular.module('Hunter.pages.site', [
        'ui.router',
        'Hunter.pages.site.movie',
        'Hunter.pages.site.player'
    ])
        .config(routeConfig);

    function  routeConfig($stateProvider,$urlRouterProvider,  $locationProvider) {
        // $urlRouterProvider.otherwise('/');

        $stateProvider.state('site',
            {
                url: '/home',
                templateUrl:'app/pages/site/index.html'
            }
        )
        // $locationProvider.html5Mode(true);
    }
})();