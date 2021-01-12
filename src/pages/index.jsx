import React from "react";
import { useStaticQuery, graphql } from "gatsby";

var contentStyle = require("../components/content.module.scss");

export default function IndexPage({ data }) {

    return  <div className={contentStyle.mdContent}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
                <h3>
                    {node.frontmatter.title}{" "}
                    <span>
                        — {node.frontmatter.date}
                    </span>
                </h3>
                <p>{node.excerpt}</p>
            </div>
        ))}
    </div>;

}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`


