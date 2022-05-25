import React from 'react';
import styled from "styled-components"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import {NetflixButton} from "./NetflixButton";
import {BsFillPlayFill} from "react-icons/bs";

const NetflixCard = ({cardImage, title, subTitle, path, date, onHover, index}) => {


    return (
        <Card index={index}>
            <Image image={getImage(cardImage)} alt="Card Image"/>

            <Header>
                <Date>{date}</Date>
            </Header>

            <Content>
                <Title>{title}</Title>
                <Footer>
                    <SubTitle>{subTitle}</SubTitle>
                    <NetflixButton to={path}/>
                </Footer>
            </Content>
        </Card>
    );
};

export default NetflixCard;

const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  background-size: inherit;
`
const Header = styled.div`
  color: ${props => props.theme.white};
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsl(0 0% 0% / .2);
  transition: transform 500ms ease;
  transition-delay: 300ms;
  transform: translateY(-100%);
`
const Date = styled.h4`
  padding-left: 1em;
  padding-right: 1em;
`
const Content = styled.div`
  --title-height: 3rem;
  --footer-height: 4rem;
  --total-height: calc(var(--title-height) + var(--footer-height));
  
  color: ${props => props.theme.white};
  padding-bottom: 0;
  margin-bottom: 0;
  padding-left: .5rem;
  padding-right: .5rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  bottom: calc(-1 * var(--total-height));
  transition: all 500ms ease;
  transition-delay: 300ms;
  background: linear-gradient(hsl(0 0% 0% / 0),
  hsl(0 0% 0% / .2) 5%,
  hsl(0 0% 0% / .4) 10%,
  hsl(0 0% 0% / .5) 30%,
  hsl(0 0% 0% / .6) 50%
  );
`
const Title = styled.h5`
  padding-top: .7rem;
  padding-bottom: .3rem;
  text-transform: uppercase;
  position: relative;
  width: fit-content;
  height: var(--title-height);
`
const Footer = styled.div`
  color: ${props => props.theme.white};
  width: 100%;
  height: var(--footer-height);
  display: flex;
  align-items: center;
  margin-left: 0;
`
const SubTitle = styled.div`
  font-size: .6rem;
`
const Card = styled.div`
  position: relative;
  line-height: 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 10;
  &:hover,
  &:focus-within {
    ${Header} {
      transform: translateY(0);
    }
  }
  &:hover {
    ${Content} {
      transform: translateY(calc(-1 * var(--total-height)));
    }
  }
`

