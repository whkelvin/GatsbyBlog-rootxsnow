import React from "react";
var sidebarStyle = require("./sidebar.module.scss");

class Sidebar extends React.Component {
  render() {
    return (
      <div
        className={[
          sidebarStyle.sidebar,
          this.props.open ? sidebarStyle.opened : sidebarStyle.closed,
        ].join(" ")}
      >
          <div className={[sidebarStyle.sidebarContent, 
                            this.props.open ? sidebarStyle.showSidebarContent : sidebarStyle.hideSidebarContent].join(" ")}>
            施工中
          </div>
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
