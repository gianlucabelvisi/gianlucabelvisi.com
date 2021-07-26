import React from "react"
import Link from "gatsby-link"
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import {graphql} from 'gatsby'
import {MDXRenderer} from "gatsby-plugin-mdx";
import styled from "styled-components"
import {GatsbyImage, getImage} from "gatsby-plugin-image";


const BlogTemplate = ({data}) => {

    const frontMatter = data.mdx.frontmatter

    return (
        <Layout>
            <Seo title={frontMatter.title}/>
            <Wrapper>
                <PostHeader>
                    <Date>{frontMatter.date}</Date>
                </PostHeader>
                <FeatureImageWrapper>
                    <FeatureImage image={getImage(frontMatter.featureImage)} alt="Feature Image"/>
                </FeatureImageWrapper>
                <Content>

                </Content>
                {/*<Link to="/blog">Go Back</Link>*/}
                {/*<hr/>*/}
                {/*<h1>Hello World</h1>*/}
                {/*<h1>{data.mdx.frontMatter.title}</h1>*/}
                {/*<h4>Posted by {data.mdx.frontMatter.author} on {data.mdx.frontMatter.date}</h4>*/}
                {/*<div dangerouslySetInnerHTML={{__html: post.html}}/>*/}
            </Wrapper>
        </Layout>
    )

}

export default BlogTemplate

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

const PostHeader = styled.div`
  grid-column: 3 / span 10;
  grid-row: 1 / 2;
  position: relative;
`

const Date = styled.h2`
  position: absolute;
  bottom: 0;
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
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
`

const Content = styled.div`
  grid-column: 4 / span 8;
  grid-row: 3 / span 5;
  background-color: white;
  padding: 2rem 2rem;
  z-index: 1;

  @media screen and (max-width: 768px) {
    grid-column: 2 / span 6;
  }

  @media screen and (max-width: 500px) {
    padding: 0;
  }

`

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

