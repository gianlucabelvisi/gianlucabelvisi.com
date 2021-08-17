import React from "react"
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import {graphql} from 'gatsby'
import ContentContainer from "../components/ContentContainer";
import Pagination from "../components/Pagination";
import styled from "styled-components";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import LinkButton from "../components/Button";


const AllPosts = ({pageContext, data}) => {

    const {currentPage, numPages} = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = '/blog-page' + (currentPage - 1)
    const nextPage = '/blog-page' + (currentPage + 1)

    const posts = data.allMdx.edges


    return (
        <Layout>
            <Seo title="Blog"/>
            <ContentContainer>
                <PageTitle>Blog Posts</PageTitle>
                {
                    posts.map((post, index) => {
                        const fm = post.node.frontmatter

                        return (
                            <Post key={fm.path}>
                                <Image image={getImage(fm.featureImage)} alt="Feature image"/>

                                <Date>{fm.date}</Date>

                                <Content>
                                    <Title>{fm.title}</Title>
                                    <SubTitle>{fm.subTitle}</SubTitle>
                                    <ReadButton to={fm.path} onHover={fm.onHover}>Read</ReadButton>
                                </Content>

                            </Post>
                        )

                    })
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

const PageTitle = styled.h1`
  margin-left: 1rem;   
  margin-bottom: 1rem;
`
const Post = styled.div`
  margin-bottom: 1rem;
  height: 15rem;
  border-radius: 10px;
  margin-left: 1rem;
  margin-right: 1rem;
  position: relative;
  color: ${props => props.theme.textColor};
`

const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  background-size: cover;
  position: relative;
  border-radius: 10px;
`

const Date = styled.h2`
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 2rem;
  padding-left: 1rem;
  background-color: hsl(0 0% 0% / .2);
  border-top-right-radius: 10px;
`

const Content = styled.div`
  --padding: 1rem;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: var(--padding);
  transition: all 500ms ease;
  background: linear-gradient(hsl(0 0% 0% / 0),
  hsl(0 0% 0% / .2) 5%,
  hsl(0 0% 0% / .4) 10%);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

const Title = styled.h2`
  text-transform: uppercase;
  position: relative;
  width: fit-content;

  @media screen and (max-width: 1200px) {
    font-size: 1.2em;
  }

  &:after {
    content: '';
    position: absolute;
    height: 3px;
    width: calc(100% + var(--padding));
    left: calc(var(--padding) * -1);
    bottom: 0;
    background: ${props => props.theme.card.accentColor};
    transform-origin: left;
    transition: transform 500ms ease;
  }
`

const SubTitle = styled.div`
  margin-bottom: 1rem;
  max-width: 30rem;
  padding-block: .6rem;
`

const ReadButton = styled(LinkButton)`
`

export const pageQuery = graphql`
query AllPostsQuery($skip: Int!, $limit: Int!) {
  allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
    edges {
      node {
        frontmatter {
          path
          title
          subTitle
          date(formatString: "MMMM DD, YYYY")
          author  
          onHover  
          featureImage {
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

//
// const Wrapper = styled.div`
//   height: 100%;
//   display: grid;
//   grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
//   grid-template-rows: 7.8rem 20rem 4rem auto;
//   gap: 0 2rem;
//
//   @media screen and (max-width: 768px) {
//     grid-template-columns: 2rem repeat(6, 1fr) 2rem;
//     grid-gap: 0 1rem;
//   }
//
//   @media screen and (max-width: 500px) {
//     grid-template-columns: 1rem repeat(6, 1fr) 1rem;
//   }
// `
//
