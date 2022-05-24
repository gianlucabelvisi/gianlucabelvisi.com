import React, {useState} from 'react';
import styled from "styled-components"
import NetflixCard from "./NetlifxCard";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import useWindowDimensions from "./hooks/useWindowDimensions";
import {element} from "prop-types";

const NetflixSlider = ({title, posts}) => {

    const [sliderIndex, setSliderIndex] = useState(0)
    const {_, width} = useWindowDimensions()

    function calculateItemsPerScreen(width) {
        if (width > 1200) return 5
        if (width > 1000) return 4
        if (width > 800) return 3
        return 2;
    }
    function calculatePages() {
        return Math.ceil(posts.length / calculateItemsPerScreen(width))
    }

    return (
        <Container>
            <Header>
                <Title>
                    {title}
                    {/*- w {width} id {sliderIndex} pages {calculatePages()}*/}
                </Title>
                <Subtitle></Subtitle>
                <ProgressBar>
                    {Array.from(Array(calculatePages()).keys()).map((elem, index) => {
                        return (
                            <ProgressElement key={index} highlighted={elem === sliderIndex}/>
                        )
                    })}
                </ProgressBar>
            </Header>
            <SliderWrapper>
                <LeftHandle
                        disabled = {sliderIndex <= 0}
                        onClick = {e => setSliderIndex(sliderIndex - 1)}>
                    <Arrow>
                        <BsChevronCompactLeft/>
                    </Arrow>
                </LeftHandle>
                <Slider index={sliderIndex}>
                    {posts.map((post, index) => {
                        const fm = post.node.frontmatter
                        return (
                            <CardContainer key={fm.path} itemsPerScreen={calculateItemsPerScreen(width)}>
                                <NetflixCard
                                    cardImage={fm.cardImage}
                                    title={fm.title}
                                    subTitle={fm.subTitle}
                                    date={fm.date}
                                    path={fm.path}
                                    onHover={fm.onHover}
                                    index={index}
                                />
                            </CardContainer>
                        )
                    })}
                </Slider>
                <RightHandle
                        disabled = {sliderIndex >= calculatePages() - 1}
                        onClick = {e => setSliderIndex(sliderIndex + 1)}>
                    <Arrow>
                        <BsChevronCompactRight/>
                    </Arrow>
                </RightHandle>

            </SliderWrapper>
        </Container>
    );
};

export default NetflixSlider;

const Container = styled.div`
  margin: 0;
  box-sizing: border-box;

  --handle-width: 2em;
  --slider-padding: 2rem;
  --card-gap: .25rem;
  --items-per-screen: 5;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 calc(var(--card-gap) * 2 + var(--handle-width));
  color: ${props => props.theme.white};
`
const Subtitle = styled.div`
`
const ProgressBar = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
`
const ProgressElement = styled.div`
  width: 1.3rem;
  height: 0.3rem;
  background-color: ${({highlighted}) => (highlighted? "var(--white)" : "gray")};
`
const Title = styled.h2`
  box-sizing: border-box;
`
const SliderWrapper = styled.div`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`
const Slider = styled.div`
  display: flex;
  flex-grow: 1;
  transition: all 300ms ease-in-out;
  transform: translateX(calc(${(props) => props.index} * -100%));
  box-sizing: border-box;
  width: calc(100% - 2 * var(--slider-padding));
  padding: 0 var(--card-gap);
`
const Arrow = styled.div`
  font-size: 2rem;
  color: white;
`
const Handle = styled.button`
  border: none;
  border-radius: .5rem;
  background-color: rgba(0, 0, 0, .25);
  z-index: 10;
  flex-grow: 0;
  flex-shrink: 0;
  width: var(--handle-width);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  transition: all 300ms ease;
  margin: 0 var(--card-gap) 0 0;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, .5);

    ${Arrow} {
      transform: scale(1.2);
    }
  }
`
const LeftHandle = styled(Handle)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`
const RightHandle = styled(Handle)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`
const CardContainer = styled.div`
  flex: 0 0 calc(100% / ${props => props.itemsPerScreen});
  border-radius: .5rem;
  min-width: calc(100% / ${props => props.itemsPerScreen});
  width: calc(100% / ${props => props.itemsPerScreen});
  aspect-ratio: 5 / 4;
  overflow: hidden;
  box-sizing: border-box;
  padding-right: var(--card-gap);
`
