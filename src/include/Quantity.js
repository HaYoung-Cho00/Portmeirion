import React from 'react';
import styled from 'styled-components';

const QtyInput = styled.input`
  border: 1px solid var(--gray);
  padding: 5px;
  text-align: center;
  outline: none;
  width: 50px;
  height: 50px;
`

function Quantity({defaultValue, onChange, type}) {
  return (
    <QtyInput type={type} onChange={onChange} defaultValue={defaultValue} />
  );
}

export default Quantity;