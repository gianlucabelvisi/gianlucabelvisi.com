import React from 'react';
import styled from "styled-components";

const FilmCard = ({country, director, seenOn, starring, emoji}) => {
    return (
        <Wrapper>
            <Content>
                <Country>
                    <Header>
                        Country
                    </Header>
                    <Footer>
                        {country}
                    </Footer>
                </Country>
                <Director>
                    <Header>
                        Director
                    </Header>
                    <Footer>
                        {director}
                    </Footer>
                </Director>
                <Starring>
                    <Header>
                        Starring
                    </Header>
                    <Footer>
                        {starring}
                    </Footer>
                </Starring>
                <SeenOn>
                    <Header>
                        Seen on
                    </Header>
                    <Footer>
                        {seenOn}
                    </Footer>
                </SeenOn>
                <Emoji>
                    <Header>
                        Emoji
                    </Header>
                    <Footer>
                        {emoji}
                    </Footer>
                </Emoji>

            </Content>

        </Wrapper>
    );
};

export default FilmCard;

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  border-left: ${props => props.theme.accentColor} 3px solid;
  padding: 1rem;
  margin-top: -1rem;
  margin-bottom: 2rem;
`
const Content = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`
const Country = styled.div`
  display: flex;
  flex-direction: column;
`
const Director = styled.div`
`
const SeenOn = styled.div`
`
const Starring = styled.div`
`
const Emoji = styled.div`
`
const Header = styled.div`
  padding-bottom: .7rem;
  color: ${props => props.theme.accentColor};
  text-transform: uppercase;
  font-weight: bold;
  
`
const Footer = styled.div`
`

