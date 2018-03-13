(function() {
    function HistoryCtrl(Task, $scope) {
        this.tasks = Task.all;
    };

    angular
        .module('blocitofffe')
        .controller('HistoryCtrl', ['Task', '$scope', HistoryCtrl]);
})();
