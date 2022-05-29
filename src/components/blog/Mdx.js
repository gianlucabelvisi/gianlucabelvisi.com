import React from 'react';
import YouTube from "./YouTube";
import YouTubeAudio from "./YouTubeAudio";
import {Break, FigureLabel, Indented, NewLine, Question, Song} from "./Text";
import TextBox from "./Boxes";
import ThreeColumns, {Col1, Col23} from "./Grids";
import {AiTwotonePushpin} from "react-icons/ai";
import {MDXRenderer} from "gatsby-plugin-mdx";
import {MDXProvider} from "@mdx-js/react";
import styled from "styled-components";
import {Link} from "gatsby";
import Quote from "./Quote";
import Spoiler from "./Spoiler";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl"
import Code from "./Code";

const Mdx = ({body}) => {
    return (
        <MDXProvider
            components={{
                // Map HTML element tag to React component
                p: P,
                ul: UL,
                ol: OL,
                li: LI,
                h2: H2,
                h3: H3,
                h4: H4,
                a: A,
                pre: props => <Code {...props} />,
                wrapper: ({ children }) => <>{children}</>,
                Spoiler, YouTube, YouTubeAudio, Song, Question, Break, Link, Quote,
                FigureLabel, TextBox, NewLine, Indented, ThreeColumns,
                Col1, Col23, AiTwotonePushpin
                //p: props => <p {...props} style={{color: "rebeccapurple"}}/>,
            }}
        >
            <MDXRenderer>
                {body}
            </MDXRenderer>
        </MDXProvider>
    );
};

export default Mdx;

const P = styled.p`
  margin-bottom: 1rem;
  line-height: 1.5rem;
`
const H2 = styled.h2`
  padding-top: 1rem;
  padding-bottom: 1rem;
`
const H3 = styled.h3`
  padding-top: 0.7rem;
  padding-bottom: 0.8rem;
`
const H4 = styled.h4`
  padding-top: 0.3rem;
  padding-bottom: 0.2rem;
`
const UL = styled.ul`
  margin-bottom: 1rem;
`
const OL = styled.ol`
  margin-bottom: 1rem;
`
const LI = styled.li`
  margin-left: 2rem;
  margin-bottom: .5rem;
`
const A = styled.a`
  color: ${props => props.theme.post.link.color};
  text-decoration: none;
  font-weight: bold;


  &:visited {
    color: ${props => props.theme.post.link.visited};
  }

  &:hover {
    color: ${props => props.theme.post.link.hover};
  }

  transition: color 0.5s ease-in-out;
`