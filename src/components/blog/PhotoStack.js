import React, {useRef} from 'react';
import styled, {keyframes} from "styled-components";
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Anime from "react-anime";

export const Books2022 = () => {

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
        <PhotoStack photos={covers}/>
    );
};


const PhotoStack = ({photos}) => {

    const random = (min, max) => {
        return Math.random() * (max - min) + min
    }

    return (
        <Wrapper>
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
                    <Photo
                        key={index}
                        image={getImage(elem)}
                        alt={"Photo " + index}
                        placement={placement}

                    />
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
    transform: scale(1.2) translateX(200%);
    opacity: 1;
  }
  95% {
    transform: scale(1.2) translateX(200%);
    opacity: 0.5;
  }
  99% {
    transform: scale(1.2) translateX(200%);
    opacity: 0.2;
    visibility: hidden;
  }
  100% {
    transform: scale(1) translateX(0);
    opacity: 0.1;
    visibility: hidden;
  }
`
const Wrapper = styled.div`
  position: relative;
  height: 40rem;
`
const Photo = styled(GatsbyImage)`
  position: absolute;
  z-index: ${props => props.placement.z_index};
  top: calc(10% + ${props => props.placement.y_delta});
  left: calc(25% + ${props => props.placement.x_delta});
  transform: rotate(${props => props.placement.rot});
  animation: ${anim} 7s ease-out ${props => props.placement.delay} forwards;
`
