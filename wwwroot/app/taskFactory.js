(function() {
  'use strict';

  angular
    .module('TaskApi.wwwroot.app')
    .factory('factory', factory);

  factory.$inject = ['$http'];

  function factory($http) {
    var service = {
      getData: getData
    };

    return service;

    function getData() {}
  }
})();
