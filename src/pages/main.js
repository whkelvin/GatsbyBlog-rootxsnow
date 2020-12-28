import React from "react"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import Content from "../components/content"

export default function Main() {
  return (
    <div style={{display:"flex", flexDirection:"column", height:"100%"}}>
        <Navbar></Navbar>      
        <div style={{ flexGrow:1, display:"flex", flexDirection:"row" }}>
            <Sidebar></Sidebar>
            <Content></Content>
        </div>
    </div>
  )
}
