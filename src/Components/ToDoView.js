import { observer } from 'mobx-react';
import {myToDoList} from './ToDoListStore'
import ListItem from './ListItem'
import './ToDoView.css'

const ToDoView = observer(() => {
    
    const todoItems =  myToDoList.taskArray.map((item, index) => (
    <ListItem
      task={item.task}
      completed={item.completed}
      key={index}
      markCompleted={() => myToDoList.markCompleted(index)}
    />
    ));

    const handleSubmit = (e) => {
      e.preventDefault();
      myToDoList.addItem();
    };

    const handleChange = (e) => {
      myToDoList.handleChange(e.target.value);
    }
    
    return (
      <div className="container">
        <h1>ToDo List</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={myToDoList.newItem} onChange={handleChange} />
          <button type="submit">Add To List</button>
        </form>
        <ul>{todoItems}</ul>
        <button className="clear-button" onClick={myToDoList.clearList}>Clear List</button>
      </div> 
    )
})

export default ToDoView