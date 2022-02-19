import React from "react";
import styled from "styled-components";

require('typeface-irish-grover')

const Quote = ({title, from, children}) => {

    const quoteTitle = title ?? 'Quote'

    return (
        <QuoteWrapper>
            <Title>{quoteTitle}</Title>
            <Content>
                <Text>{children}</Text>
                <From>{from}</From>
            </Content>
            <Title>/{quoteTitle}</Title>
        </QuoteWrapper>
    );
};

export default Quote;

const QuoteWrapper = styled.div`
  position: relative;
  margin-block: 1.5rem;
  padding-block: 0.4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: ${props => props.theme.accentColor};
  width: 100%;
  display: block;
  border-radius: 30px;
  color: white;
`
const Title = styled.div`
  font-family: "Irish Grover", serif;
  font-size: 1.5rem;
  text-transform: uppercase;
`
const Content = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 4rem;
  padding-right: 1rem;
  @media screen and (max-width: 500px) {
    padding-left: 2rem;
  }
`
const Text = styled.h1`
  font-family: "Irish Grover", serif;
`
const From = styled.div`
  margin-top: 1rem;
  font-family: "Irish Grover", serif;
  font-size: 1.5rem;
  width: 100%;
  text-align: right;
`
