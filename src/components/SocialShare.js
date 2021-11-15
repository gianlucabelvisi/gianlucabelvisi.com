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
import ReactTooltip from 'react-tooltip';


const SocialShare = ({path}) => {

    const url = "https://gianlucabelvisi.com/" + path

    return (
        <ShareSection>
            <Wrapper>
                <ReactTooltip effect="solid"/>
                <FacebookShareButton url={url} data-tip="Share on Facebook" data-place="right">
                    <FacebookIcon size={32} round={true}/>
                </FacebookShareButton>
                <TwitterShareButton url={url} data-tip="Tweet!" data-place="right">
                    <TwitterIcon size={32} round={true}/>
                </TwitterShareButton>
                <RedditShareButton url={url} data-tip="Create Reddit post" data-place="right">
                    <RedditIcon size={32} round={true}/>
                </RedditShareButton>
                <WhatsappShareButton url={url} data-tip="Forward to WhatsApp" data-place="right">
                    <WhatsappIcon size={32} round={true}/>
                </WhatsappShareButton>
                <InstapaperShareButton url={url} data-tip="Save on InstaPaper" data-place="right">
                    <InstapaperIcon size={32} round={true}/>
                </InstapaperShareButton>
                <PinterestShareButton url={url} data-tip="Pin!" data-place="right">
                    <PinterestIcon size={32} round={true}/>
                </PinterestShareButton>
            </Wrapper>
        </ShareSection>

    );
};

const ShareSection = styled.div`
  position: sticky;
  top: 0;
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
    //position: relative;
    //flex-direction: row;
    //margin-top: 0;
    //left: 0;
    //justify-content: right;
    //margin-bottom: 1rem;
  }


`


export default SocialShare;