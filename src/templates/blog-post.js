import React from "react"
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import {graphql} from 'gatsby'
import {MDXRenderer} from "gatsby-plugin-mdx";
import styled from "styled-components"
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {MDXProvider} from "@mdx-js/react";
import Spoiler from "../components/Spoiler";
import YouTube from "../components/YouTube";
import {Break, EvilQuote, Question, Quote, Song} from "../components/Text";


const BlogTemplate = ({data}) => {

    const frontmatter = data.mdx.frontmatter

    return (
        <Layout>
            <Seo title={frontmatter.title}/>
            <Wrapper>
                <PostHeader>
                    <Date>{frontmatter.date}</Date>
                </PostHeader>
                <FeatureImageWrapper>
                    <FeatureImage image={getImage(frontmatter.featureImage)} alt="Feature Image"/>
                </FeatureImageWrapper>
                <Post>
                    <Title>{frontmatter.title}</Title>
                    <MDXProvider
                        components={{
                            // Map HTML element tag to React component
                            p: P,
                            ul: UL,
                            li: LI,
                            h2: H2,
                            h3: H3,
                            h4: H4,
                            a: A,
                            Spoiler, YouTube, Song, Question, Break, Quote, EvilQuote
                            //p: props => <p {...props} style={{color: "rebeccapurple"}}/>,
                        }}
                    >
                        <MDXRenderer>
                            {data.mdx.body}
                        </MDXRenderer>
                    </MDXProvider>
                </Post>
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
  @media screen and (max-width: 768px) {
    grid-column: 2 / span 6;
  }
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
const Title = styled.h1`
  margin-bottom: 2rem;
`
const Post = styled.div`
  grid-column: 4 / span 8;
  grid-row: 3 / span 5;
  background-color: ${props => props.theme.bgColor};
  padding: 2rem 2rem;
  z-index: 1;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    grid-column: 2 / span 6;
    padding: 2rem 0;
  }

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`

const P = styled.p`
  margin-bottom: 1rem;
  line-height: 1.5rem;
`
const H2 = styled.h2`
  padding-top: 1rem;
  padding-bottom: 2rem;
`
const H3 = styled.h3`
  padding-top: 0.7rem;
  padding-bottom: 0.8rem;
`
const H4 = styled.h4`
  padding-top: 0.3rem;
  padding-bottom: 0.2rem;
`
const UL = styled.ul`
  margin-bottom: 1rem;
`
const LI = styled.li`
  margin-left: 2rem;
  margin-bottom: .5rem;
`
const A = styled.a`
  color: ${props => props.theme.post.link.color};
  text-decoration: none;
  &:visited {
    color: ${props => props.theme.post.link.visited};
  }
  &:hover {
    color: ${props => props.theme.post.link.hover};
  }
  transition: color 0.5s ease-in-out;
`

export const pageQuery = graphql`
    query BlogPostQuery($id: String!) {
        mdx(id: {eq: $id}) {
            body
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
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
                            quality: 100
                        )
                    }
                }
            }
        }
    }
`

