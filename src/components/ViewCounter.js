import React, {useEffect, useState} from 'react';
import app from 'gatsby-plugin-firebase-v9.0'
import {getDatabase, ref, runTransaction} from "firebase/database";
import styled from "styled-components"

const ViewCounter = ({id}) => {
    const [viewCount, setViewCount] = useState('');

    useEffect(() => {
        const database = getDatabase(app)
        const viewRef = ref(database, 'views/' + id)

        runTransaction(viewRef, (view) => {
            if (view) {
                view.count++;
            } else {
                view = {
                    count: 1
                }
            }
            setViewCount(view.count)
            return view;
        })
    }, [id]);
    return (
        <Wrapper>
            Viewed {viewCount ? viewCount : `1`} times
        </Wrapper>
    );
};

const Wrapper = styled.small`
  display: inline-block;
  text-align: center;
`

export default ViewCounter;