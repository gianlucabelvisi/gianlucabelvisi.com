import React, {useEffect} from "react"

import Seo from "../components/Seo"
import Layout from "../components/Layout";
import WhoAmI from "../components/WhoAmI";
import Hero from "../components/Hero";
import Email from "../components/Email";
import {graphql} from "gatsby";
import styled from "styled-components"
import Aos from "aos";


const Index = ({data}) => {

    useEffect(() => {
        Aos.init({})
    }, [])

    return (
        <Layout>
            <Seo title="Home"/>
            <Hero/>
            <BlogCardsContainer>
                <h1>Latest blog posts</h1>
                <BlogCards>
                    {data.allMdx.edges.map(edge => {

                        return (
                            <BlogCard>
                                Blog Card
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
  top: 50%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  width: 100%;
`

const BlogCardsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  color: #000;
`

const BlogCards = styled.div`
  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const BlogCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  border-radius: 10px;
  transition: 0.2s ease;
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



