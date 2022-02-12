import React, {useEffect, useState} from 'react';
import app from 'gatsby-plugin-firebase-v9.0'
import {getDatabase, ref, runTransaction} from "firebase/database";
import styled, {keyframes} from "styled-components";
import ReactTooltip from "react-tooltip";
import {reactionData} from "../data/ReactionData";

const Reactions = ({id}) => {

    // reactions
    const [reactions, setReactions] = useState('{}');

    const increaseCount = (name) => {
        const database = getDatabase(app)
        const reactionRef = ref(database, 'reactions/' + id)

        runTransaction(reactionRef, (stored) => {
            if (!stored) {
                stored = {}
            }
            if (stored.hasOwnProperty(name)) {
                stored[name] = stored[name] + 1
            } else {
                stored[name] = 1
            }
            setReactions(stored)
            return stored
        })
    }


    useEffect(() => {
        async function fetchData() {
            const database = getDatabase(app)
            const reactionRef = ref(database, 'reactions/' + id)

            await runTransaction(reactionRef, (stored) => {
                setReactions(stored)
                return stored
            })
        }

        fetchData()
    }, [id]);

    return (
        <Wrapper>
            <ReactTooltip effect="solid" backgroundColor="#ff9664"/>
            {reactionData.map((item, key) => (
                <EmoteBox key={key} data-tip={item.tooltip} data-place="bottom"
                          onClick={e => increaseCount(item.name)}
                >
                    <Emote>
                        <DisplayEmote>
                            {item.icon}
                        </DisplayEmote>
                    </Emote>
                    <Count>
                        {reactions == null ? 0 : reactions[item.name] ?? 0}
                    </Count>
                </EmoteBox>
            ))}
        </Wrapper>
    );
};

const NoSelect = styled.div`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`

const pulse = keyframes`
  from {
    transform: scale(1.4);
  }
  to {
    transform: scale(4);
  }
`;
const Wrapper = styled.div`
  display: flex;
`
const Emote = styled(NoSelect)`
  position: relative;
  margin-right: .4rem;
  width: 1.4rem;
`
const DisplayEmote = styled(NoSelect)`
  opacity: 1 !important;
  position: absolute;
  top: 0;
  transition: all .2s ease-in-out;
  z-index: 10;
`
const EmoteBox = styled(NoSelect)`
  cursor: pointer;
  position: relative;
  font-size: 1.2rem;
  margin-right: .4rem;
  display: flex;
  background: rgba(0, 0, 0, 0.02);
  padding: .4rem;
  border-radius: 12px;
  transition: all .2s ease-in-out;
  
  @media screen and (max-width: 568px) {
      font-size: 1.2rem;
  }

  &:hover {
    ${Emote} {
      ${DisplayEmote} {
        transform: scale(1.4);
      }
    }

    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  &:active ${Emote} ${DisplayEmote} {
    animation: .4s ease-in-out 0s 1 ${pulse};
  }
`
const Count = styled.div`
  color: #757070;
`
export default Reactions;
