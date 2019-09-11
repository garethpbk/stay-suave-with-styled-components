import React from 'react';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0% {
    width: 400px;
  }

  50% {
    width: 800px;
  }

  100% {
    width: 400px;
  }
`;

const Wrapper = styled.div`
  border: 5px solid firebrick;

  color: steelblue;

  padding: 25px;

  background-color: #fefefe;

  animation: ${move} 2s linear infinite;
`;

function Example() {
  return (
    <Wrapper>
      <h1>I'm animated!</h1>
    </Wrapper>
  );
}

export default Example;
