import React, {useEffect} from 'react';
import styled from "styled-components"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import LinkButton from "./Button";
import Aos from "aos";

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
                <Button to={content.path} onHover={content.onHover}>Read</Button>
            </Overlay>
            <Emoji>
                {content.onHover}
            </Emoji>
        </Wrapper>);
};

export default FeaturedPost;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
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
  background: linear-gradient(hsl(0 0% 0% / .6),
  hsl(0 0% 0% / .3) 30%,
  hsl(0 0% 0% / 0));

  transition: all 500ms ease;

  &:hover,
  &:focus-within {
    transform: scale(1.05);
  }

  @media screen and (max-width: 1000px) {
    top: 50%;
  }
  @media screen and (max-width: 800px) {
    top: 40%;
  }
  @media screen and (max-width: 500px) {
    top: 30%;
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

const Button = styled(LinkButton)`
  margin-top: 2rem;
`

const Emoji = styled.div`
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
