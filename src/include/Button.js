import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: #333E48;
  border: none;
  color: #ECE9E5;
  padding: 1em 3em;
  margin: 20px;
  cursor: pointer;
`

function Button({children, type}) {
  return (
    <Btn type={type}>
      {children}
    </Btn>
  );
}

export default Button;