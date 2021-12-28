import React, {useState} from 'react';
import styled from "styled-components";


const Spoiler = ({children}) => {

    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <Wrapper>
            <Cover onClick={e => toggleVisibility()} isVisible={isVisible}/>

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
  pointer-events: ${({isVisible}) => (isVisible ? "none" : "")};;
  height: 100%;
  width: 100%;
  transition: opacity .5s ease-in-out;
  border-radius: 20px;
  
  &:after {
    content: 'Spoiler. Click to reveal!';
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`

const Content = styled.div`
  padding: 1rem;
`

export default Spoiler;