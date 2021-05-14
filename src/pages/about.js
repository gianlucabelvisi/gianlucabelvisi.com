import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";

const About = () => (
    <Layout>
        <Seo title="About"/>
        <Testimonials/>
        <Stats/>
    </Layout>
)


export default About
