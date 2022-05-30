import React from 'react';
import {
    FacebookIcon,
    FacebookShareButton,
    InstapaperIcon,
    InstapaperShareButton,
    PinterestIcon,
    PinterestShareButton,
    RedditIcon,
    RedditShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";
import styled from "styled-components"


const SocialShare = ({path}) => {

    const url = "https://gianlucabelvisi.com/" + path

    return (
        <ShareSection>
            <Wrapper>
                <FacebookShareButton url={url} data-tip="BoomerBook" data-place="left">
                    <FacebookIcon size={32} round={true}/>
                </FacebookShareButton>
                <TwitterShareButton url={url} data-tip="Tweet" data-place="left">
                    <TwitterIcon size={32} round={true}/>
                </TwitterShareButton>
                <RedditShareButton url={url} data-tip="Reddit it" data-place="left">
                    <RedditIcon size={32} round={true}/>
                </RedditShareButton>
                <WhatsappShareButton url={url} data-tip="WhatsApp" data-place="left">
                    <WhatsappIcon size={32} round={true}/>
                </WhatsappShareButton>
                <InstapaperShareButton url={url} data-tip="InstaPaper" data-place="left">
                    <InstapaperIcon size={32} round={true}/>
                </InstapaperShareButton>
                <PinterestShareButton url={url} data-tip="Pin" data-place="left">
                    <PinterestIcon size={32} round={true}/>
                </PinterestShareButton>
            </Wrapper>
        </ShareSection>
    );
};

const ShareSection = styled.div`
  @media screen and (max-width: 500px) {
    position: relative;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  position: absolute;
  left: -60px;
  margin-top: calc(${props => props.theme.header.height} + 1rem);
  @media screen and (max-width: 768px) {
      left: -35px;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`


export default SocialShare;