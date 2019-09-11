import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 5px solid firebrick;

  padding: 25px;

  background-color: #fefefe;

  h2 {
    color: rebeccapurple;

    &.classy {
      font-style: italic;
    }
  }

  h1 {
    /* this would override MyHeader's color - be careful with nesting */
    /* color: steelblue; */
  }
`;

const MyHeader = styled.h1`
  color: forestgreen;
  text-decoration: underline;
`;

function Example() {
  return (
    <Wrapper>
      <MyHeader>I am the header!</MyHeader>
      <h2>I am a sub-header</h2>
      <h2 className="classy">I am a classy sub-header</h2>
    </Wrapper>
  );
}

export default Example;
