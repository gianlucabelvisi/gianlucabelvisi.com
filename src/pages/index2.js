import React, {useEffect} from "react"

import Seo from "../components/Seo"
import Layout from "../components/Layout";
import {graphql} from "gatsby";
import Aos from "aos";
import FeaturedPost from "../components/FeaturedPost";
import NetflixSlider from "../components/NetflixSlider";
import styled from "styled-components"
import {containsHashtag} from "../components/blog/Hashtags";

const Index2 = ({data}) => {

    useEffect(() => {
        Aos.init({})
    }, [])

    const posts       = data.allMdx.edges
    const featured    = posts[0]
    const latest      = posts.slice(1, 14)
    const caterina    = [...posts].filter(post => containsHashtag(post, 'caterina sforza')).reverse()
    const randomized  = [...posts].sort(() => Math.random() - 0.5).slice(0, 15)
    const firstLast   = [...posts].reverse()

    return (
        <Layout isDark={true}>
            <Seo title="Netflish home 🦄"/>
            <FeaturedPost post={featured}/>
            <Sliders>
                <NetflixSlider
                    title="Latest Posts"
                    subtitle="The more recent they are, the better written"
                    posts={latest}
                />
                <NetflixSlider
                    title="Caterina Sforza"
                    subtitle="This pentalogy is quite possibly the piece of writing I'm the most proud of"
                    posts={caterina}
                />
                <NetflixSlider
                    title="Random Posts"
                    subtitle="If you are a chaos embracer"
                    posts={randomized}
                />
                <NetflixSlider
                    title="Chronological Order"
                    subtitle="Useful for the stalker type"
                    posts={firstLast}
                />
            </Sliders>
        </Layout>

    )
}

export default Index2

const Sliders = styled.div`

    margin-bottom: 2rem;
`


export const pageQuery = graphql`
query BlogCardsQuery2 {
  allMdx(
        sort: {fields: frontmatter___date, order: DESC}, 
        filter: {isFuture: {eq: false}, isHidden: {eq: false}},
        skip: 0 
    ) {
    edges {
      node {
        frontmatter {
          path
          title
          subTitle
          date(formatString: "MMMM DD, YYYY")
          author  
          onHover
          hashtags  
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



