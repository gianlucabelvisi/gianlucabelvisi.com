import React from 'react';
import styled, {keyframes} from "styled-components";
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import BlogImage from "./BlogImage";

export const Books2022 = ({background}) => {

    const data = useStaticQuery(graphql`
        query Books2022Query {
            allBooks2022Json {
                edges {
                    node {
                        name
                        author
                        img {
                            childImageSharp {
                                gatsbyImageData(
                                    formats: [AUTO, WEBP, AVIF],
                                    quality: 100
                                )
                            }
                        }
                    }
                }
            }
        }
    `)

    const covers = data.allBooks2022Json.edges.map(edge => edge.node.img)

    console.log("covers:", covers)

    return (
        <PhotoStack photos={covers} background={background}/>
    );
};


const PhotoStack = ({photos, background}) => {

    const random = (min, max) => {
        return Math.random() * (max - min) + min
    }

    return (
        <Wrapper>
            <BlogImage imageName={background}/>
            {photos.map((elem, index) => {
                const placement =
                    {
                        z_index: 1000 - index,
                        delay: 4 * index + 1 + "s",
                        rot: random(-45, 45) + "deg",
                        x_delta: random(-10, 10) + "px",
                        y_delta: random(-10, 10) + "px"
                    }
                return (
                    <PhotoWrapper key={index} placement={placement}>
                        <Photo
                            image={getImage(elem)}
                            alt={"Photo " + index}
                        />
                    </PhotoWrapper>
                )
            })}
        </Wrapper>
    )
}

const anim = keyframes`
  0% {
    rotate(${props => props.placement.rot})
  }
  20% {
    transform: rotate(0deg);
  }
  40% {
    transform: scale(1.21);
  }
  43% {
    transform: scale(1.2);
    opacity: 1;
  }
  45% {
    transform: scale(1.19);
    opacity: 1;
  }
  47% {
    transform: scale(1.2);
    opacity: 1;
  }
  80% {
    transform: scale(1.2) translateY(400%) rotate(25deg);
    opacity: 1;
  }
  100% {
    transform: scale(0) translateY(1000%) rotate(720deg);
    opacity: 0;
    visibility: hidden;
  }
`
const Wrapper = styled.div`
  position: relative;
  height: auto;
  margin-bottom: 2rem;
`
const PhotoWrapper = styled.div`
  position: absolute;
  z-index: ${props => props.placement.z_index};
  top: calc(40% + ${props => props.placement.y_delta});
  left: calc(25% + ${props => props.placement.x_delta});
  transform: rotate(${props => props.placement.rot});
  animation: ${anim} 7s ease-out ${props => props.placement.delay} forwards;
  scale: 1;
  transition: all 500ms ease;
  @media screen and (max-width: 1000px) {
    top: calc(40% + ${props => props.placement.y_delta});
    scale: .9;
  }
  @media screen and (max-width: 600px) {
    scale: .8;
  }
  @media screen and (max-width: 550px) {
    left: calc(20% + ${props => props.placement.x_delta});
    scale: .6;
  }
  @media screen and (max-width: 470px) {
    left: calc(10% + ${props => props.placement.x_delta});
    scale: .5;
  }
  @media screen and (max-width: 400px) {
    top: calc(20% + ${props => props.placement.y_delta});
    left: calc(10% + ${props => props.placement.x_delta});
    scale: .5;
  }
`

const Photo = styled(GatsbyImage)`
`
