import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero";
import Trips from "../components/Trips";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import Email from "../components/Email";

const Index = () => (
    <Layout>
        <Seo title="Home"/>
        <Hero/>
        <Trips heading="My favorite stuff"/>
        <Testimonials/>
        <Stats/>
        <Email/>
    </Layout>
)

export default Index
