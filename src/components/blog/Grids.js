import React from 'react';
import styled from "styled-components";

import MachiavelliPic from '../../assets/images/machiavelli.jpg'

const ThreeColumns = ({children}) => {
    return (
        <Grid3Col>
            {children}
        </Grid3Col>
    );
};
export default ThreeColumns;

const Grid3Col = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
export const Col1 = styled.div`
  grid-column: 1;
  width: 100%;
  position: relative;
  min-width: 9rem;
  margin-right: 1rem;
  background: url(${(props) => props.source || ""});
`
export const BoxPic = styled(Col1)`
  min-height: 9rem;
  @media screen and (max-width: 500px) {
    background-size: cover;
    min-height: 16rem;
  }
`
export const Machiavelli = styled(BoxPic)`
  background: url(${MachiavelliPic}) center no-repeat;
  background-size: contain;
`
export const Col23 = styled.div`
  grid-column: 2 / 4;
  width: 100%;
  position: relative;
`



