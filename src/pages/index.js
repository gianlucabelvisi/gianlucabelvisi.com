import React from "react"

import Seo from "../components/Seo"
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Email from "../components/Email";
import Trips from "../components/Trips";

const Index = () => (
    <Layout>
        <Seo title="Home"/>
        <Hero/>
        <Testimonials/>
        <Trips/>
        <Stats/>
        <Email/>
    </Layout>
)

export default Index
