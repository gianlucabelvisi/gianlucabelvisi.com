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
    const caterina    = posts.filter(post => containsHashtag(post, 'caterina sforza'))
    const randomized  = [...posts].sort(() => Math.random() - 0.5)
    const firstLast   = [...posts].reverse()

    return (
        <Layout isDark={true}>
            <Seo title="Netflish home 🦄"/>
            <FeaturedPost content={featured}/>
            <Sliders>
                <NetflixSlider title="Latest" posts={latest}/>
                <NetflixSlider title="Caterina Sforza" posts={caterina}/>
                <NetflixSlider title="Random" posts={randomized}/>
                <NetflixSlider title="First to last" posts={firstLast}/>
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



