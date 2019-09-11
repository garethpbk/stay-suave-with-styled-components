import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#99c24d',
    secondary: '#2d536f',
  },
};

const Wrapper = styled.div`
  border: 5px solid firebrick;

  color: ${props => props.theme.colors.primary};

  background-color: ${props => props.theme.colors.secondary};

  padding: 25px;
`;

function ThemeComponent() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <h1>I am colored by theme!</h1>
      </Wrapper>
    </ThemeProvider>
  );
}

export default ThemeComponent;
