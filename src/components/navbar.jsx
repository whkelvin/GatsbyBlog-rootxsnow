import React from "react";
import { FaBars} from 'react-icons/fa';


var navbarStyle = require("./navbar.module.scss");


class Navbar extends React.Component {
  render() {
    return (
      <div className={navbarStyle.navbar}>
        <div className={navbarStyle.iconWrapper} >
            <FaBars className={navbarStyle.icon} onClick={this.props.toggleSidebar}/>
        </div>

        <div className={navbarStyle.nameTag}>
            <div className={navbarStyle.wrapper}>
                <div className={navbarStyle.name}>Root</div>
                <div className={navbarStyle.domain}>@rootxsnow</div>
            </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
