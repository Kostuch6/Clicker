/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.
        module('goldMine').
        component('goldMine', {
            templateUrl: 'gold-mine/gold-mine.template.html',
            controller: ['$scope', '$rootScope', '$interval', function GoldMineController($scope, $rootScope, $interval) {
                    this.currentGold = 0;
                    this.goldPerClick = 1;
                    this.goldPerSecond = 1;

                    this.updateOnClick = function () {
                        this.currentGold += this.goldPerClick;
                        $rootScope.$broadcast('current-gold-changed', {currentGold: this.currentGold});
                        $rootScope.$broadcast('add-to-abslute-gold', {addGold: this.goldPerClick});
                    };

                    this.updateOnSecond = (function (param) {
                        return function () {
                            param.currentGold += param.goldPerSecond;
                            console.log("updateOnSecond", param);
                            $rootScope.$broadcast('current-gold-changed', {currentGold: param.currentGold});
                            $rootScope.$broadcast('add-to-abslute-gold', {addGold: param.goldPerSecond});
                        };
                    })(this);

                    $interval(this.updateOnSecond, 1000);

                    (function (param) {
                        return $scope.$on('income-upgraded', function (event, building) {
                            var GPCup = building.gpc;
                            var GPSup = building.gps;
                            var price = building.price;
                            param.goldPerClick += GPCup;
                            param.goldPerSecond += GPSup;
                            param.currentGold -= price;
                            console.log("GPC, GPS, price", GPCup, GPSup, price);
                        });
                    })(this);
                }]
        });


