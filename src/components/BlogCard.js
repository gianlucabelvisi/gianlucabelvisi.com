import React from 'react';
import styled from "styled-components"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import LinkButton from "./Button";

const BlogCard = ({cardImage, title, subTitle, path, author, date}) => {


    return (
        <Wrapper>
            <Image image={getImage(cardImage)} alt="SDAS"/>

            <Content>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
                <LinkButton to={path} onHover="Click!">Read</LinkButton>
            </Content>
        </Wrapper>
    );
};

export default BlogCard;

const Wrapper = styled.div`
  line-height: 2;
  width: 100%;
  height: auto;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  transition: 0.2s ease;
`

const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  background-size: cover;
  //padding: 8rem 0 0;
  //filter: brightness(70%);
  //transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  //&:hover {
  //  filter: brightness(100%);
  //}

`

const Content = styled.div`
  --padding: 1rem;
  position: absolute;
  z-index: 20;
  bottom: 0;
  padding: var(--padding);
  background: linear-gradient(
          hsl(0 0% 0% / 0),
          hsl(0 0% 0% / .3) 20%,
          hsl(0 0% 0% / 1)
  );
`

const Title = styled.h2`
  text-transform: uppercase;
  position: relative;
  width: fit-content;
  
  &:after {
    content: '';
    position: absolute;
    height: 3px;
    width: calc(100% + var(--padding));
    left: calc(var(--padding)*-1);
    bottom: 0;
    background: ${props => props.theme.card.accentColor};
  }
`

const SubTitle = styled.div`

`

