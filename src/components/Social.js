import React from 'react';
import styled from "styled-components"
import {socialData} from "../data/SocialData";
import Delayed from "./Delayed";

const Social = () => {
    return (
        <Delayed>
            <Container>
                <Invite>Follow me on social media and stuff</Invite>
                <Accordion>
                    {socialData.map((item, key) => (
                        <Tab key={key}>
                            <Label>
                                <Icon>{item.icon}</Icon>
                                <a href={item.link} target="_blank" rel="noreferrer">{item.title}
                                    <HoverIcon css={`background-color: ${item.bgColor}`}>{item.icon}</HoverIcon>
                                </a>
                            </Label>
                            <Content>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                            </Content>
                        </Tab>
                    ))}
                </Accordion>
            </Container>
        </Delayed>
    );
};

export default Social;

const Container = styled.div`
  background-color: ${props => props.theme.social.bgColor};
  border-radius: ${props => props.theme.social.borderRadius};
  width: 100%;

  * {
    margin: 0;
    padding: 0;
    border: 0;
  }
`
const Invite = styled.h1`
  color: var(--font-color-light);
  margin-bottom: 10px;
  text-align: center;
  @media screen and (max-width: 970px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`
const Accordion = styled.div`
  background: ${props => props.theme.social.bgColorLighter};
  border-bottom-left-radius: ${props => props.theme.social.borderRadius};
  border-bottom-right-radius: ${props => props.theme.social.borderRadius};
  width: 100%;
  min-width: 800px;
  display: block;
  overflow: hidden;
  height: 90%;
  font-size: 0;
  @media screen and (max-width: 970px) {
    display: block;
    min-width: 450px;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 0;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    min-width: 0;
  }
`
const Icon = styled.div`
  color: white;
  font-size: 2rem;
  width: 80px;
  height: 100%;
  position: absolute;
  text-indent: 0;
  padding-top: 90px;
  padding-left: 25px;
  display: block;
  transition: all 0.4s linear 0.1s;
`
const HoverIcon = styled(Icon)`
  font-size: 2.5rem;
  padding-left: 20px;
  padding-top: 80px;
  margin-left: 85px;
`
const Tab = styled.li`
  list-style-type: none;
  display: inline-block;
  background-color: ${props => props.theme.social.bgColor};
  border-right: ${props => props.theme.social.bgColorDarker} solid 1px;
  border-top: ${props => props.theme.social.bgColorDarker} solid 1px;
  width: 80px;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin: 0;
  transition: all 0.4s ease-in-out 0.1s;

  &:hover {
    width: 450px;
  }

  &:hover ${Icon} {
    margin-left: -100px;
  }

  &:hover ${HoverIcon} {
    margin-left: 0;
  }

  @media screen and (max-width: 970px) {
    display: block;
    border-bottom: 3px #333 solid;
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
const Label = styled.div`
`
const Title = styled.div`
  font-size: 2.5rem;
  margin-bottom: 10px;
`
const Desc = styled.div`
  font-size: 0.85rem;
  line-height: 1.4rem;
  padding-right: 30px;
`
const Content = styled.div`
  background: white;
  height: 100%;
  margin-left: 80px;
  position: relative;
  padding: 50px 0 0 15px;
  @media screen and (max-width: 500px) {
    padding: 10px 0 0 15px;
  }
`
