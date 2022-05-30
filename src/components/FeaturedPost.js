import React, {useEffect} from 'react';
import styled from "styled-components"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import Aos from "aos";
import {NetflixButton} from "./NetflixButton";

const FeaturedPost = ({post}) => {

    useEffect(() => {
        Aos.init({})
    }, [])

    const content = post.node.frontmatter
    return (
        <Wrapper data-aos="fade-up" data-aos-duration="1000">
            <Background image={getImage(content.featureImage)} alt="background" data-aos="fade-up"/>
            <Overlay>
                <Title >{content.title}</Title>
                <SubTitle>{content.subTitle}</SubTitle>
                <Button to={content.path} big={true}>Read</Button>
            </Overlay>
            <Emoji>
                {content.onHover}
            </Emoji>
        </Wrapper>
    );
};

export default FeaturedPost;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    height: 30rem;
  }

  @media screen and (max-width: 400px) {
    height: 50rem;
  }
  
  --font-size-emoji: clamp(1rem, 7vw, 4rem);
  --font-size-title: clamp(1rem, 5vw, 3rem);
  --font-size-subtitle: clamp(0.8rem, 3vw, 1.5rem);
`
const Background = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-blend-mode: darken;
`
const Overlay = styled.div`
  position: absolute;
  top: 65%;
  left: 10%;
  color: ${props => props.theme.white};
  padding: 1rem;
  border-radius: 12px;
  width: 90%;
  background: linear-gradient(hsl(0 0% 0% / .9),
  hsl(0 0% 0% / .8) 60%,
  hsl(0 0% 0% / .6) 40%,
  hsl(0 0% 0% / .2) 
  );

  transition: all 500ms ease;

  &:hover,
  &:focus-within {
    transform: scale(1.05);
  }

  @media screen and (max-width: 1200px) {
    top: 56%;
  }
  @media screen and (max-width: 1000px) {
    top: 50%;
  }
  @media screen and (max-width: 800px) {
    top: 40%;
  }
  @media screen and (max-width: 700px) {
    top: 50%;
  }
  @media screen and (max-width: 400px) {
    top: 70%;
  }
`
const Title = styled.div`
  font-size: var(--font-size-title);
  font-weight: bold;
`
const SubTitle = styled.div`
  font-size: var(--font-size-subtitle);
  margin-top: 2rem;
  margin-bottom: 2rem;
`
const Button = styled(NetflixButton)`
  margin-top: 2rem;
`
const Emoji = styled.div`
  color: ${props => props.theme.white};;
  font-size: var(--font-size-emoji);
  position: absolute;
  bottom: 10px;
  right: 20px;
  transition: all 200ms ease-in-out;
  &:hover,
  &:focus-within {
    transform: scale(1.2);
  }
`
