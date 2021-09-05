// libraries
import * as React from "react"

// components
import Navbar from "./navbar"
import "./layout.scss"

export default function Layout({ children }) {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <main>
        <main>{children}</main>
      </main>
    </div>
  )
}
