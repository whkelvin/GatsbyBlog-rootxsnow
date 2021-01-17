import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
var wrapperStyle = require("./wrapper.module.scss");

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sidebarOpened: false };
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.closeSidebar = this.closeSidebar.bind(this);
    }

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <Navbar toggleSidebar={this.toggleSidebar}></Navbar>
                <div className={wrapperStyle.wrapper}>
                    <Sidebar
                        isOpen={this.state.sidebarOpened}
                        closeSidebar={this.closeSidebar}
                    ></Sidebar>
                    {this.props.children}
                </div>
            </div>
        );
    }

    toggleSidebar() {
        this.setState(
            (prevState) => ({ sidebarOpened: !prevState.sidebarOpened }),
            () => {
                console.log(this.state.sidebarOpened);
            }
        );
    }

    closeSidebar() {
        this.setState(
            (prevState) => ({ sidebarOpened: false }),
            () => {
                console.log(this.state.sidebarOpened);
            }
        );
    }
}

export default Layout;
