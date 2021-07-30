import React, {useEffect} from "react"

import Seo from "../components/Seo"
import Layout from "../components/Layout";
import WhoAmI from "../components/WhoAmI";
import Hero from "../components/Hero";
import Email from "../components/Email";
import {graphql} from "gatsby";
import styled from "styled-components"
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
                <BlogCardsHeading>
                    <h1>Latest blog posts</h1>
                </BlogCardsHeading>
                <BlogCards>
                    {data.allMdx.edges.map(edge => {
                        const fm = edge.node.frontmatter;
                        return (
                            <BlogCard key={fm.path}
                                      cardImage={fm.cardImage}
                                      title={fm.title}
                                      subTitle={fm.subTitle}
                                      author={fm.author}
                                      date={fm.date}
                                      path={fm.path}
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
`

const BlogCardsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 2rem);
  margin-bottom: 2rem;
`

const BlogCards = styled.div`
  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-items: center;
  padding: 0 2rem;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
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
          date
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



