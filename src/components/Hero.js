import React, {useEffect} from 'react';
import styled from 'styled-components';
import Video from '../assets/videos/background.mp4'
import Aos from 'aos'
import "aos/dist/aos.css"

const Hero = ({children}) => {

    useEffect(() => {
        Aos.init({})
    }, [])

    return (
        <Container>
            <Background>
                <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInLine disablePictureInPicture preload="auto"/>
            </Background>

            <Content>
                <Overlay>
                    <ShoutOut data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000">
                        Never let a good midlife crisis go to waste
                    </ShoutOut>
                    <Disclaimer>Placeholder Video</Disclaimer>
                </Overlay>
            </Content>

            {children}

        </Container>
    );
};

export default Hero;

const Container = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.textColor};
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background: 
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`
const Background = styled.div`
  z-index: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
const Content = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0 calc((100vh - 1300px) / 2);
`
const Overlay = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  justify-content: start;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: ${props => props.theme.textColor};
  font-weight: bold;
`
const ShoutOut = styled.h1`
  z-index: 9;
  font-size: clamp(1.5rem, 6vw, 4rem);
  letter-spacing: 3px;
  font-weight: bold;
  padding: 0.1rem;
  max-width: 60%;
  margin-top: 3rem;
  opacity: 60% !important;
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media screen and (max-width: 1320px) {
    max-width: 70%;
  }
  @media screen and (max-width: 1130px) {
    max-width: 80%;
  }
  @media screen and (max-width: 800px) {
    max-width: 90%;
  }
  @media screen and (max-height: 1000px) {
    max-width: 100%;
  }

  @media screen and (max-width: 400px) {
    margin-top: 0;
  }

  //@media screen and (max-height: 660px) {
  //  opacity: 0% !important;
  //}


  &:hover {
    opacity: 100% !important;
    transform: scale(1.1) !important;
  }
`
const Disclaimer = styled.div`
  font-size: clamp(1.5rem, 3vw, 4rem);
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: .2;
`
