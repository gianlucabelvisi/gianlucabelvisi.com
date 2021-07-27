import React from 'react';
import styled from "styled-components"
import {Link} from "gatsby"


const Pagination = ({isFirst, isLast, prevPage, nextPage}) => {
    return (
        <Wrapper isFirst={isFirst} isLast={isLast}>
            <Element to={prevPage}>Previous Page</Element>
            <Element to={nextPage}>Next Page</Element>
        </Wrapper>
    );
};

export default Pagination;

const Wrapper = styled.div`
  grid-column: 2 / span 12;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  a:first-child {
    color: ${props => (props.isFirst === "true") ? "gray" : "black"};
    pointer-events: ${props => (props.isFirst === "true") ? "none" : "auto"};
    cursor: ${props => (props.isFirst === "true")  ? "default" : "pointer"};
  }

  a:nth-child(2) {
    color: ${props => (props.isLast === "true")  ? "gray" : "black"};
    pointer-events: ${props => (props.isLast === "true")  ? "none" : "auto"};
    cursor: ${props => (props.isLast === "true")  ? "default" : "pointer"};
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

