const taskTitles = [];
const taskComplete = [];
const taskDescription = [];


function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has ${this.complete ? "" : "not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}


const task1 = newTask('Do dishes', 'No more plates');
const task2 = newTask('Go grociery shopping', 'Nothing to eat');
const tasks = [task1, task2];


task1.logState();
task1.markCompleted();
task1.logState();
