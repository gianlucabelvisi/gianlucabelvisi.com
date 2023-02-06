import React from 'react';
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import {useQueryParamString} from 'react-use-query-param-string';
import styled from "styled-components"

const IsItFriday = () => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

    const [day] = useQueryParamString('day', days[new Date().getDay()])
    const [time] = useQueryParamString('time', new Date().getHours())
    const [minimalistic] = useQueryParamString('minimalistic', "true")

    const isFriday = day === 'friday'

    console.log("Day: ", day)
    console.log("Time: ",  time)
    console.log(minimalistic === "true" ? "minimalistic" : "not minimalistic" )



    return (
        <Layout fullScreen={true}>
            <Seo title="Is it Friday?"/>
            <Container isFriday={isFriday}>
                <div>
                    {day === 'friday' && <Friday/>}
                    {day !== 'friday' && <OtherDay/>}
                </div>
            </Container>
        </Layout>
    );
};

export default IsItFriday;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  color: white;
  background-color: ${props => props.isFriday ? "#26bf2e" : "#d6220b"};
`

const Day = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const YesNo = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60%;
  font-size: clamp(1rem, 20vw, 30rem);
  //background-color: red;
  align-content: center;
`
const Qualifier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //background-color: blue;
  height: 40%;
  font-size: clamp(1rem, 5vw, 10rem);
`


const Friday = () => {
    return (
        <FridayWrapper>
            <YesNo>Yes</YesNo>
            <Qualifier>It is Friday!</Qualifier>
        </FridayWrapper>
    );
};

const FridayWrapper = styled(Day)`
`

const OtherDay = () => {
    return (
        <OtherDayWrapper>
            <YesNo>NO</YesNo>
            <Qualifier>It is not Friday.</Qualifier>
        </OtherDayWrapper>
    );
};

const OtherDayWrapper = styled(Day)`
`

