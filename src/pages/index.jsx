import React from "react";
import { useStaticQuery, graphql } from "gatsby";

var contentStyle = require("../components/content.module.scss");

export default function IndexPage() {

    const data = useStaticQuery(
    graphql`
    query {
      markdownRemark {
        html
      }
    }
    `
    );


    return  <div className={contentStyle.mdContent}
                  dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}>
            </div>;

}


