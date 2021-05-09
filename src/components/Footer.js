import React from 'react';
import styled from "styled-components"
import Link from "gatsby-link";

const Footer = () => {
    return (
        <Container>
            <LinksWrapper>
                <Desc>
                    <h1>Explore</h1>
                    <p>Something something</p>
                </Desc>
                <LinkItems>
                    <LinkTitle>Contact Us</LinkTitle>
                    <FooterLink to="/about">About</FooterLink>
                    <FooterLink to="/destinations">Destinations</FooterLink>
                    <FooterLink to="/sponsors">Sponsors</FooterLink>
                </LinkItems>
            </LinksWrapper>
            <LinksWrapper>
                <LinkItems>
                    <LinkTitle>Contact Us</LinkTitle>
                    <FooterLink to="/about">Media</FooterLink>
                    <FooterLink to="/destinations">Press</FooterLink>
                    <FooterLink to="/sponsors">Stuff</FooterLink>
                </LinkItems>

            </LinksWrapper>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`
const Desc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;
  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const LinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`
const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;
  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`

