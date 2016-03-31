'use strict';

/* App Module */

var myApp = angular.module('myApp', ['ngRoute','Controllers', 'infinite-scroll']);
myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'angular_views/feed.html',
        controller: 'InfiniteScrollCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);