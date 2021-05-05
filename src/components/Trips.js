import React from 'react';
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Trips = () => {

    const data = useStaticQuery(graphql`
        query TripsQuery {
          allTripsJson {
            edges {
              node {
                alt
                button
                name
                img {
                  childImageSharp {
                    gatsbyImageData(
                     placeholder: BLURRED
                     formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
        }
    `)

    return (
        <ProductsContainer>
            <ProductsHeading>
                Heading
            </ProductsHeading>
            <ProductWrapper>
                {data.allTripsJson.edges.map(edge => {
                    return (
                        <div>
                            <GatsbyImage image={getImage(edge.node.img)} alt={edge.node.alt}/>
                        </div>
                        )
                    })
                }
            </ProductWrapper>

        </ProductsContainer>
    )
}

export default Trips;

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: red;
  color: #fff;
`

const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

const ProductWrapper = styled.div``

