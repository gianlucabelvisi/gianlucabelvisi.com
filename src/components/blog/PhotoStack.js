import React from 'react';
import styled from "styled-components";
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";


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

    function getRandomArbitrary(min, max) {
        const result = Math.random() * (max - min) + min
        console.log("result", result)
        return result
    }

    return (
        <Wrapper>

            {photos.map((elem, index) => {
                return (
                    <Photo
                        key={index}
                        image={getImage(elem)}
                        alt={"Photo " + index}
                        placement={
                            {
                                rot: getRandomArbitrary(-10, 10) + "deg",
                                x_delta: getRandomArbitrary(-10, 10) + "px",
                                y_delta: getRandomArbitrary(-10, 10) + "px"
                            }
                        }

                    />
                )
            })}

        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
  height: 40rem;
`

const Photo = styled(GatsbyImage)`
  position: absolute;
  top: calc(10% + ${props => props.placement.y_delta});
  left: 50%;
  transform: 
          rotate(${props => props.placement.rot}) 
          translate(calc(-50% + ${props => props.placement.x_delta}), 0);
`
