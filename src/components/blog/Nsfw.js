import React, {useState} from 'react';
import styled from "styled-components";


const Nsfw = ({children}) => {

    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <Wrapper>
            <Cover onClick={e => toggleVisibility()} isVisible={isVisible}>
                <Warning>NSFW!</Warning>
            </Cover>

            <Content>
                {children}
            </Content>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`

const Cover = styled.label`
  position: absolute;
  cursor: pointer;
  background-color: ${props => props.theme.button.mainColor};
  opacity: ${({isVisible}) => (isVisible ? "0" : "1")};
  pointer-events: ${({isVisible}) => (isVisible ? "none" : "")};
  height: 100%;
  width: 100%;
  transition: opacity .5s ease-in-out;
  border-radius: 20px;
`
const Warning = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${props => props.theme.button.bgColor};
  font-size: 2rem;
`
const Content = styled.div`
  padding: 1rem;
`

export default Nsfw;