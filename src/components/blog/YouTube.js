import React from 'react';
import styled from "styled-components";

const YouTube = ({source}) => {
    return (
        <Wrapper>
            <Iframe src={"https://www.youtube.com/embed/" + source}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
            </Iframe>

        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  overflow: hidden;
  height: 0;
  max-width: 100%;
  margin-bottom: 1rem;
`
const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default YouTube;