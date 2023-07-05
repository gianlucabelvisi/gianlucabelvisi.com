import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

const CardsImageSpanner = ({ images }) => (
    <Background>
        <Gallery>
            {images.map((image, index) => (
                <Card key={index}>
                    <Image image={image} alt="Gallery" title="Gallery" />
                </Card>
            ))}
        </Gallery>
    </Background>
);

export default CardsImageSpanner;

const Background = styled.span`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const Gallery = styled.section`
  display: flex;
  left: calc(50% - 330px);
`;

const Card = styled.article`
  position: relative;
  left: 0;
  width: 110px;
  height: 160px;
  border-radius: 8px;
  transition: 1s ease-in-out;
  overflow: hidden;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.5);

  &:not(:first-child) {
    margin-left: -45px;
  }

  &:hover {
    transform: translateY(-16px);
    font-weight: bold;
    cursor: pointer;
  }

  &:hover ~ & {
    left: 55px;
  }
`;

const Image = styled(GatsbyImage)`
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
`;
