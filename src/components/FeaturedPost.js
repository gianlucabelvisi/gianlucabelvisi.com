import React, {useEffect} from 'react';
import styled from "styled-components"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import Aos from "aos";
import {NetflixButton} from "./NetflixButton";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Delayed from "./Delayed";

const FeaturedPost = ({post}) => {

    useEffect(() => {
        Aos.init({})
    }, [])

    const {width} = useWindowDimensions()

    const content = post.node.frontmatter
    return (
        <Delayed>

            <Wrapper data-aos="fade-up" data-aos-duration="1000">

                {width > 500 &&
                    <Bg image={getImage(content.featureImage)} alt="background" data-aos="fade-up"/>
                }
                {width <= 500 &&
                    <Bg image={getImage(content.featureImagePhone)} alt="background" data-aos="fade-up"/>
                }
                <Overlay>
                    <Title>{content.title}</Title>
                    <SubTitle>{content.subTitle}</SubTitle>
                    <Button to={content.path} big={true}>Read</Button>
                    <Emoji>
                        {content.onHover}
                    </Emoji>
                </Overlay>
            </Wrapper>
        </Delayed>
    );
};

export default FeaturedPost;

const Wrapper = styled.div`
  position: relative;

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
const Bg = styled(GatsbyImage)`
  height: 100%;

  @media screen and (min-width: 800px) {
    width: 100%;
    background-size: cover;
  }
`
const Overlay = styled.div`
  position: absolute;

  color: ${props => props.theme.white};
  padding: 1rem;
  border-radius: 12px;

  background: linear-gradient(
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.3) 35%,
      rgba(0, 0, 0, 0.1) 100%
  );

  transition: all 500ms ease;

  &:hover,
  &:focus-within {
    transform: scale(1.05);
  }

  left: 0;
  top: 60%;
  width: 35%;

  @media screen and (max-width: 2000px) {
    top: 30%;
    width: 40%;
  }
  @media screen and (max-width: 1200px) {
    top: 30%;
    width: 40%;
  }
  @media screen and (max-width: 1000px) {
    top: 50%;
    width: 70%;
  }
  @media screen and (max-width: 800px) {
    top: 50%;
    width: 80%;
  }
  @media screen and (max-width: 700px) {
    top: 50%;
    width: 90%;
  }
  @media screen and (max-width: 400px) {
    top: 60%;
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
