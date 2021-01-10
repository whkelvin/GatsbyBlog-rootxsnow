import React from "react";
import { useStaticQuery, graphql } from "gatsby";

var contentStyle = require("../components/content.module.scss");

export default function IndexPage() {

    const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { id: { eq: "80fedd98-bad7-5dee-9ba8-73ba29e87fb7" } }
        ) {
          nodes {
            html
          }
        }
      }
    `
    );

    return  <div>hello</div>;
//<div className={contentStyle.mdContent}
//                  dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.nodes[0].html}}>
//            </div>;

}


