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
                <Title>{content.title}</Title>
                <SubTitle>{content.subTitle}</SubTitle>
                <Button to={content.path} big={true}>Read</Button>
                <Emoji>
                    {content.onHover}
                </Emoji>
            </Overlay>
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
    height: 40rem;
  }

  --font-size-emoji: clamp(1rem, 7vw, 4rem);
  --font-size-title: clamp(1rem, 5vw, 3rem);
  --font-size-subtitle: clamp(0.8rem, 3vw, 1.5rem);
`
const Background = styled(GatsbyImage)`
  height: 100%;
  background-size: cover;
  background-blend-mode: darken;
  background-position: left;
`
const Overlay = styled.div`
  position: absolute;
  
  top: 40%;
  right: 0;
  color: ${props => props.theme.white};
  padding: 1rem;
  border-radius: 12px;
  width: 60%;
  
  background: linear-gradient(
  rgba(0, 0, 0, 0.5) 0%,
  rgba(0, 0, 0, 0.5) 35%,
  rgba(0, 0, 0, 0.1) 100%
  );

  transition: all 500ms ease;

  &:hover,
  &:focus-within {
    transform: scale(1.05);
  }
  
  @media screen and (max-width: 1200px) {
    top: 30%;
    width: 50%;
  }
  @media screen and (max-width: 1000px) {
    top: 35%;
    width: 70%;
  }
  @media screen and (max-width: 800px) {
    top: 30%;
    width: 80%;
  }
  @media screen and (max-width: 700px) {
    top: 40%;
    width: 90%;
  }
  @media screen and (max-width: 400px) {
    top: 35%;
    width: 95%;
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
  line-height: 2rem;
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
