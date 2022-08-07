import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import styled from "styled-components";

export const MarkingsPicture = () => {

    const data = useStaticQuery(graphql`
        query TestMarkingsQuery {
          allFile(filter: {name: {regex: "/themarkings*/"}}) {
            edges {
              node {
                childImageSharp {
                  gatsbyImageData(
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
    `)

    return (
        <Picture data={data}/>
    );
};


const Picture = ({data}) => {

    return (
        <>
            {data.allFile.edges.map((edge, key) => (
                    <Image key={key} image={getImage(edge.node)} alt="who am I"/>
                )
            )}
        </>
    );
};

const Image = styled(GatsbyImage)`
  position: relative;
  z-index: -10;
`
