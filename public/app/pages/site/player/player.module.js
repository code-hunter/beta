/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('Hunter.pages.site.player', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('site.player', {
          url: '/playing/:id',
          templateUrl: 'app/pages/site/player/player.html',
          controller: 'PlayerCtrl'
        });
  }

})();