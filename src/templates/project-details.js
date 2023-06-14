import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/project-details.module.css'


export default function ProjectDetails({data}) {
  return (
    <Layout>
        <div className={styles.details}>
            <h2>title</h2>
            <h3>stack</h3>
            <div className={styles.featured}>
                {/* <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} alt="featured image" /> */}
            </div>
            {/* <div class={styles.html} dangerouslySetInnerHTML={{ __html: html }} /> */}
        </div>
    </Layout>
  )
}
