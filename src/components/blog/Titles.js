import React from 'react';
import styled, {keyframes} from "styled-components"


export const SpicyTake = ({children}) => {
    return (
        <Wrapper>
            <ShakyIcon>🌶</ShakyIcon>
            <Qualifier>Spicy Take</Qualifier>
            <Title>
                {children}
            </Title>

        </Wrapper>
    );
};

export const ShakyTitle = ({emoji, title, children}) => {
    return (
        <Wrapper>
            <ShakyIcon>{emoji}</ShakyIcon>
            <Qualifier>{title}</Qualifier>
            <Title>
                {children}
            </Title>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
`

const Pulse = keyframes`
  0% {
    transform: scale(1.5);
  }
  25% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.5);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.5);
  }
`


const ShakyIcon = styled.div`
  font-size: 1.6rem;
  transform: all(0, 0, 0);
  animation: 2s ease-in-out 0s 1 ${Pulse};
  animation-iteration-count: infinite;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 0;
`

const Shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 2px, 0);
  }

  20%, 80% {
    transform: translate3d(2px, -1px, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 1px, 0);
  }
`

const Title = styled.h2`

`
const Qualifier = styled.div`
  top: -2rem;
  left: 2rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${props => props.theme.accentColor};
  font-weight: bold;
  animation: ${Shake} 0.2s cubic-bezier(.36, .07, .19, .97) both;
  transform: all(0, 0, 0);
  animation-iteration-count: infinite;
  backface-visibility: hidden;
  perspective: 1000px;
`


