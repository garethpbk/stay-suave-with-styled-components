import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --big-font: 4rem;
  }

  a {
    color: white;
  }

  h6 {
    color: forestgreen;
  }
`;

const Wrapper = styled.div`
  border: 5px solid firebrick;

  padding: 25px;

  background-color: #fefefe;

  h6 {
    font-size: var(--big-font);
  }
`;

function Global() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <h6>I am styled by Global!</h6>
      </Wrapper>
    </>
  );
}

export default Global;
