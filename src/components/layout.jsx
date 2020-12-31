import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Content from "../components/content";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sidebarOpened: true };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Navbar toggleSidebar={this.toggleSidebar}></Navbar>
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            height: "100%",
          }}
        >
          <Sidebar open={this.state.sidebarOpened}></Sidebar>
          <Content></Content>
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
