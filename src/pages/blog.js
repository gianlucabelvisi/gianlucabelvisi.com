import React from "react"
import {Link} from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { graphql } from 'gatsby'

const BlogPage = ({data}) => (
    <Layout>
        <Seo title="Blog"/>
        <h1>Latest Posts</h1>
        {
            data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id}>
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
    </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                    id
                    frontmatter {
                        author
                        date
                        path
                        title
                    }
                }
            }
        }
    }
`

export default BlogPage
