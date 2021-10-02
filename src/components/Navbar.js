import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';


const Navbar = () => {
    const data = useStaticQuery(graphql`
        query siteInfo {
            site {
                siteMetadata {
                    description
                    title
                }
            }
        }
    `);

    const { title } = data.site.siteMetadata;
    return (
        <nav>
            <h1>{ title }</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Protofolio Projects</Link>
            </div>
        </nav>
    )
}




export default Navbar;