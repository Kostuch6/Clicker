/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.
    module('store').
        component('store', {
           templateUrl: 'store/store.template.html',
           controller: ['Buildings', '$scope', '$rootScope',
               function StoreController(Buildings, $scope, $rootScope) {
                
                this.buildings = Buildings.query();
                
                this.buyBuilding = function(building) {
                    building.number += 1;
                    $rootScope.$broadcast('income-upgraded', {price: building.price}, {gpcUP: building.gpc}, {gpsUP: building.gps});
                };
               
                $scope.$on('current-gold-changed', function(event, args) {
                    var currentGold = args.currentGold;
                });
               
               
           }
        ]
});