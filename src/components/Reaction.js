import React, {useEffect, useState} from 'react';
import app from 'gatsby-plugin-firebase-v9.0'
import {getDatabase, ref, runTransaction} from "firebase/database";
import styled, {keyframes} from "styled-components";

const Reaction = ({id, item}) => {

    const [reaction, setReaction] = useState(0);

    const increaseCount = () => {
        const database = getDatabase(app)
        const reactionRef = ref(database, 'reactions/' + id + '/' + item.name)

        setReaction(reaction + 1)
        runTransaction(reactionRef, (stored) => {
            if (stored === undefined) {
                stored = 0
            }
            stored++
            return stored
        })
    }

    useEffect(() => {
        async function fetchData() {
            const database = getDatabase(app)
            const reactionRef = ref(database, 'reactions/' + id + '/' + item.name)

            await runTransaction(reactionRef, (stored) => {
                setReaction(stored)
                return stored
            })
        }

        fetchData()
    }, [id, item.name]);

    return (
        <div>
            <EmoteBox data-tip={item.tooltip} data-place="bottom" onClick={e => increaseCount()}>
                <Emote>
                    <DisplayEmote>
                        {item.icon}
                    </DisplayEmote>
                </Emote>
                <Count>
                    {reaction ?? 0}
                </Count>
            </EmoteBox>
        </div>
    );
};

export default Reaction;

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