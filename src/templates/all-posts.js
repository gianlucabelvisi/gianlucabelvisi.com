import React from "react"
import Link from "gatsby-link"
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import {graphql} from 'gatsby'
import {MDXRenderer} from "gatsby-plugin-mdx";
import styled from "styled-components"
import ContentContainer from "../components/ContentContainer";


const AllPosts = ({data}) => {

    // const featureImage = data.mdx.frontmatter.childImageSharp.fixed

    return (
        <Layout>
            <Seo title={data.mdx.frontmatter.title}/>
            {/*<ContentContainer>*/}
                <Link to="/blog">Go Back</Link>
                <hr/>
                <h1>Hello World</h1>
                <h1>{data.mdx.frontmatter.title}</h1>
                <h4>Posted by {data.mdx.frontmatter.author} on {data.mdx.frontmatter.date}</h4>
                {/*<div dangerouslySetInnerHTML={{__html: post.html}}/>*/}
            {/*</ContentContainer>*/}
        </Layout>
    )

}

export default AllPosts


export const pageQuery = graphql`
    query AllPostsQuery($id: String!) {
        mdx(id: {eq: $id}) {
            body
            frontmatter {
                date
                author
                subTitle
                title
                cardImage {
                    childImageSharp {
                      fixed {
                        ...GatsbyImageSharpFixed
                      }
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

