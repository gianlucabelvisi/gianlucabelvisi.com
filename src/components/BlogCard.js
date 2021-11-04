import React from 'react';
import styled from "styled-components"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import LinkButton from "./Button";

const BlogCard = ({cardImage, title, subTitle, path, date, onHover, index}) => {


    return (
        <Card index={index}>
            <Image image={getImage(cardImage)} alt="Card Image"/>

            <Header>
                <Date>{date}</Date>
            </Header>

            <Content>
                <Title smaller={title.length > 25}>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
                <ReadButton to={path} onHover={onHover}>Read</ReadButton>
            </Content>
        </Card>
    );
};

export default BlogCard;

const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  background-size: cover;
`

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsl(0 0% 0% / .2);
  border-radius: 4px;
  transition: transform 500ms ease;
  transform: translateY(-100%);
`

const Date = styled.h2`
  padding-left: 1em;
  padding-right: 1em;
`

const Title = styled.h2`
  text-transform: uppercase;
  position: relative;
  width: fit-content;
  font-size: ${({smaller}) => (smaller? "0.9rem" : "")};

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
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 500ms ease;
  }
`

const SubTitle = styled.div`
  margin-bottom: 1rem;
`

const ReadButton = styled(LinkButton)`
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

  @media (hover) {
    & {
      transform: translateY(70%);

      *:not(${Title}) {
        opacity: 0;
        transition: all 700ms ease;
      }
    }
  }
`

const Card = styled.div`
  position: relative;
  line-height: 2;
  width: 100%;
  height: auto;
  border-radius: 20px;
  overflow: hidden;
  transition: all 500ms ease;
  z-index: 10;

  @media screen and (max-width: 1100px) {
      display: ${({index}) => (index > 1 ? "none" : "block")};
  }
  
  &:hover,
  &:focus-within {
    transform: scale(1.05);

    ${Image} {
      transform: translateY(0);
      transition: all 0ms;
    }

    ${Title}:after {
      transform: scaleX(1);
    }

    ${Content} {
      * {
        opacity: 1;
      }

      transition-delay: 500ms;
      transform: translateY(0);
      background: linear-gradient(hsl(0 0% 0% / 0),
      hsl(0 0% 0% / .3) 20%,
      hsl(0 0% 0% / 1));
    }

    ${Header} {
      transform: translateY(0);
    }
  }
`
