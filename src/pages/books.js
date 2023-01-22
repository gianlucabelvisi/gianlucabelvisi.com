import React from 'react';
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import WideScreenContainer from "../components/WideScreenContainer";
import GoodreadsBookshelf from "react-goodreads-shelf";
import styled from "styled-components";
import {GiBookshelf} from "react-icons/gi";

const Books = () => {
    return (
        <Layout>
            <Seo title="Books"/>
            <WideScreenContainer>
                <Wrapper>

                    <Title>Currently reading</Title>
                    <GoodreadsBookshelf userId="12362887-gianluca-belvisi" shelf={"currently-reading"}
                                        sort={"date added"}/>

                    <Separator/>

                    <Title>Finished Books</Title>
                    <GoodreadsBookshelf userId="12362887-gianluca-belvisi" limit={500} shelf={"read"}
                                        sort={"date read"}/>
                </Wrapper>


            </WideScreenContainer>
        </Layout>
    );
};

const Wrapper = styled.div`
  margin-top: 1rem;
  margin-left: 0;
  margin-right: 0;
  @media screen and (max-width: 1300px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`
const Title = styled.h2`
  margin-bottom: 1rem;
`
const Separator = styled(GiBookshelf)`
  font-size: 3rem;
  color: ${props => props.theme.accentColor};
  width: 100%;
  display: flex;
  align-content: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`


export default Books;