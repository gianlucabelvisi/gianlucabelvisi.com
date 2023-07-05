import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const PortraitImageSpanner = ({ images }) => {
    return (
        <Background>
            <Gallery>
                {images.map((image, index) => {
                    const pathToImage = getImage(image);
                    return (
                        <Card key={index}>
                            <figure>
                                <StyledGatsbyImage
                                    image={pathToImage}
                                    alt="Preview"
                                    title="Preview"
                                />
                            </figure>
                        </Card>
                    );
                })}
            </Gallery>
        </Background>
    );
};

export default PortraitImageSpanner;

// Styled components
const Background = styled.span`
    display: grid;
    place-items: center;
    height: 100vh;
`;

const Gallery = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    max-width: 800px;
`;

const Card = styled.article`
    position: relative;
    left: 0;
    width: 80px;
    border-radius: 16px;
    height: 360px;
    overflow: hidden;
    background-color: #3C343D;
    transition: 0.4s ease-in-out;
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.5);
    flex: 0.25;

    &:hover {
        flex: 2;
        font-weight: bold;
        cursor: pointer;
        border-radius: 8px;
    }
`;

const StyledGatsbyImage = styled(GatsbyImage)`
    height: 360px;
`;
