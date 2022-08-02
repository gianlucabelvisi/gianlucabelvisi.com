import React, {useState} from 'react';
import ReactPlayer from "react-player/lazy";
import styled from "styled-components"
import {FaPlay, FaPause} from "react-icons/fa";
import {GiSpeaker} from "react-icons/gi";


const YouTubeAudio = ({url}) => {

    const [isPlaying, setIsPlaying] = useState(false)
    const togglePlaying = () => {
        setIsPlaying(!isPlaying)
    }

    function onEnded() {
        return setIsPlaying(false);
    }

    return (

        <Wrapper>
            <HiddenPlayer
                url={url}
                playing={isPlaying}
            />

            <BackGround>
                <PlayButton
                    onClick={togglePlaying}
                    onEnded={onEnded}
                >
                    <Icon>
                        {isPlaying ? <FaPause/> : <FaPlay/>}
                    </Icon>
                </PlayButton>
            </BackGround>
            <Warning>
                <small>
                    There is a bug on mobile. If the music doesn't start, try stopping and playing a couple of times
                </small>
            </Warning>
        </Wrapper>
    );
};
const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`
const HiddenPlayer = styled(ReactPlayer)`
  display: none;
`
const BackGround = styled.div`
  background-color: ${props => props.theme.button.mainColor};
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 0.5rem;
  border-radius: 25px;
  border: 3px solid ${props => props.theme.button.mainColor};
`
const PlayButton = styled.button`
  font-size: 2rem;
  color: ${props => props.theme.bgColor};
  background: none;
  border: none;
  cursor: pointer;
`
const Icon = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Warning = styled.p`
  width: 50%;
  display: none;
  @media (pointer: none), (pointer: coarse) {
    display: block;
  }
`

export default YouTubeAudio;


const Listen = ({url}) => {
    return (
        <ListenWrapper>
            <MiniLink href={url} target="_blank"><Speaker/></MiniLink>
        </ListenWrapper>
    )
}
const ListenWrapper = styled.span`
    margin-left: 0.5rem;
`
const MiniLink = styled.a`
  vertical-align: middle;
  font-size: 1.2rem;
`
const Speaker = styled(GiSpeaker)`
    color: ${props => props.theme.accentColor};
`
export {Listen}