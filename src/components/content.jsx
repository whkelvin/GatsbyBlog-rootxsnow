import React from "react"
var contentStyle = require("./content.module.css")

class Content extends React.Component{
    render(){
        return (
            <div className={contentStyle.content}>
                hello
            </div>
        )
    }

}

export default Content;
