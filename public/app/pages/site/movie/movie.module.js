/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('Hunter.pages.site.movie', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('site.movie', {
          url: '/videos',
          templateUrl: 'app/pages/site/movie/movie.html',
          controller: 'MovieCtrl'
        });
  }
})();