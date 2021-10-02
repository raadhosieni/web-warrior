import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import * as styles from '../../styles/projects.module.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Home = ({ data }) => {
    console.log(data);
    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;
    console.log(projects);
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Portofolio</h2>
                <h3>Projects & Websites I've Created</h3>
                <div className={styles.projects}>
                    {projects.map(project => {
                        const image = getImage(project.frontmatter.thumb);
                        return (
                            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                                <div>
                                    <GatsbyImage image={image} />
                                    <h3>
                                        {project.frontmatter.title}
                                    </h3>
                                    <p>
                                        {project.frontmatter.stack}
                                    </p>
                                </div>
                            </Link>
                        )
                        
                    })}
                </div>
                <p>Like what you see? Email me at { contact } for a quote!</p>
            </div>
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;

export default Home;