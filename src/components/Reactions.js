import React from 'react';
import styled from "styled-components";
import {reactionData} from "../data/ReactionData";
import Reaction from "./Reaction";

const Reactions = ({id}) => {
    return (
        <Wrapper>
            {reactionData.map((item, key) => (
                <Reaction id={id} item={item} key={key}/>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
`

export default Reactions;
