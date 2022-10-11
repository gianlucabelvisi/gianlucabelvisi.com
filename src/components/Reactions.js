import React from 'react';
import styled from "styled-components";
import {reactionData} from "../data/ReactionData";
import Reaction from "./Reaction";

const Reactions = ({id}) => {
    return (
        <Wrapper>
            {reactionData.map((item, index) => (
                <Reaction id={id} item={item} key={index}/>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: .5rem;
`

export default Reactions;
