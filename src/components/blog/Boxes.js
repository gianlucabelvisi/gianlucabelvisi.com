import React from 'react';
import styled, {keyframes} from "styled-components";
import Closeable from "../Closeable";

const TextBox = ({children, title, closeable = false, closeButtonCaption = ""}) => {

    return (
        <Closeable enabled={closeable}>
            <Wrapper>
                <Title>
                    <strong>{title}</strong>
                </Title>
                {children}
                {closeButtonCaption !== "" &&
                    <CloseButton onClick={() => closeButtonCaption = "k thx"}>
                        {closeButtonCaption}
                    </CloseButton>
                }
            </Wrapper>
        </Closeable>
    );
};

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-left: ${props => props.theme.accentColor} 3px solid;
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`
const Title = styled.div`
  text-transform: uppercase;
  padding-bottom: 1rem;
`
const CloseButton = styled.button`
  background-color: ${props => props.theme.accentColor};
  height: 3rem;
  width: 8rem;
  border: none;
  color: ${props => props.theme.bgColor};
  text-decoration: none;
  padding: .5rem;
  display: flex;
  margin: 0 .5rem 0 .5rem;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 300ms ease;

  &:hover {
    transform: scale(1.2);
  }
`

export default TextBox


export const ProfitBox = ({subject, percentage}) => {
    return (
        <ProfitWrapper>
            <ProfitContainer>
                <ProfitSubject>
                    {subject}
                </ProfitSubject>
                <Profit>
                    +{percentage}%
                </Profit>
            </ProfitContainer>
        </ProfitWrapper>
    );
};
const Wobble = keyframes`
  0% {
    transform: rotate(2deg);
  }
  25% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(2deg);
  }
  75% {
    transform: rotate(-2deg);
  }
  100% {
    transform: rotate(2deg);
  }
`
const Pulse = keyframes`
  0% {
    transform: scale(1.03);
  }
  25% {
    transform: scale(0.97);
  }
  50% {
    transform: scale(1.03);
  }
  75% {
    transform: scale(0.97);
  }
  100% {
    transform: scale(1.03);
  }
`

const ProfitWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-block: 2rem;
`
const ProfitContainer = styled.div`
  width: 50%;
  cursor: pointer;
  background-color: ${props => props.theme.card.altColor};
  border-radius: 20px;
  padding: 1rem;
  pointer-events: none;
  animation: 7s ease-in-out 0s 1 ${Wobble};
  animation-iteration-count: infinite;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
const ProfitSubject = styled.h2`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.card.accentColor};
`
const Profit = styled(ProfitSubject)`
  font-size: 6rem;
  animation: 7s ease-in-out 0s 1 ${Pulse};
  animation-iteration-count: infinite;
`


