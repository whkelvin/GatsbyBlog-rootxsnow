import React from "react";
var sidebarStyle = require("./sidebar.module.css");

class Sidebar extends React.Component {
  render() {
    return (
      <div
        className={[
          sidebarStyle.sidebar,
          this.props.open ? sidebarStyle.opened : sidebarStyle.closed,
        ].join(" ")}
      >
      </div>
    );
  }
  //openSidebar() {
  //  this.setState({ open: true });
  //}

  //closeSidebar() {
  //  this.setState({ open: false });
  //}
}

export default Sidebar;
