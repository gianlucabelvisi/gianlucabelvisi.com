import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero";
import Trips from "../components/Trips";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <Trips/>
  </Layout>
)

export default IndexPage
