import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'


export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in PH.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="/home-ivan.webp" alt="Site Banner" style={{ maxWidth: '100%' }}/>
        <p>{ title } - { description }</p>
      </section>
    </Layout>
   )
}


export const query = graphql `
query MyQuery {
  site {
    siteMetadata {
      description
      title
    }
  }
}
`