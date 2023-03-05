import React from 'react';
import styled from "styled-components";
import Link from "gatsby-link";
import Reactions from "./Reactions";
import ViewCounter from "./ViewCounter";

const PostFooter = ({path, author}) => {
    return (
        <div>
            <FirstLine>
                <Reactions id={path}/>
                <ViewCounter id={path}/>
            </FirstLine>

            <SecondLine>
                <Author>
                    by <strong>{author}</strong>
                </Author>
                <MorePosts to={"/blog-page1"}><strong>More Posts</strong></MorePosts>
            </SecondLine>
        </div>
    );
};

export default PostFooter;

const FirstLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media screen and (max-width: 550px) {
    display: block;
    flex-direction: column;
    justify-items: start;
    gap: 0.7rem;
  }
`
const SecondLine = styled.div`
  margin-top: 2rem;
  display: flex;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    gap: 2rem;
  }
`
const Author = styled.div`
  flex-basis: 40%;
  flex-grow: 1;
`
const MorePosts = styled(Link)`
  flex-basis: 20%;
  flex-grow: 1;
  color: ${props => props.theme.post.link.color};
  text-align: end;
  @media screen and (max-width: 550px) {
    text-align: left;
  }
`