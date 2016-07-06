/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.
  module('goldMine').
    component('goldMine', {
        templateUrl: 'gold-mine/gold-mine.template.html',
        controller: ['$scope', '$rootScope', function GoldMineController($scope, $rootScope){
            this.currentGold = 0;
            this.goldPerClick = 1;
            this.goldPerSecond = 0;
            
            this.updateOnClick = function() {
                this.currentGold += this.goldPerClick;
                $rootScope.$broadcast('current-gold-changed', {currentGold: this.currentGold});
            };
            
            this.updateOnSecond = function() {
                this.currentGold += this.goldPerSecond;
                $rootScope.$broadcast('current-gold-changed', {currentGold: this.currentGold});
            };
            
            $scope.$on('GPC-upgraded', function(event, args) {
                var GPCup = args.goldPerClick;
                this.goldPerClick += GPCup;
            });
            
            $scope.$on('GPS-upgraded', function(event, args) {
                var GPSup = args.goldPerSecond;
                this.goldPerSecond += GPSup;
            });
        }]
        
    });


