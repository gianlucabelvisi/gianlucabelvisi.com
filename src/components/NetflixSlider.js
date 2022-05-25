import React, {useEffect, useState} from 'react';
import styled from "styled-components"
import NetflixCard from "./NetlifxCard";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Aos from "aos";

const NetflixSlider = ({title, subtitle, posts}) => {

    useEffect(() => {
        Aos.init({})
    }, [])

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
                <Title data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                    <TitleWrapper data-tip={subtitle} data-place="top">
                        {title}
                    </TitleWrapper>
                </Title>
                <ProgressBar data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                    {Array.from(Array(calculatePages()).keys()).map((elem, index) => {
                        return (
                            <ProgressElement key={index} highlighted={elem === sliderIndex}/>
                        )
                    })}
                </ProgressBar>
            </Header>
            <SliderWrapper data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <LeftHandle
                    disabled={sliderIndex <= 0}
                    onClick={e => setSliderIndex(sliderIndex - 1)}>
                    <Arrow>
                        <BsChevronCompactLeft/>
                    </Arrow>
                </LeftHandle>
                <Slider index={sliderIndex}>
                    {posts.map((post, index) => {
                        const fm = post.node.frontmatter
                        let itemsPerScreen = calculateItemsPerScreen(width);
                        let isLast = index + 1 === itemsPerScreen
                        return (
                            <CardContainer key={fm.path} itemsPerScreen={itemsPerScreen} isLast={isLast}>
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
                    disabled={sliderIndex >= calculatePages() - 1}
                    onClick={e => setSliderIndex(sliderIndex + 1)}>
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
  position: relative;
  justify-content: space-between;
  padding: 0 calc(var(--card-gap) * 2 + var(--handle-width));
  color: ${props => props.theme.white};
  margin-top: 1rem;
  margin-bottom: .5rem;
  gap: 1rem;
`
const Title = styled.h2`
  position: relative;
  z-index: 0;
  box-sizing: border-box;
  width: auto;
  flex: 1;
`
const TitleWrapper = styled.div`
  display: inline-block;
`
const ProgressBar = styled.div`
  position: relative;
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  flex: 1;
`
const ProgressElement = styled.div`
  width: 1.3rem;
  height: 0.3rem;
  background-color: ${({highlighted}) => (highlighted ? "var(--white)" : "gray")};
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
  transition: all 500ms ease;
  transition-delay: 300ms;
  &:hover {
    z-index: 1000;
    transform: scale(1.5) translateY(-15%) translateX(${({isLast}) => (isLast? "-15" : "+15")}%);
  }
`
