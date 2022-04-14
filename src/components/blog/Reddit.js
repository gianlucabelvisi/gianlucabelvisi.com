import React from 'react';
import styled from "styled-components";

const Reddit = ({source, label = "", title = ""}) => {
    return (
        <Wrapper>
            <Header>
                <iframe src={source}
                        title={title}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%"
                        }}
                        allowFullScreen
                />
            </Header>
            {label.length > 0 &&
                <Footer>
                    <em>
                        {label}
                    </em>
                </Footer>
            }
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-bottom: 2rem;
`
const Header = styled.div`
  padding-bottom: 75%;
  position: relative;
  margin-top: 2rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    padding-top: 90%;
  }
  @media screen and (max-width: 600px) {
    padding-top: 100%;
  }
  @media screen and (max-width: 500px) {
    padding-top: 120%;
  }
`
const Footer = styled.div`
  text-align: center;
`

export default Reddit;