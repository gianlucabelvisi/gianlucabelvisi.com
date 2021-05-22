import React from "react"

import Seo from "../components/Seo"
import Layout from "../components/Layout";
import WhoAmI from "../components/WhoAmI";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Email from "../components/Email";
import Trips from "../components/Trips";

const Index = () => (
    <Layout>
        <Seo title="Home"/>
        <Hero/>
        <WhoAmI/>
        <Email/>
    </Layout>
)

export default Index
