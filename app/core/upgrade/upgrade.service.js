/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.
  module('core.upgrade').
  factory('Upgrades', ['$resource',
    function($resource) {
      return $resource('store/upgrades/upgrades.json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
