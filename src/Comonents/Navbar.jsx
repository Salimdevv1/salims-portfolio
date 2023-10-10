import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ModalComp from './ModalComp'

export default function Navbar() {
    const [show , setShow] =  useState(false)
    const [visible , setVisible] = useState(false)
    const click = ()=>{
        setVisible(!visible)
    }
  return (
    <div>
        <header className='header slide-left' >
            <nav className='navbar'>
                <p className='nav-title'>Salim's Portfolio</p>
            </nav>
            <div className="items">
                <a href="#">
                    Home
                </a>
                <AnchorLink href='#about'>About</AnchorLink>
                <AnchorLink href='#hire'>Contact</AnchorLink>
            </div>
            <div className='active'>
            <button onClick={()=>setVisible(true)} className='nav-menu'><box-icon name='list-ul'></box-icon></button>
            </div>
            <ModalComp show={show} setShow={setShow}  click={click} visible={visible} setVisible={visible} ></ModalComp>
        </header>
    </div>
  )
}
