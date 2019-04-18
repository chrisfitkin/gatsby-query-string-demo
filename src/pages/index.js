import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Superman from "../components/superman"
import Batman from "../components/batman"
import WonderWoman from "../components/wonderWoman"
import SEO from "../components/seo"
import withLocation from "../components/withLocation"

const IndexPage = ({ search }) => {
  const { hero } = search
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Dynamic Content Based on Query String Values</h1>
      <p>
        <strong>GitHub:</strong>{" "}
        <a
          href="https://github.com/chrisfitkin/gatsby-query-string-demo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/chrisfitkin/gatsby-query-string-demo/
        </a>
      </p>
      <p>
        <strong>Instructions:</strong>{" "}
        <a
          href="https://medium.com/@chrisfitkin/how-to-get-query-string-parameter-values-in-gatsby-f714161104f"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://medium.com/@chrisfitkin/how-to-get-query-string-parameter-values-in-gatsby-f714161104f
        </a>
      </p>
      <h3>Who is your favorite hero?</h3>
      <ul>
        <li>
          <Link to="?hero=superman">Superman</Link>
        </li>
        <li>
          <Link to="?hero=batman">Batman</Link>
        </li>
        <li>
          <Link to="?hero=wonder_woman">Wonder Woman</Link>
        </li>
      </ul>
      {hero && <h3>{hero}</h3>}
      <div style={{ maxHeight: `400px`, marginBottom: `1.45rem` }}>
        {(() => {
          switch (hero) {
            case "superman":
              return <Superman />
            case "batman":
              return <Batman />
            case "wonder_woman":
              return <WonderWoman />
          }
        })()}
      </div>
      <hr />
      <p>
        <Link to="simple?custom=hello">A Simple Example Page</Link>
      </p>
      <hr />
    </Layout>
  )
}

export default withLocation(IndexPage)
