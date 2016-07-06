/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.
  module('core.building').
  factory('Buildings', ['$resource',
    function($resource) {
      return $resource('store/buildings/buildings.json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);

