import React, {useEffect} from "react"
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import {graphql} from 'gatsby'
import styled from "styled-components"
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {Disqus} from 'gatsby-plugin-disqus';
import Link from "gatsby-link";
import SocialShare from "../components/SocialShare";
import Aos from "aos";
import Mdx from "../components/blog/Mdx";
import ViewCounter from "../components/ViewCounter";
import Reactions from "../components/Reactions";
import MailchimpFormContainer from "../components/MailChimp";
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im";

const BlogTemplate = ({data}) => {

    useEffect(() => {
        Aos.init({})
    }, [])

    const frontmatter = data.mdx.frontmatter

    return (
        <Layout>
            <Seo title={frontmatter.title}/>
            <Wrapper>

                <PostHeader data-aos="zoom-out-down" data-aos-delay="90" data-aos-duration="1000">
                    <Date>{frontmatter.date}</Date>
                </PostHeader>

                <FeatureImageWrapper data-aos="fade-down" data-aos-delay="90" data-aos-duration="1000">
                    <FeatureImage image={getImage(frontmatter.featureImage)} alt="Feature Image"/>
                </FeatureImageWrapper>

                <Content>

                    <SideBar data-aos="fade-right" data-aos-delay="180" data-aos-duration="1000">
                        <SocialShare
                            path={frontmatter.path}
                        />
                    </SideBar>

                    <Post data-aos="fade-up" data-aos-delay="90" data-aos-duration="1000">
                        <Title>{frontmatter.title}</Title>
                        <SubTitle>
                            <GlyphLeft/> {frontmatter.subTitle} <GlyphRight/>
                        </SubTitle>
                        <Mdx body={data.mdx.body}/>
                    </Post>

                    <PostFooter data-aos="fade-up" data-aos-delay="50" data-aos-duration="400">
                        <Reactions id={frontmatter.path}/>
                        <ViewCounter id={frontmatter.path}/>
                    </PostFooter>

                    <BlogActions data-aos="fade-up" data-aos-delay="50" data-aos-duration="400">
                        <Author>
                            by <strong>{frontmatter.author}</strong>
                        </Author>
                        <MorePosts to={"/blog-page1"}><strong>More Posts</strong></MorePosts>
                    </BlogActions>

                    <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="400">
                        <MailchimpFormContainer />
                    </div>


                    <Comments data-aos="fade-up" data-aos-delay="50" data-aos-duration="400">
                        <Disqus
                            style={{
                                marginTop: "3rem"
                            }}
                            config={{
                                url: 'https://gianlucabelvisi.com/' + frontmatter.path,
                                identifier: frontmatter.path,
                                title: frontmatter.title,
                            }}
                        />
                    </Comments>


                </Content>
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
const GlyphLeft = styled(ImQuotesLeft)`
    color: ${props => props.theme.accentColor};;
`
const GlyphRight = styled(ImQuotesRight)`
    color: ${props => props.theme.accentColor};;
`
const FeatureImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  @media screen and (max-width: 768px) {
    height: 70%;
  }
`
const Title = styled.h1`
  margin-bottom: 2rem;
`
const SubTitle = styled.div`
  margin-bottom: 2rem;
  text-align: left;
  font-size: larger;
  //color: ${props => props.theme.accentColor};
`
const Content = styled.div`
  position: relative;
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
const SideBar = styled.div`
  position: sticky;
  top: 0;
`
const Post = styled.div`
`
const Comments = styled.div`
`
const PostFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media screen and (max-width: 550px) {
    display: block;
    flex-direction: column;
    justify-items: start;
    gap: 0.7rem;
  }
`
const BlogActions = styled.div`
  margin-top: 2rem;
  display: flex;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    gap: 2rem;
  }
`
const Author = styled.div`
  flex-basis: 40%;
  flex-grow: 1;
`
const MorePosts = styled(Link)`
  flex-basis: 20%;
  flex-grow: 1;
  color: ${props => props.theme.post.link.color};
  text-align: end;
  @media screen and (max-width: 550px) {
    text-align: left;
  }
`
export const pageQuery = graphql`
    query BlogPostQuery($id: String!) {
        mdx(id: {eq: $id}) {
            body
            frontmatter {
                path
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

