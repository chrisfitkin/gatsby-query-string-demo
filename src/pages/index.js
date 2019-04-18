import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Dynamic Content Based on Query String Values</h1>
    <p>
      <strong>GitHub:</strong>{" "}
      <a
        href="https://github.com/chrisfitkin/gatsby-query-string-demo/"
        target="_blank"
      >
        https://github.com/chrisfitkin/gatsby-query-string-demo/
      </a>
    </p>
    <p>
      <strong>Instructions:</strong>{" "}
      <a
        href="https://medium.com/@chrisfitkin/how-to-get-query-string-parameter-values-in-gatsby-f714161104f"
        target="_blank"
      >
        https://medium.com/@chrisfitkin/how-to-get-query-string-parameter-values-in-gatsby-f714161104f
      </a>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ul>
      <li>
        <Link to="/?custom=A">Show A</Link>
      </li>
      <li>
        <Link to="/?custom=B">Show B</Link>
      </li>
      <li>
        <Link to="/?custom=C">Show C</Link>
      </li>
    </ul>
    <hr />
    <p>
      <Link to="/simple?custom=hello">A Simple Example Page</Link>
    </p>
    <hr />
  </Layout>
)

export default IndexPage
