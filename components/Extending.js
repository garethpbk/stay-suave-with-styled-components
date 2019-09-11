import React from 'react';
import styled from 'styled-components';

// without the className prop, extending this wouldn't do anything
const BaseComponent = ({ className }) => <h1 className={className}>I'm a React component</h1>;

const ExtendedBaseComponent = styled(BaseComponent)`
  color: steelblue;
`;

const BaseStyledComponent = styled.h2`
  text-decoration: underline;
`;

const ExtendedBaseStyledComponent = styled(BaseStyledComponent)`
  color: rebeccapurple;
`;

function Extending() {
  return (
    <>
      <BaseComponent />
      <ExtendedBaseComponent />
      <BaseStyledComponent>I am a styled component</BaseStyledComponent>
      <ExtendedBaseStyledComponent>I am an extended styled component</ExtendedBaseStyledComponent>
    </>
  );
}

export default Extending;
