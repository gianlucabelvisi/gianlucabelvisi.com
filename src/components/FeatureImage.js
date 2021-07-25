import React from 'react';
import styled from "styled-components"
import {GatsbyImage} from "gatsby-plugin-image";
import {useStaticQuery, graphql} from "gatsby";

const FeatureImage = ({ fixed }) => {

    const data = useStaticQuery(graphql(`
    query{
        imageSharp(fixed: {originalName: {eq: "feature.jpeg"}}) {
            fixed {
                ...GatsyImageSharpFixed
            }
        }
    }
    `
    ))

    return (
        <Wrapper>
            {/*<GatsbyImage alt={} image={}*/}
        </Wrapper>
    );
};

export default FeatureImage;


const Wrapper = styled.div`
  grid-column: 3 / span 10;
  grid-row: 2 / 4;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 768px) {
    grid-column: 2 / span 6;
  }
`
