'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'mm.foundation'
]).config(['$routeProvider','$locationProvider', AppConfig]);

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);

angular.module('myApp.services', []).
  value('version', '0.1');

angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

function AppConfig($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $routeProvider.when('/home', {templateUrl: 'home/home-index.html', controller: 'HomeCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}
