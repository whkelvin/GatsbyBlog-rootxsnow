import React from "react";
var navbarStyle = require("./navbar.module.scss");

class Navbar extends React.Component {
  render() {
    return (
      <div className={navbarStyle.navbar}>
        <button onClick={this.props.toggleSidebar}>click me</button>
      </div>
    );
  }
}

export default Navbar;
