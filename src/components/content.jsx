import React from "react";
var contentStyle = require("./content.module.scss");

export default function Content({children}) {
  return (
    <div className={contentStyle.content}>
        {children}
    </div>
  );
}

