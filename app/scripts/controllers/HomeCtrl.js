(function() {
    function HomeCtrl(Task, $scope) {
        this.tasks = Task.all;
        this.taskManager = Task;
    };

    angular
        .module('blocitofffe')
        .controller('HomeCtrl', ['Task', '$scope', HomeCtrl]);
})();
