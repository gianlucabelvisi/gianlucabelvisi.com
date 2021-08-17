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
  height: 100%;
  padding: 5rem calc((100vw - 1000px) / 2);
`
