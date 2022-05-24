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
  padding-bottom: 4rem;
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
    grid-column: 2 / span 6;
  }

  //@media screen and (max-width: 500px) {
  //  grid-column: 2 / span 4;
  //}
`
