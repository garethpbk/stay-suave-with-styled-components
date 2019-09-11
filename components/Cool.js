import React, { useState } from 'react';
import styled from 'styled-components';

function getRandomRgb(value) {
  const r = Math.floor(Math.random() * value);
  const g = Math.floor(Math.random() * value);
  const b = Math.floor(Math.random() * value);

  const style = `rgb(${r}, ${g}, ${b})`;

  return style;
}

const Wrapper = styled.div`
  padding: 25px;

  background-color: ${props => getRandomRgb(props.colorValue)};

  color: ${props => getRandomRgb(props.colorValue)};
`;

const WrapperTwo = styled.div.attrs(props => ({
  style: { backgroundColor: `${getRandomRgb(props.colorValue)}`, color: `${getRandomRgb(props.colorValue)}` },
}))`
  padding: 25px;
`;

function Cool() {
  const [colorValue, setColorValue] = useState(50);

  return (
    <>
      <Wrapper colorValue={colorValue}>
        <h1>I'm psychadelic!</h1>
      </Wrapper>
      <hr />
      <WrapperTwo colorValue={colorValue}>
        <h1>I'm psychadelic!</h1>
      </WrapperTwo>
      <input type="range" min="0" max="255" onChange={e => setColorValue(e.target.value)} />
    </>
  );
}

export default Cool;
