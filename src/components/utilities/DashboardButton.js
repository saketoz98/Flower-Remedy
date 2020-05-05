import React from 'react';

const Button = props => {
  const style = {
    backgroundColor: props.disabled ? 'grey' : props.color,
    padding: '10px 20px',
    color: 'white'
  };

  return (
    <button style={style} disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
