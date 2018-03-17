(function() {
    function HomeCtrl(Task, $scope) {
        this.tasks = Task.all;
        this.taskManager = Task;
        this.taskStatus = function(task) {
            Task.taskComplete(task);
        };
        this.activeTask = function(task) {
            var expiryDate = moment().subtract(7, 'days').format('L');
            return task.completed == false && task.created > expiryDate;
        };
        this.clearFunction = function(event) {
            event.taskDescription = null;
            event.taskPriority = null;
        };
    };

    angular
        .module('blocitofffe')
        .controller('HomeCtrl', ['Task', '$scope', HomeCtrl]);
})();
