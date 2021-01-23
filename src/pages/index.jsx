import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Content from "../components/content";

var contentStyle = require("../components/content.module.scss");

export default function IndexPage({ data }) {
  return <Content>首頁施工中....</Content>;
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
`;
