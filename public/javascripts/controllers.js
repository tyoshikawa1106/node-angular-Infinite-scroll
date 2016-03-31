'use strict';

/* Controllers */

angular.module("Controllers", [])
// InfiniteScrollCtrl
.controller('InfiniteScrollCtrl', ['$scope', function($scope) {
    $scope.lists = [1, 2, 3, 4, 5, 6, 7, 8];

    $scope.loadMore = function() {
        var last = $scope.lists[$scope.lists.length - 1];
        console.log(last);
        for(var i = 1; i <= 8; i++) {
            $scope.lists.push(last + i);
        }
    };

    $scope.scrollTop = function() {
        console.log('OK');
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    };
}]);