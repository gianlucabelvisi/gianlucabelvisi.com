import React, {useEffect} from 'react';
import styled from "styled-components"
import Social from "./Social";
import Aos from "aos";

const Footer = () => {

    useEffect(() => {
        Aos.init({})
    }, [])

    return (
        <Wrapper>

            <SocialWrapper data-aos="fade-up" data-aos-delay="90" data-aos-duration="2000">
                <Social/>
            </SocialWrapper>

            {/*<LinksWrapper>*/}
            {/*    <Desc>*/}
            {/*        <h1>Explore</h1>*/}
            {/*        <p>Something something</p>*/}
            {/*    </Desc>*/}
            {/*    <LinkItems>*/}
            {/*        <LinkTitle>Contact Us</LinkTitle>*/}
            {/*        <FooterLink to="/about">About</FooterLink>*/}
            {/*        <FooterLink to="/destinations">Destinations</FooterLink>*/}
            {/*        <FooterLink to="/sponsors">Sponsors</FooterLink>*/}
            {/*    </LinkItems>*/}
            {/*</LinksWrapper>*/}
            {/*<LinksWrapper>*/}
            {/*    <LinkItems>*/}
            {/*        <LinkTitle>Contact Us</LinkTitle>*/}
            {/*        <FooterLink to="/about">Media</FooterLink>*/}
            {/*        <FooterLink to="/destinations">Press</FooterLink>*/}
            {/*        <FooterLink to="/sponsors">Stuff</FooterLink>*/}
            {/*    </LinkItems>*/}

            {/*</LinksWrapper>*/}
        </Wrapper>
    );
};

export default Footer;

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: auto auto auto;
  gap: 0 2rem;
  background-color: ${props => props.theme.bgColor};
  @media screen and (max-width: 768px) {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
  }
`
const SocialWrapper = styled.div`
  grid-column: 3 / span 10;
  grid-row: 2 / 3;

  @media screen and (max-width: 768px) {
    grid-column: 2 / span 5;
  }

  @media screen and (max-width: 500px) {
    grid-column: 2 / span 4;
  }
`


// const Desc = styled.div`
//   padding: 0 2rem;
//
//   h1 {
//     margin-bottom: 3rem;
//     color: #f26a2e;
//   }
//
//   @media screen and (max-width: 400px) {
//     padding: 1rem;
//   }
// `
// const LinksWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   @media screen and (max-width: 820px) {
//     grid-template-columns: 1fr;
//   }
// `
// const LinkItems = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   padding: 1rem 2rem;
//   @media screen and (max-width: 400px) {
//     padding: 1rem;
//   }
// `
// const LinkTitle = styled.h2`
//   font-size: 14px;
//   margin-bottom: 16px;
// `
// const FooterLink = styled(Link)`
//   text-decoration: none;
//   margin-bottom: 0.5rem;
//   font-size: 14px;
//   color: #3d3d4e;
//   &:hover {
//     color: #f26a2e;
//     transition: 0.3s ease-out;
//   }
// `

