import React from 'react';
import styled from "styled-components";

const ContentContainer = ({children}) => {
    return (
        <Content>
            {children}
        </Content>
    );
};

export default ContentContainer;

const Content = styled.div`
  margin-top: 1rem;
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`
