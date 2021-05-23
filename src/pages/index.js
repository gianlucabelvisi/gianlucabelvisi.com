import React from "react"

import Seo from "../components/Seo"
import Layout from "../components/Layout";
import WhoAmI from "../components/WhoAmI";
import Hero from "../components/Hero";
import Email from "../components/Email";

const Index = () => (
    <Layout>
        <Seo title="Home"/>
        <Hero/>
        <WhoAmI/>
        <Email/>
    </Layout>
)

export default Index
