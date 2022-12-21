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
    transform: scale(1.2) translateY(300%) rotate(25deg);
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
  height: 40rem;
`
const PhotoWrapper = styled.div`
  position: absolute;
  z-index: ${props => props.placement.z_index};
  top: calc(10% + ${props => props.placement.y_delta});
  left: calc(25% + ${props => props.placement.x_delta});
  transform: rotate(${props => props.placement.rot});
  animation: ${anim} 7s ease-out ${props => props.placement.delay} forwards;
`

const Photo = styled(GatsbyImage)`
`
