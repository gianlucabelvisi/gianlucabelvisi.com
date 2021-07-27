import React from "react"
import Link from "gatsby-link"
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import {graphql} from 'gatsby'
import {MDXRenderer} from "gatsby-plugin-mdx";
import styled from "styled-components"
import ContentContainer from "../components/ContentContainer";
import Pagination from "../components/Pagination";


const AllPosts = ({pageContext, data}) => {

    const {currentPage, numPages} = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = '/blog-page' + (currentPage - 1)
    const nextPage = '/blog-page' + (currentPage + 1)

    const posts = data.allMdx.edges

    // const featureImage = data.mdx.frontmatter.childImageSharp.fixed

    return (
        <Layout>
            <Seo title="Blog"/>
            <ContentContainer>
                <h1>Latest Posts</h1>
                {
                    posts.map(post => (
                        <div key={post.node.frontmatter.path}>
                            <h3>{post.node.frontmatter.title}</h3>
                            <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                            <br/>
                            <br/>
                            <Link to={post.node.frontmatter.path}>Read More</Link>
                            <br/>
                            <br/>
                            <hr/>
                        </div>
                    ))
                }
            </ContentContainer>
            <Pagination
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
            />

        </Layout>
    )

}

export default AllPosts


export const pageQuery = graphql`
query AllPostsQuery($skip: Int!, $limit: Int!) {
  allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
    edges {
      node {
        frontmatter {
          path
          title
          subTitle
          date
          author
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

