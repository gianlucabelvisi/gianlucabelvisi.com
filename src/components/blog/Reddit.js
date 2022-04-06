import React from 'react';
import styled from "styled-components";

const Reddit = ({source}) => {
    return (
        <Wrapper>
            <iframe src={source}
                    id="reddit-embed"
                    title="Reddit"
                    scrolling="no"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    style={{
                        border: "none",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        position: "absolute"
                    }}
            >
            </iframe>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  border: none;
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  overflow: hidden;
  height: 0;
  max-width: 100%;
  margin-bottom: 1rem;
`
const Iframe = styled.iframe
    .attrs({
        id: "reddit-embed",
        sandbox: "allow-scripts allow-same-origin allow-popups"
    })
    `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `

export default Reddit;