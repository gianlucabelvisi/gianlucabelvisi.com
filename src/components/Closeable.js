import React, {useRef, useState} from 'react';
import {keyframes} from "styled-components";
import styled from "styled-components";
import {BiPlusMedical} from "react-icons/bi";
import {Transition} from 'react-transition-group';


const Closeable = ({children, enabled}) => {

    const nodeRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    const duration = 700;

    const defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 1
    }

    const transitionStyles = {
        entering: {opacity: 1},
        entered: {opacity: 1},
        exiting: {opacity: 0},
        exited: {opacity: 0},
    };

    return (
        <div>
            <Transition nodeRef={nodeRef} in={isVisible} timeout={duration} unmountOnExit={true}>
                {state => (
                    <div ref={nodeRef} style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        <Wrapper>
                            {enabled &&
                                <Close onClick={() => setIsVisible(!isVisible)}/>
                            }
                            {children}
                        </Wrapper>
                    </div>
                )}

            </Transition>
            {/*<button onClick={() => setIsVisible(!isVisible)}>*/}
            {/*    Click to Enter*/}
            {/*</button>*/}
        </div>
    );
};


export default Closeable;

const shrink = keyframes`
  0% {
    height: 100%;
    width: 100%;
  }
  100% {
    height: 0;
    width: 0;
    display: none;
  }
`;

const Wrapper = styled.div`
  position: relative;

  &.shrink-animation {
    animation: ${shrink} 1s ease-in-out;
    transition: 1s;
    overflow: hidden;
  }
`;

const Close = styled(BiPlusMedical)`
  position: absolute;
  z-index: 1000;
  top: 5px;
  right: 5px;
  color: ${props => props.theme.accentColor};
  font-size: 1.6rem;
  transition: all 400ms ease-in;
  transform: rotate(45deg);

  &:hover {
    transform: scale(1.5) rotate(225deg);
  }
`