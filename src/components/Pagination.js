import React, {useEffect} from 'react';
import styled from "styled-components"
import {Link} from "gatsby"
import Aos from "aos";


const Pagination = ({isFirst, isLast, prevPage, nextPage}) => {

    useEffect(() => {
        Aos.init({})
    }, [])

    return (
        <Wrapper isFirst={isFirst} isLast={isLast}>

            <Element to={prevPage} data-aos="fade-right" data-aos-delay="90" data-aos-duration="1000">
                Previous Page
            </Element>

            <Element to={nextPage} data-aos="fade-left" data-aos-delay="90" data-aos-duration="1000">
                Next Page
            </Element>

        </Wrapper>
    );
};

export default Pagination;

const Wrapper = styled.div`
  grid-column: 2 / span 12;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  a:nth-child(1) {
    color: ${props => props.isFirst ? "gray" : "black"};
    pointer-events: ${props => props.isFirst ? "none" : "auto"};
    cursor: ${props => props.isFirst ? "default" : "pointer"};
  }

  a:nth-child(2) {
    color: ${props => props.isLast ? "gray" : "black"};
    pointer-events: ${props => props.isLast ? "none" : "auto"};
    cursor: ${props => props.isLast ? "default" : "pointer"};
  }

  @media screen and (max-width: 768px) {
    grid-column: 2 / span 6;
  }
`

const Element = styled(props => <Link {...props} />)`
  font-size: 1rem;
  line-height: 1rem;
  text-decoration: none;
  font-weight: 400;
  margin: 0 2rem;

  &:hover, &:focus {
    text-decoration: underline;
  }
`

