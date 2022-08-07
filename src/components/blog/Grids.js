import React from 'react';
import styled from "styled-components";

import MachiavelliPic from '../../assets/images/machiavelli.jpg'
import LucreziaPic from '../../assets/images/lucrezia2.jpg'
import TigressPic from '../../assets/images/tigress.jpg'
import BiancaPic from '../../assets/images/bianca.png'
import BatmanPic from '../../assets/images/batman.jpg'
import CrimePunishPic from '../../assets/images/crimepunishment.jpg'
import GreenlightsPic from '../../assets/images/greenlights.jpg'
import HailmaryPic from '../../assets/images/hailmary.jpg'
import PridePic from '../../assets/images/pride.jpg'
import RicherPic from '../../assets/images/richer.png'
import TruthPic from '../../assets/images/truth.jpg'

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
  gap: .7rem;
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
export const Col123 = styled.div`
  grid-column: 1 / 4;
  width: 100%;
  position: relative;
  min-width: 9rem;
  margin-right: 1rem;
  background: url(${(props) => props.source || ""});
`
export const Col23 = styled.div`
  grid-column: 2 / 4;
  width: 100%;
  position: relative;
`

export const BoxPic = styled(Col1)`
  min-height: 9rem;
  @media screen and (max-width: 500px) {
    background-size: cover;
    min-height: 16rem;
  }
`
export const Pic = styled(Col123)`
  min-height: 19rem;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 500px) {
    background-size: cover;
    min-height: 16rem;
  }
`
export const Machiavelli = styled(BoxPic)`
  background: url(${MachiavelliPic}) center no-repeat;
  background-size: contain;
`
export const Lucrezia = styled(BoxPic)`
  background: url(${LucreziaPic}) center no-repeat;
  background-size: contain;
`
export const TigressBook = styled(BoxPic)`
  background: url(${TigressPic}) center no-repeat;
  background-size: contain;
`
export const Bianca = styled(BoxPic)`
  background: url(${BiancaPic}) center no-repeat;
  background-size: contain;
`
export const Batman = styled(BoxPic)`
  background: url(${BatmanPic}) center no-repeat;
  background-size: contain;
`
export const Crime = styled(BoxPic)`
  background: url(${CrimePunishPic}) center no-repeat;
  background-size: contain;
`
export const Greenlights = styled(BoxPic)`
  background: url(${GreenlightsPic}) center no-repeat;
  background-size: contain;
`
export const Hailmary = styled(BoxPic)`
  background: url(${HailmaryPic}) center no-repeat;
  background-size: contain;
`
export const Pride = styled(BoxPic)`
  background: url(${PridePic}) center no-repeat;
  background-size: contain;
`
export const Richer = styled(BoxPic)`
  background: url(${RicherPic}) center no-repeat;
  background-size: contain;
`
export const Truth = styled(BoxPic)`
  background: url(${TruthPic}) center no-repeat;
  background-size: contain;
`




