import React, {useEffect, useState} from 'react';
import styled, { keyframes, css } from 'styled-components';
import {getDatabase, ref, runTransaction} from "firebase/database";
import app from "gatsby-plugin-firebase-v9.0";

const UnicornButton = ({page, id, tooltip}) => {
    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        const database = getDatabase(app)
        const reactionRef = ref(database, 'unicorn/' + page + '/' + id)

        setCount(prevCount => prevCount + 1);
        setClicked(true);
        setTimeout(() => setClicked(false), 500); // reset after the duration of animation
        runTransaction(reactionRef, (stored) => {
            if (stored === undefined) {
                stored = 0
            }
            return stored + 1
        })
    };

    useEffect(() => {
        async function fetchData() {
            const database = getDatabase(app)
            const reactionRef = ref(database, 'unicorn/' + page + '/' + id)

            await runTransaction(reactionRef, (stored) => {
                setCount(stored)
                return stored
            })
        }
        fetchData()
    }, [id, page]);

    return (
        <Wrapper>
            <StyledButton data-tip={tooltip} data-place="bottom" onClick={handleClick} clicked={clicked}>
                🦄 <Count>{count}</Count>
            </StyledButton>
        </Wrapper>
    );
};

const bounce = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

const Wrapper = styled.span`
  position: relative;
  display: flex;
  width: 100%;
  height: 1rem;
  margin-bottom: 1rem;
`;

const StyledButton = styled.button`
  position: absolute;
  height: 1rem;
  border: none;
  padding: 0;
  top: -1rem;
  background: none;
  cursor: pointer;
  font-size: 1.5rem;
  animation: ${props => props.clicked ? css`${bounce} 0.5s linear` : 'none'};
`;

const Count = styled.span`
  font-size: 0.75rem;
`;

export default UnicornButton;
