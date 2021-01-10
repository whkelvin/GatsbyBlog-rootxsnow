import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Content from "../components/content";
var wrapperStyle = require("./wrapper.module.scss");

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sidebarOpened: false };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Navbar toggleSidebar={this.toggleSidebar}></Navbar>
        <div className={wrapperStyle.wrapper}>
            <Sidebar open={this.state.sidebarOpened}></Sidebar>
            <Content>{this.props.children}</Content>
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
}

export default Layout;
