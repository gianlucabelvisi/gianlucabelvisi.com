import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import styled from "styled-components";

const BlogImage = ({imageName}) => {

    const data = useStaticQuery(graphql`
        query BlogImageQuery {
          allFile(filter: {dir: {regex: "/.*images.*/"}}) {
            edges {
              node {
                childImageSharp {
                  gatsbyImageData(formats: [AUTO, WEBP, AVIF])
                }
                name
                dir
              }
            }
          }
        }
    `)

    return (
        <div style={{
            marginTop: "1rem",
            marginBottom: "1rem",
        }}>
            {data.allFile.edges.filter(edge => edge.node.name === imageName).map((edge, key) => (
                    <Image key={key} image={getImage(edge.node)} alt="who am I"/>
                )
            )}
        </div>
    );
};

const Image = styled(GatsbyImage)`
`

export default BlogImage;