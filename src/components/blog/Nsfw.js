import React, {useState} from 'react';
import styled from "styled-components";
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";


const Nsfw = ({children, image}) => {

    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    const data = useStaticQuery(graphql`
        query NsfwQuery {
          allFile(filter: {name: {regex: "/themarkings*/"}}) {
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

    return (
        <Wrapper>
            <Cover onClick={e => toggleVisibility()} isVisible={isVisible}>
                <Warning>
                    <Title>
                        NSFW!
                    </Title>
                    <Subtitle>
                        Click at your own peril
                    </Subtitle>
                </Warning>
            </Cover>

            <Content>
                {data.allFile.edges.map((edge, key) => (
                        <Image key={key} image={getImage(edge.node)} alt="who am I"/>
                    )
                )}
                {children}
            </Content>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`
const Cover = styled.label`
  position: absolute;
  cursor: pointer;
  background-color: ${props => props.theme.accentColor};
  opacity: ${({isVisible}) => (isVisible ? "0" : "1")};
  pointer-events: ${({isVisible}) => (isVisible ? "none" : "")};
  height: 100%;
  width: 100%;
  transition: opacity .5s ease-in-out;
  border-radius: 20px;
`
const Warning = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
`
const Content = styled.div`
  padding: 1rem;
`
const Title = styled.h3`
  color: ${props => props.theme.bgColor};
  text-align: center;
  font-size: 4rem;
  margin-bottom: 2rem;
`
const Subtitle = styled.div`
  color: ${props => props.theme.bgColor};
  text-align: center;
`
const Image = styled(GatsbyImage)`
  border-radius: 10px;
  height: 100%;
  position: relative;
  z-index: -10;
`
export default Nsfw;