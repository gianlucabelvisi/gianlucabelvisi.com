import React from 'react';
import styled from "styled-components";

const TvCard = ({seenOn, seasons, ongoing, emoji}) => {
    return (
        <Wrapper>
            <Content>

                <SeenOn>
                    <Header>
                        Seen on
                    </Header>
                    <Footer>
                        {seenOn}
                    </Footer>
                </SeenOn>

                <Seasons>
                    <Header>
                        Seasons
                    </Header>
                    <Footer>
                        {seasons}
                    </Footer>
                </Seasons>

                <Ongoing>
                    <Header>
                        Ongoing
                    </Header>
                    <Footer>
                        {ongoing}
                    </Footer>
                </Ongoing>

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

export default TvCard;

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
const Seasons = styled.div`
  display: flex;
  flex-direction: column;
`
const Ongoing = styled.div`
`
const SeenOn = styled.div`
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

