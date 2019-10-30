import React, { useState } from 'react';
import styled from 'styled-components';
import { AddOrCancel } from '../../icons/generals';

const Centered = styled.div`
  position: sticky;
  z-index: 100;
  top: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.dark.bg};
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: calc(50% - 20px);
    background-color: ${props => props.theme.colors.dark.bg};
    width: 40px;
    height: 20px;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
`;
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.contentsMaxWidth};
  color: ${props => props.theme.colors.dark.title};
  padding: 1rem;
`;
const Fieldset = styled.fieldset`
  legend {
    display: flex;
    align-items: center;
    justify-content: space-around;
    fill: ${props => props.theme.colors.dark.title};
    font-size: 1rem;
    padding-right: 0.5rem;
    cursor: pointer;
  }
  border: ${props =>
    props.activated ? `2px solid ${props.theme.colors.dark.emph}` : 'none'};
  border-radius: ${props => props.theme.styles.borderRadius};
  padding: ${props => (props.activated ? '1rem' : '0 1rem')};
  > div {
    position: relative;
    z-index: 100;
    overflow: ${props => (props.activated ? 'visible' : 'hidden')};
    opacity: ${props => (props.activated ? 1 : 0)};
    max-height: ${props => (props.activated ? '100vh' : 0)};
    height: auto;
    max-width: ${props => props.theme.sizes.middle};
    width: 100%;
    margin: 0 auto;
    transition: opacity 0.5s, max-height 0.3s;
    > *:not(:last-child) {
      margin-bottom: ${props => props.theme.sizes.space};
    }
  }
`;

export default function Filter({ children }) {
  const [activated, setActivated] = useState(true);

  return (
    <Centered>
      <Wrapper>
        <Fieldset activated={activated}>
          <legend
            onClick={() => {
              setActivated(!activated);
            }}>
            <AddOrCancel cancel={activated} />
            필터 추가하기
          </legend>
          <div>{children}</div>
        </Fieldset>
      </Wrapper>
    </Centered>
  );
}
