
import React from 'react'
import Logo from './assets/logo.png'
import './Header.css'

function Header() {
  return (
    <header class="App-header">
        <img src={Logo} class="App-logo" alt="logo" />
        </header>
  )
}

export default Header