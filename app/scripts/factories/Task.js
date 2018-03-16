(function() {
    function Task($firebaseArray) {
        var ref = firebase.database().ref().child('tasks');
        var tasks = $firebaseArray(ref);

        var taskStatus = function(task) {
            task.completed = true;
            tasks.$save(task)
        }

        var taskReset = function(task) {
            task.completed = false;
            task.created = moment().format("MMM Do YY");
            tasks.$save(task)
        }

        return {
            all: tasks,
            addTask: function(taskDescription, taskPriority) {
              tasks.$add({ description: taskDescription, priority: taskPriority, created: moment().format('L'), completed: false, expires: moment().add(7, 'days').format('L') });
            }
        }
    };

    angular
    .module('blocitofffe')
    .factory('Task', ['$firebaseArray', Task]);
})();
