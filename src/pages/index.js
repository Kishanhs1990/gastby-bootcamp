import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const HomePage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h1>I'm Kishan, a Software Engineer </h1>
      <h2>
        Need a developer ? <Link to="/contact">Contact me.</Link>{" "}
      </h2>
    </Layout>
  )
}

export default HomePage
