import React, {useEffect, useState} from 'react';
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
    console.log("Time: ", time)
    console.log(minimalistic === "true" ? "minimalistic" : "not minimalistic")

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
  justify-content: space-around;
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
  font-size: clamp(1rem, 5vw, 10rem);
`

const Quote = styled.div`
  margin-bottom: 4rem;
  position: relative;
`

const Author = styled.div`
  position: absolute;
  bottom: -2rem;
  right: 0;
`


const Friday = () => {
    return (
        <Day>
            <YesNo>Yes</YesNo>
            <Qualifier>It is Friday!</Qualifier>
        </Day>
    );
};

const OtherDay = () => {

    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')

    useEffect(() => {
        const url = 'https://quotes.rest/qod?language=en'
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);

                setQuote(json["contents"]["quotes"][0]["quote"])
                setAuthor(json["contents"]["quotes"][0]["author"])
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData()

    }, [])

    console.log(quote)
    console.log(author)


    return (
        <Day>
            <YesNo>NO</YesNo>
            <Qualifier>It is not Friday.</Qualifier>
            <Quote>
                {quote}
                <Author>{author}</Author>
            </Quote>
        </Day>
    );
};


