import React from "react"
import Link from "gatsby-link"
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import {graphql} from 'gatsby'
import {MDXRenderer} from "gatsby-plugin-mdx";
import styled from "styled-components"
import {GatsbyImage, getImage} from "gatsby-plugin-image";


const BlogTemplate = ({data}) => {

    // const featureImage = data.mdx.frontmatter.childImageSharp.fixed

    return (
        <Layout>
            <Seo title={data.mdx.frontmatter.title}/>
            <Wrapper>
                <FeatureImageWrapper>
                    <FeatureImage image={getImage(data.mdx.frontmatter.featureImage)} alt="who am I"/>
                </FeatureImageWrapper>
                {/*<Link to="/blog">Go Back</Link>*/}
                {/*<hr/>*/}
                {/*<h1>Hello World</h1>*/}
                {/*<h1>{data.mdx.frontmatter.title}</h1>*/}
                {/*<h4>Posted by {data.mdx.frontmatter.author} on {data.mdx.frontmatter.date}</h4>*/}
                {/*<div dangerouslySetInnerHTML={{__html: post.html}}/>*/}
            </Wrapper>
        </Layout>
    )

}

export default BlogTemplate


export const pageQuery = graphql`
    query BlogPostQuery($id: String!) {
        mdx(id: {eq: $id}) {
            body
            frontmatter {
                date
                author
                subTitle
                title
                cardImage {
                    childImageSharp {
                        gatsbyImageData(
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                featureImage {
                    childImageSharp {
                        gatsbyImageData(
                            formats: [AUTO, WEBP, AVIF], 
                            height: 300, 
                            quality: 100
                        )
                    }
                }
            }
        }
    }
`



const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: 7.8rem 20rem 4rem auto;
  gap: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
  }
`


const FeatureImageWrapper = styled.div`
  grid-column: 3 / span 10;
  grid-row: 2 / 4;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 768px) {
    grid-column: 2 / span 6;
  }
`
const FeatureImage = styled(GatsbyImage)`
  height: 100%;
  width: 100%;
`