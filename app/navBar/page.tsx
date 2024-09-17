import React from 'react'
import Link from "next/link"

const NavBar = () => {
  return (
    <div>
      <div className="head">
        <Link href="/" className="navbar">Home</Link>
        <Link href="/about" className="navbar">About</Link>
        <Link href="/education" className="navbar">Education</Link>
        <Link href="/contact" className="navbar">Contact</Link>
      </div>
    </div>
  )
}

export default NavBar
