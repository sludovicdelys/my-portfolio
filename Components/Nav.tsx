import React from 'react'

const Nav = () => {
  return (
    <nav className="md:ml-auto">
        <ul className="flex flex-wrap items-center text-base justify-center">
            <li><a className="mr-5 hover:text-purple-800" href="/home">Home</a></li>
            <li><a className="mr-5 hover:text-purple-800" href="/about">About</a></li>
            <li><a className="mr-5 hover:text-purple-800" href="/projects">Projects</a></li>
            <li><a className="mr-5 hover:text-purple-800" href="/contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Nav