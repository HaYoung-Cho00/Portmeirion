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

function Quantity() {
  return (
    <QtyInput type='number' defaultValue={1} />
  );
}

export default Quantity;