import React from "react";
import { graphql } from "gatsby";
import Content from "../components/content";

var contentStyle = require("../components/content.module.scss");

export default function gnomeDesktopEnvironment({ data }) {
    console.log(data);
    return (
        <Content>
            <div
                className={contentStyle.mdContent}
                dangerouslySetInnerHTML={{
                    __html: data.allMarkdownRemark.edges[0].node.html,
                }}
            ></div>
        </Content>
    );
}

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: {
                frontmatter: { link: { eq: "/gnomeDesktopEnvironment" } }
            }
        ) {
            edges {
                node {
                    html
                }
            }
        }
    }
`;
