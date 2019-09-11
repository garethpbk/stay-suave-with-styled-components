import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 5px solid firebrick;

  color: steelblue;

  padding: 25px;

  background-color: #fefefe;
`;

function Example() {
  return (
    <Wrapper>
      <h1>I am wrapped by a styled component!</h1>
    </Wrapper>
  );
}

export default Example;
