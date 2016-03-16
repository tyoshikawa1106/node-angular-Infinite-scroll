'use strict';

/* App Module */

var myApp = angular.module('myApp', ['ngRoute','Controllers', 'infinite-scroll']);
myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/feed.html',
        controller: 'InfiniteScrollCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);