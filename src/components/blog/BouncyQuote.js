import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

export const BouncyQuote = ({ children, author }) => {
    const animation = useSpring({
        from: { transform: 'scale(0)' },
        to: { transform: 'scale(1)' },
        config: { tension: 180, friction: 12 },
    });

    return (
        <QuoteContainer style={animation}>
            <QuoteText>&ldquo;{children}&rdquo;</QuoteText>
            <AuthorText>- {author}</AuthorText>
        </QuoteContainer>
    );
};

const QuoteContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  max-width: 600px;
  margin: auto;
`;

const QuoteText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  font-style: italic;
  margin-bottom: 1rem;
`;

const AuthorText = styled.p`
  font-size: 1.2rem;
  text-align: right;
  font-weight: bold;
`;