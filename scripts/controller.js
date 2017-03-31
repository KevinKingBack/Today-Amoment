/**
 * Created by kevin on 2017/3/29.
 * 控制器文件
 */
angular.module('Ctrls', [])
    //定义导航菜单控制器
    .controller('NavsCtrl', ['$scope', function ($scope) {
        $scope.navs = [
            {text: '今日一刻', icon: 'icon-home', link: '#!/today'},
            {text: '往期内容', icon: 'icon-file-empty', link: '#!/older'},
            {text: '热门作者', icon: 'icon-pencil', link: '#!/author'},
            {text: '栏目浏览', icon: 'icon-menu', link: '#!/category'},
            {text: '设置', icon: 'icon-cog', link: '#!/settings'}
        ];
    }])
    //今日一刻的控制器
    .controller('TodayCtrl', ['$scope', '$http', '$filter', '$rootScope', function ($scope, $http, $filter, $rootScope) {

        $rootScope.loaded=false;
        
        $rootScope.title = '今日一刻';
        // 导航状态
        $rootScope.key = 0;

        var today = $filter('date')(new Date, 'yyyy-MM-dd');

        $http({
            url: './api/today.php',
            params: {today: today}
        }).then(function (res) {
            console.log(res.data);
            $scope.posts = res.data.posts;
            $scope.date = res.data.date;

            // 加载状态（已完成）
            $rootScope.loaded = true;

        });

    }])
    //往日内容控制器
    .controller('OlderCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http,$rootScope) {

        $rootScope.loaded=false;
        
        $rootScope.key = 1;
        
        $rootScope.title = '往期内容';
       
        var day = -1;

        $http({
            url:'./api/older.php',
            params:{day:day}
        }).then(function (res) {
            console.log(res.data);
            //将获得的数据放到模型上面
            $scope.posts=res.data.posts;
            $scope.date = res.data.date;

            // 加载状态（已完成）
            $rootScope.loaded = true;
        });
    }])















