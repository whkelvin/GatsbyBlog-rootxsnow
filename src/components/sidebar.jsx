import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

var sidebarStyle = require("./sidebar.module.scss");

export default function Sidebar(props) {
    return (
        <StaticQuery
            query={graphql`
                query MyQuery {
                    site(siteMetadata: { menuLinks: {}, title: {} }) {
                        siteMetadata {
                            menuLinks {
                                link
                                name
                            }
                        }
                    }
                }
            `}
            render={(data) => (
                <div
                    className={[
                        sidebarStyle.sidebar,
                        props.open ? sidebarStyle.opened : sidebarStyle.closed,
                    ].join(" ")}
                >
                    <div
                        className={[
                            sidebarStyle.sidebarContent,
                            props.open
                                ? sidebarStyle.showSidebarContent
                                : sidebarStyle.hideSidebarContent,
                        ].join(" ")}
                    >
                        <ul
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                flex: 1,
                            }}
                        >
                            {data.site.siteMetadata.menuLinks.map((link) => (
                                <li
                                    key={link.name}
                                    style={{
                                        listStyleType: `none`,
                                        padding: `1rem`,
                                    }}
                                >
                                    <Link
                                        style={{ color: `white` }}
                                        to={link.link}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        />
    );
    //openSidebar() {
    //  this.setState({ open: true });
    //}

    //closeSidebar() {
    //  this.setState({ open: false });
    //}
}
