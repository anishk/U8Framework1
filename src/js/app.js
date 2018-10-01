angular.module('UnifyedMobileApp', [
  'ngRoute',
  'mobile-angular-ui',
  'UnifyedMobileApp.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});