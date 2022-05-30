import app from 'gatsby-plugin-firebase-v9.0'
import {getDatabase, ref, runTransaction} from "firebase/database";
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {PieChart} from "react-minimal-pie-chart";
import {GoPrimitiveDot} from "react-icons/go";

export const PollBoxed = ({id, question, answers, labels}) => {
    return (
        <Box>
            <Poll id={id} question={question} answers={answers} labels={labels}/>
        </Box>
    );
};

const Poll = ({id, question, answers, labels}) => {

    const [results, setResults] = useState({})
    const colors = ['#399e54', '#667afa', '#edc67e', '#f57684', '#ffb5f5']
    const defaultLabelStyle = {
        fontSize: '.45rem',
        fontFamily: 'sans-serif',
        color: 'white'
    };
    let shiftSize = 3;
    const [answered, setAnswered] = useState(false)


    function reply(key) {
        const database = getDatabase(app)
        const reactionRef = ref(database, 'polls/' + id + '/' + key)
        runTransaction(reactionRef, (stored) => {
            if (stored === undefined) {
                stored = 0
            }
            stored++
            return stored
        })
    }

    useEffect(() => {
        async function fetchData() {
            const database = getDatabase(app)
            const reactionRef = ref(database, 'polls/' + id)
            await runTransaction(reactionRef, (stored) => {
                setResults(stored)
                return stored
            })
        }

        fetchData()
    }, [id]);

    return (
        <Wrapper>
            <Question>
                Poll: {question}
            </Question>
            <Answers answered={answered}>
                {answers.map((item, key) => {
                    return (
                        <AnswerContainer id={key} onClick={() => {
                            reply(key)
                            setAnswered(true)
                        }}>
                            <Answer>
                                <Dot/>{item}
                            </Answer>
                        </AnswerContainer>
                    )
                })
                }
            </Answers>
            <Results answered={answered}>
                <PieChart
                    data={answers.map((answer, key) => {
                        return {
                            title: (labels === undefined) ? answer : labels[key] ?? answer,
                            key: key,
                            value: results == null ? 0 : results[key] ?? 0,
                            color: colors[key]
                        }
                    })
                    }
                    animate={true}
                    label={({dataEntry}) => dataEntry.title}
                    radius={PieChart.defaultProps.radius - shiftSize}
                    segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
                    labelStyle={{
                        ...defaultLabelStyle,
                    }}
                />
            </Results>

        </Wrapper>
    );
};

const Box = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-left: ${props => props.theme.accentColor} 3px solid;
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`
const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-left: ${props => props.theme.accentColor} 3px solid;
  padding-left: 2rem;
  padding-bottom: 2rem;
`
const Question = styled.h3`
  margin-bottom: 1rem;
`
const Answers = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 300ms ease-in-out 0.4s;
  transform: ${({answered}) => (answered ? 'translateX(100%)' : '')};
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 4rem;
  margin-bottom: 2rem;
`
const AnswerContainer = styled.div`
  height: 1rem;
  margin-bottom: 1.5rem;
`
const Dot = styled(GoPrimitiveDot)`
  margin-left: 1rem;
  margin-right: 1rem;
  color: ${props => props.theme.accentColor};
`
const Answer = styled.h4`
  position: absolute;
  margin-bottom: .6rem;
  transition: font-size .2s ease;
  cursor: pointer;
  padding-right: 5rem;

  &:hover {
    font-size: 1.1rem;
  }
`
const Results = styled.div`
  width: 40%;
  height: 40%;
  transition: all 1000ms ease-in-out 1s;
  transform: ${({answered}) => (answered ? 'translateX(30%)' : 'translateX(-200%)')};
  @media screen and (max-width: 768px) {
    width: 60%;
    height: 60%;
  }
`
export default Poll;