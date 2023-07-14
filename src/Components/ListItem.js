import React from 'react';
import './ListItem.css'

const ListItem = (props) => {
  const itemStyle = {
    color: props.completed ? 'grey' : 'inherit',
    textDecoration: props.completed ? 'line-through' : 'none',
    fontSize: '25px',
    fontFamily: 'Fantasy',
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.markCompleted()}
      />
      <span style={itemStyle}>{props.task}</span>
    </div>
  );
};

export default ListItem;