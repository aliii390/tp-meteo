
import React from 'react'
import Logo from './assets/logo.png'
import './Header.css'

function Header() {
  return (
    <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        </header>
  )
}

export default Header