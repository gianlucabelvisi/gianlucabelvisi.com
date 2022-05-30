import React, {useEffect} from "react"

import Seo from "../components/Seo"
import Layout from "../components/Layout";
import WhoAmI from "../components/WhoAmI";
import Hero from "../components/Hero";
import {graphql} from "gatsby";
import styled, {keyframes} from "styled-components"
import Aos from "aos";
import BlogCard from "../components/BlogCard";

const IndexCringe = ({data}) => {

    useEffect(() => {
        Aos.init({})
    }, [])

    return (
        <Layout>
            <Seo title="Home"/>
            <Hero/>
            <BlogCardsContainer>

                <BlogCardsHeading data-aos="flip-up"
                                  data-aos-delay="500"
                                  data-aos-duration="1500"
                                  data-aos-easing="ease-in-sine">
                    Latest blog posts
                </BlogCardsHeading>

                <BlogCards data-aos="fade-left"
                           data-aos-delay="500"
                           data-aos-duration="1500"
                           data-aos-easing="ease-out-cubic">

                    {data.allMdx.edges.map((edge, index) => {
                        const fm = edge.node.frontmatter
                        return (
                            <BlogCard key={fm.path}
                                      cardImage={fm.cardImage}
                                      title={fm.title}
                                      subTitle={fm.subTitle}
                                      date={fm.date}
                                      path={fm.path}
                                      onHover={fm.onHover}
                                      index={index}
                                      data-aos="fade-left"
                                      data-aos-delay="90"
                                      data-aos-duration="1000"
                            />
                        )
                    })}
                </BlogCards>
            </BlogCardsContainer>
            <WhoAmI/>
            {/*<Email/>*/}
        </Layout>

    )
}

export default IndexCringe

const BlogCardsContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: ${props => props.theme.textColor};
  width: 100%;
  z-index: 10;
  
  @media screen and (max-height: 1000px) {
    padding-bottom: 1rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
    margin: 0;
  }

`

const BlogCardsHeading = styled.h2`
  font-size: clamp(1.2rem, 5vw, 4rem);
  margin-bottom: 2rem;
  padding-left: 2rem;
  opacity: .5;

  @media screen and (max-height: 1000px) {
    margin-bottom: 0.5rem;
  }
`

const fadeLeft = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const BlogCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-items: center;
  padding: 0 2rem;
  //animation: 1s ease-in-out 0s 1 ${fadeLeft};
  
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 499px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    width: 75%;
    height: auto;
    font-size: .8rem;
    grid-gap: 1rem;
  }
  @media screen and (max-width: 499px) {
    width: 85%;
  }
`

export const pageQuery = graphql`
query BlogCardsQuery {
  allMdx(
        sort: {fields: frontmatter___date, order: DESC}, 
        filter: {isFuture: {eq: false}, isHidden: {eq: false}},
        skip: 0, 
        limit: 3,
    ) {
    edges {
      node {
        frontmatter {
          path
          title
          subTitle
          date(formatString: "MMMM DD, YYYY")
          author  
          onHover  
          cardImage {
            childImageSharp {
                gatsbyImageData(
                    formats: [AUTO, WEBP, AVIF]
                )
            }
          }
        }
      }
    }
  }
}
`



