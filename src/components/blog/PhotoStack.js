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


    const handleClick = () => {
    }

    const random = (min, max) => {
        const result = Math.random() * (max - min) + min
        return result
    }

    return (
        <Wrapper onClick={handleClick}>


            {photos.map((elem, index) => {
                console.log("Index", index)
                const p =
                    {
                        z_index: 1000 - index,
                        delay: 5 * index + 1 + "s",
                        rot: random(-45, 45) + "deg",
                        x_delta: random(-10, 10) + "px",
                        y_delta: random(-10, 10) + "px"
                    }
                console.log("placement", p)
                return (
                    <Photo
                        key={index}
                        image={getImage(elem)}
                        alt={"Photo " + index}
                        placement={p}

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
  25% {
    transform: rotate(0deg);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1.2) translateX(500%);
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
  animation: ${anim} 10s ease-in-out ${props => props.placement.delay} forwards;
`
