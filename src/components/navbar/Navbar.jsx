// rafce
import React from 'react'
import Logo from './Logo'
import Searchbar from './Searchbar'
import DropdownListManu from './DropdownListManu'

const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-col items-center
        py-4  justify-between sm:flex-row gap-4"> 
        <Logo/>
        <Searchbar/>
        <DropdownListManu/>
        </div>
    </nav>
  )
}

export default Navbar