import React from 'react';
import styled from "styled-components";

const EmailMessage = ({ from, to, subject, children }) => {
  return (
    <Container>
      <Header>
        <HeaderRow>
          <Label>From:</Label>
          <Value>{from}</Value>
        </HeaderRow>
        <HeaderRow>
          <Label>To:</Label>
          <Value>{to}</Value>
        </HeaderRow>
        {subject && (
          <HeaderRow>
            <Label>Subject:</Label>
            <Value>{subject}</Value>
          </HeaderRow>
        )}
      </Header>
      <Body>{children}</Body>
    </Container>
  );
};

export default EmailMessage;

const Container = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  background-color: #fff;
  margin: 1.5rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  padding-left: 4px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #e87c48;
  }
`;

const Header = styled.div`
  background: linear-gradient(135deg, rgba(232, 124, 72, 0.15) 0%, rgba(232, 124, 72, 0.08) 100%);
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #e5e5e5;
  font-size: 0.9rem;
`;

const HeaderRow = styled.div`
  display: flex;
  margin-bottom: 0.35rem;
  line-height: 1.4;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.span`
  font-weight: 600;
  color: #bd643a;
  min-width: 70px;
  flex-shrink: 0;
`;

const Value = styled.span`
  color: #333;
`;

const Body = styled.div`
  padding: 1.25rem 1.5rem;
  line-height: 1.7;
  background-color: #fff;
  font-style: italic;
  color: #333;

  p {
    margin: 0 0 1rem 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;
