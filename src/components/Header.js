import React from 'react'
import img from './Images/nik-z1d-LP8sjuI-unsplash.jpg';

export default function Header() {
  return (
    <header>
      <img src={img} alt='logo'></img>
      <button>Login</button>
    </header>
  )
}
