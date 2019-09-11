import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 25px;

  background-color: #fefefe;

  color: coral;

  &.blue {
    color: steelblue;
  }

  &.border {
    border: 5px solid firebrick;
  }
`;

function getClassName(blue, border) {
  if (blue && border) return 'blue border';
  if (blue) return 'blue';
  if (border) return 'border';

  return '';
}

function Classes() {
  const [blue, setBlue] = useState(false);
  const [border, setBorder] = useState(false);

  return (
    <>
      <Wrapper className={blue ? 'blue' : null}>
        <h1>I can have 0 or 1 classes!</h1>
      </Wrapper>
      <hr />
      <Wrapper className={getClassName(blue, border)}>
        <h1>I can have 0, 1, or 2 classes!</h1>
      </Wrapper>
      <button onClick={() => setBlue(!blue)}>Toggle Blue</button>
      <button onClick={() => setBorder(!border)}>Toggle Border</button>
    </>
  );
}

export default Classes;
