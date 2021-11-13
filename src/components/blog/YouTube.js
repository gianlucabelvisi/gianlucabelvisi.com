import React from 'react';
import styled from "styled-components";

const YouTube = ({source}) => {
    return (
        <Iframe src={"https://www.youtube.com/embed/" + source}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
        </Iframe>
    );
};


const Iframe = styled.iframe`
  width: 560px;
  height: 315px;
  margin-bottom: 1rem;
  @media screen and (max-width: 560px) {
    width: 375px;
    height: auto;
  }
`

export default YouTube;