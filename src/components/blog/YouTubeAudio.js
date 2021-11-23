import React, {useState} from 'react';
import ReactPlayer from "react-player/lazy";
import styled from "styled-components"
import {FaPlay, FaPause} from "react-icons/fa";


const YouTubeAudio = ({url}) => {

    const [isPlaying, setIsPlaying] = useState(false)
    const togglePlaying = () => {
        setIsPlaying(!isPlaying)
    }

    function onEnded() {
        return setIsPlaying(false);
    }

    return (

        <div>
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
        </div>
    );
};

const HiddenPlayer = styled(ReactPlayer)`
  display: none;
`
const BackGround = styled.div`
  background-color: ${props => props.theme.button.mainColor};
  max-width: 100px;
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

export default YouTubeAudio;