/**
 * Created by kevin on 2017/3/29.
 */
var Yike=angular.module('Yike',['ngRoute','Ctrls','Directives']);
Yike.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/today',{
        templateUrl:'./views/today.html',
        controller:'TodayCtrl'
    }).when('/older',{
        templateUrl:'./views/older.html',
        controller:'OlderCtrl'
    }).when('/author',{
        templateUrl:'./views/author.html'
        // controller:''
    }).when('/settings',{
        templateUrl:'./views/settings.html'
        // controller:''
    }).otherwise({
        redirectTo:'/today'
    });
}]);

// 在根作用域下添加一个方法，这个方法可以被任一个控制器访问到
Yike.run(['$rootScope',function ($rootScope) {
    $rootScope.collapsed=false;
    $rootScope.toggle=function () {
        $rootScope.collapsed= !$rootScope.collapsed;
        //控制每个具体链接动画
        //获取所有的链接
        var navsDom=document.querySelectorAll('.navs dd');

        for (var i = 0; i < navsDom.length; i++) {
            if($rootScope.collapsed){
                //左 ---->  右   -100% ----> 0
                navsDom[i].style.transform='translate(0)';
                navsDom[i].style.transitionDuration=0.2*(i+1)+'s';
                navsDom[i].style.transitionDelay='0.3s';
            }else{
                //右 ---->  左   0 ---->  -100%
                navsDom[i].style.transform='translate(-100%)';
                navsDom[i].style.transitionDuration=0.2*(navsDom.length-i)+'s';
                navsDom[i].style.transitionDelay='';
            }
        }
    }
}]);


