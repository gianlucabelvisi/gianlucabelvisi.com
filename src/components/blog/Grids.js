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
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
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
export const Machiavelli = styled(Col1)`
  background: url(${MachiavelliPic}) center no-repeat;
  background-size: contain;
  min-height: 9rem;
`
export const Col23 = styled.div`
  grid-column: 2 / 4;
  width: 100%;
  position: relative;
`



