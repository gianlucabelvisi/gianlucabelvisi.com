import React from 'react';
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import {useQueryParamString} from 'react-use-query-param-string';
import styled from "styled-components"

const IsItFriday = () => {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

    const [dayOverride] = useQueryParamString('day', '')
    const [timeOverride] = useQueryParamString('time', '')
    const [minimalistic] = useQueryParamString('minimalistic', '')

    const day = dayOverride.length > 0 ? dayOverride : days[new Date().getDay()]
    const timeHours = timeOverride.length > 0 ? timeOverride : new Date().getHours()

    const isFriday = day === 'friday'

    console.log("Day: " + day)
    console.log("Time: " + timeHours)



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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  color: white;
  background-color: ${props => props.isFriday ? "#26bf2e" : "#d6220b"};
`


const Friday = () => {
    return (
        <FridayWrapper>
            Yes, it is Friday!
        </FridayWrapper>
    );
};

const FridayWrapper = styled.div`
`


const OtherDay = () => {
    return (
        <div>
            No, it is not Friday
        </div>
    );
};


