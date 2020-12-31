import React from "react";
var sidebarStyle = require("./sidebar.module.css");

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { open: props.open };
    //this.openSidebar = this.openSidebar.bind(this);
    //this.closeSidebar = this.closeSidebar.bind(this);
  }
  render() {
    return (
      <div
        className={[
          sidebarStyle.sidebar,
          this.props.open ? sidebarStyle.opened : sidebarStyle.closed,
        ].join(" ")}
      >
        <button onClick={this.openSidebar}>open</button>
        <button onClick={this.closeSidebar}>close</button>
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
