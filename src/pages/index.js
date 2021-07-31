import React, {useEffect} from "react"

import Seo from "../components/Seo"
import Layout from "../components/Layout";
import WhoAmI from "../components/WhoAmI";
import Hero from "../components/Hero";
import Email from "../components/Email";
import {graphql} from "gatsby";
import styled, {keyframes} from "styled-components"
import Aos from "aos";
import BlogCard from "../components/BlogCard";


const Index = ({data}) => {

    useEffect(() => {
        Aos.init({})
    }, [])

    return (
        <Layout>
            <Seo title="Home"/>
            <Hero/>
            <BlogCardsContainer>
                <BlogCardsHeading data-aos="flip-up"
                                  data-aos-delay="1000"
                                  data-aos-duration="500"
                                  data-aos-easing="ease-in-sine">
                    <h1>Latest blog posts</h1>
                </BlogCardsHeading>
                <BlogCards>
                    {data.allMdx.edges.map((edge, index) => {
                        const fm = edge.node.frontmatter
                        return (
                            <BlogCard key={fm.path}
                                      cardImage={fm.cardImage}
                                      title={fm.title}
                                      subTitle={fm.subTitle}
                                      date={fm.date}
                                      path={fm.path}
                                      index={index}
                            >
                            </BlogCard>
                        )
                    })}
                </BlogCards>
            </BlogCardsContainer>
            <WhoAmI/>
            <Email/>
        </Layout>

    )
}

export default Index

const BlogCardsContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  width: 100%;
  z-index: 10;
`

const BlogCardsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 2rem);
  margin-bottom: 2rem;
  padding-left: 2rem;
  opacity: .5;
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
  animation: 1s ease-in-out 0s 1 ${fadeLeft};

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  //@media screen and (max-width: 868px) {
  //  grid-template-columns: 1fr;
  //}
`

export const pageQuery = graphql`
query BlogCardsQuery {
  allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: 0, limit: 3) {
    edges {
      node {
        frontmatter {
          path
          title
          subTitle
          date(formatString: "MMMM DD, YYYY")
          author  
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



