import React from 'react';
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import WideScreenContainer from "../components/WideScreenContainer";
import {ResponsiveEmbed} from "../components/blog/ResponsiveEmbed";

const Trello = () => {
    return (
        <Layout>
            <Seo title="Trello"/>
            <WideScreenContainer>
                <ResponsiveEmbed ratio={"4:7"} src={"https://trello.com/b/i59sE2uK.html"}/>
            </WideScreenContainer>
        </Layout>
    );
};

export default Trello;