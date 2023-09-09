import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PortraitImageSpanner from '../Images/PortraitImageSpanner';
import CardsImageSpanner from "../Images/CardsImageSpanner";

export const Pantelleria1 = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "pantelleria1"}}) {
                edges {
                    node {
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH)
                        }
                    }
                }
            }
        }
    `);

    const images = data.allFile.edges.map(edge => getImage(edge.node.childImageSharp));

    return <CardsImageSpanner images={images} />;
};
