import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
  border: none;
  border: 1px solid #ECE9E5;
  width: 400px;
  height: 50px;
  padding: 0 10px;
  outline: none;
  margin-top: 10px;
  margin-bottom: 30px;
  transition: 0.5s;
  &:focus {
    border: 1px solid #333E48;
  }
`

function Input({type, id}) {
  return (
    <InputField id={id} type={type}/>
  );
}

export default Input;