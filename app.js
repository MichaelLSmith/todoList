var app = angular.module('todoApp', []);

function TodoCtrl() {
  this.todos = [
    {text: 'learn angular', done: false},
    {text: 'write the content for the next module', done: false},
    {text: 'buy cheese', done: true}
  ];
  this.button = false;
 
  this.filters = [
    {label: 'All', showTodo: function(todo) {return true;}},
    {label: 'Active', showTodo: function(todo) {return !todo.done;}},
    {label: 'Complete', showTodo: function(todo) {return todo.done;}}
  ]
}

TodoCtrl.prototype.submit = function(){
  var newTodo = {text: this.newTodoInput, done: false}
          this.todos.push(newTodo);
  }

TodoCtrl.prototype.clearTrueTodos = function(){
  for(todo in this.todos){
    if(this.todos[todo].done){
      this.todos[todo].clear = true;
      this.button = true;
    }
  }
}

TodoCtrl.prototype.activateButton = function(){
  console.log(this.button);
  this.button = false;
  
}


app.controller('TodoCtrl', TodoCtrl);