(function() {
  function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })

            .state('history', {
                url: '/',
                controller: 'HistoryCtrl as history',
                templateUrl: '/templates/history.html'
            });
    }

    angular
        .module('blocitofffe', ['ui.router', 'firebase'])
        .config(config);
})();
