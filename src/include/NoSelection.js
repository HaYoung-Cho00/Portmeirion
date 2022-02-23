import React from 'react';
import styled  from 'styled-components';

const NoSelected = styled.article`
  width: 100%;
  text-align: center; 
  h1 {
    padding: 10px 30px;
    font-size: 26px;
    background-color: #FFF5C1;
  }
`
function NoSelection(props) {
  return (
    <NoSelected>
      <h1>We can't find products matching the selection</h1>
    </NoSelected>
  );
}

export default NoSelection;