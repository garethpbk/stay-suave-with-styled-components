import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 25px;

  background-color: #fefefe;

  color: ${props => (props.blue ? 'steelblue' : 'coral')};

  border: ${props => (props.border ? '5px solid firebrick' : null)};
`;

function Props() {
  const [blue, setBlue] = useState(false);
  const [border, setBorder] = useState(false);

  return (
    <>
      <Wrapper blue={blue}>
        <h1>I can be blue or not!</h1>
      </Wrapper>
      <hr />
      <Wrapper blue={blue} border={border}>
        <h1>I can be blue or not, and have a border or not!</h1>
      </Wrapper>
      <button onClick={() => setBlue(!blue)}>Toggle Blue</button>
      <button onClick={() => setBorder(!border)}>Toggle Border</button>
    </>
  );
}

export default Props;
