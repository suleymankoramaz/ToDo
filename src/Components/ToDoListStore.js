import {makeObservable , observable , action , computed} from 'mobx';

class ToDoListStore {
  taskArray = []
  newItem = ''

  constructor() {
    makeObservable(this, {
      taskArray: observable,
      newItem: observable,
      clearList: action,
      handleChange: action,
      addItem: action,
      markCompleted: action,
      getFinishedTasks: computed
    });
  }

  clearList = () => {
    this.taskArray = [];
  }

  handleChange = (value) => {
    this.newItem = value;
  }

  addItem = () => {
    this.taskArray.push({ task: this.newItem, completed: false });
    this.newItem = '';
  }

  markCompleted = (index) => {
    this.taskArray[index].completed = !this.taskArray[index].completed;
  }

  get getFinishedTasks() {
    return this.taskArray.filter((item) => item.completed);
  }
}

export const myToDoList = new ToDoListStore()