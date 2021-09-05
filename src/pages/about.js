// libraries
import * as React from "react"
import { Link } from "gatsby"

// components
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About Page - Todo App, Gatsby Netlify FaunaDB" />
    <div className="container  my-5">
      <div className="container">
        <h1>About Page</h1>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default AboutPage
