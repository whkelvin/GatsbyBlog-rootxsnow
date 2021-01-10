import React from "react";
import { useStaticQuery, graphql } from "gatsby";

var contentStyle = require("./content.module.scss");

export default function Content({children}) {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { id: { eq: "d4a3342b-13da-54b0-abf3-c464d098b3b6" } }
        ) {
          nodes {
            html
          }
        }
      }
    `
  );

  return (
    <div className={contentStyle.content}>
        {children}
    </div>
  );
}

//<div className={contentStyle.mdContent}
//        dangerouslySetInnerHTML={{
//          __html: data.allMarkdownRemark.nodes[0].html,
//        }}
//      >

