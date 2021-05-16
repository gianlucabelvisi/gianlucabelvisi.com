import React, {useEffect} from 'react';
import styled from 'styled-components';
import Video from '../assets/videos/background.mp4'
import Aos from 'aos'
import "aos/dist/aos.css"

const Hero = () => {

    useEffect(() => {
        Aos.init({})
    }, [])

    return (
        <Container>
            <Background>
                <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInLine/>
            </Background>

            <Content>
                <Overlay>
                    <ShoutOut data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000">
                        Never let a good midlife crisis go to waste
                    </ShoutOut>
                    <Disclaimer>Placeholder Video</Disclaimer>
                </Overlay>
            </Content>

        </Container>
    );
};

export default Hero;

const Container = styled.div`
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: 
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`
const Background = styled.div`
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
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vh - 1300px) / 2);
`
const Overlay = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  font-weight: bold;
`
const ShoutOut = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  font-weight: bold;
  padding: 0.1rem;
  max-width: 60%;
  margin-top: -25rem;
  opacity: 50% !important;
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

// const HeroP = styled.p`
//   font-size: clamp(1rem, 3vw, 3rem);
//   margin-bottom: 3rem;
//   font-weight: 400;
// `

