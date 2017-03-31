/**
 * Created by kevin on 2017/3/29.
 * 自定义命令
 */
angular.module('Directives',[])
//驾加载出现图片命令
.directive('yikeLoading',function () {
   return {
       //这个仅仅是一个演示,提供一个思路
       restrict:'A',
       // template:'<img ng-hide="loaded" class="loading" src="./public/images/loading.gif" alt="">'
       // template:'<span></span>>'
   }
})
