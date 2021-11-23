import React, {useEffect} from 'react';
import styled from "styled-components";
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import {graphql, useStaticQuery} from "gatsby";
import {GiDeathSkull, GiMedicalThermometer} from "react-icons/gi";
import Aos from "aos";
import ContentContainer from "./ContentContainer";


const WhoAmI = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
          allFile(filter: {name: {regex: "/gianluca*/"}}) {
            edges {
              node {
                childImageSharp {
                  gatsbyImageData(
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
    `)
    useEffect(() => {
        Aos.init({})
    }, [])
    return (
        <ContentContainer>
            <Description data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
                Who am I by the way
            </Description>
            <ContentWrapper>

                <ColumnOne>
                    <TopLine data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                        Testimonials
                    </TopLine>
                    <Testimonial data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                        <GiMedicalThermometer
                            css={`
                              color: #d20cf5;
                              font-size: 3rem;
                              margin-bottom: 1rem;
                            `}
                        />
                        <h3>Martina Fagiolini</h3>
                        <p>"Te non stai bene. (You are unwell.)"
                        </p>
                    </Testimonial>
                    <Testimonial data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                        <GiDeathSkull
                            css={`
                              color: #ec092e;
                              font-size: 3rem;
                              margin-bottom: 1rem;
                            `}
                        />
                        <h3>Valentina Paggiarin</h3>
                        <p>"Muori. (Die.)"</p>
                    </Testimonial>
                </ColumnOne>

                <ColumnTwo data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">
                    {data.allFile.edges.map((edge, key) => (
                            <Image key={key} image={getImage(edge.node)} alt="who am I"/>
                        )
                    )}
                </ColumnTwo>
            </ContentWrapper>
        </ContentContainer>
    );
};

export default WhoAmI;

const TopLine = styled.p`
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  padding-top: 2rem;
`
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 2rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
`
const ContentWrapper = styled.div`
  display: grid;
  padding-left: 2rem;
  grid-template-columns: 1fr 2fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
`
const Testimonial = styled.div`
  padding-top: 5rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns:  1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Image = styled(GatsbyImage)`
  border-radius: 10px;
  height: 100%;
`