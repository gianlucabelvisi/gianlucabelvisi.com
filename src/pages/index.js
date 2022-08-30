import React, {useEffect} from "react"

import Seo from "../components/Seo"
import Layout from "../components/Layout";
import {graphql} from "gatsby";
import Aos from "aos";
import FeaturedPost from "../components/FeaturedPost";
import NetflixSlider from "../components/NetflixSlider";
import styled from "styled-components"
import {containsHashtags} from "../components/blog/Hashtags";

const Index = ({data}) => {

    useEffect(() => {
        Aos.init({})
    }, [])

    const posts = data.allMdx.edges
    const featured = posts[0]
    const latest = posts.slice(1, 14)
    const caterina = [...posts].filter(post => containsHashtags(post, 'caterina sforza')).reverse()
    const food = [...posts].filter(post => containsHashtags(post, 'food', 'coffee', 'diet')).reverse()
    const mindfulness = [...posts].filter(post => containsHashtags(post, 'mindfulness')).sort(() => Math.random() - 0.5).slice(0, 15)
    const randomized = [...posts].sort(() => Math.random() - 0.5).slice(0, 15)
    const chrono = [...posts].reverse()

    return (
        <Layout isDark={true}>
            <Seo title="Gianluca Belvisi 🦄" isDark={true}/>
            <FeaturedPost post={featured}/>
            <Sliders>
                <Fader/>
                <NetflixSlider
                    title="Latest posts"
                    subtitle="The more recent they are, the better written"
                    posts={latest}
                />
                <NetflixSlider
                    title="On Caterina Sforza"
                    subtitle="This pentalogy is quite possibly the piece of writing I'm the most proud of"
                    posts={caterina}
                />
                <NetflixSlider
                    title="Because you like food"
                    subtitle="We all do"
                    posts={food}
                />
                <NetflixSlider
                    title="You seem to be into mindfulness"
                    subtitle="If you are one with Chaos"
                    posts={mindfulness}
                />
                <NetflixSlider
                    title="Random posts"
                    subtitle="If you are one with Chaos"
                    posts={randomized}
                />
                <NetflixSlider
                    title="Chronological Order"
                    subtitle="For the stalker type"
                    posts={chrono}
                />
            </Sliders>
        </Layout>

    )
}

export default Index

const Sliders = styled.div`
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
`
const Fader = styled.div`
  pointer-events: none;
  position: absolute;
  top: -4rem;
  width: 100%;
  height: 5rem;
  background: linear-gradient(180deg,
  rgba(0, 0, 0, 0) 0%,
  rgba(0, 0, 0, .2) 20%,
  rgba(0, 0, 0, .4) 40%,
  rgb(19, 19, 19) 100%
  );
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



