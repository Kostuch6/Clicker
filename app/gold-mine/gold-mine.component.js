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
                    };

                    this.updateOnSecond = (function (param) {
                        return function () {
                            param.currentGold += param.goldPerSecond;
                            console.log("updateOnSecond", param);
                            $rootScope.$broadcast('current-gold-changed', {currentGold: param.currentGold});
                        };
                    })(this);

                    $interval(this.updateOnSecond, 1000);

                    $scope.$on('income-upgraded', function (event, args) {
                        var GPCup = args.gpcUp;
                        var GPSup = args.gpsUp;
                        var price = args.price;
                        this.goldPerClick += GPCup;
                        this.goldPerSecond += GPSup;
                        this.currentGold -= price;
                    });
                }]

        });


