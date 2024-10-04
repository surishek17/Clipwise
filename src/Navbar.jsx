import React from 'react'
import './App.css'
import ion_basket from './assets/ion_basket.png'
import logo from './assets/logo.png'
import Hero from './hero'
import HeroDesign from './assets/HeroDesign.png'

const Navbar = () => {
  return (
    <>
    <div className='row'>
        <div className='col-md-12'>
         <img className='HeroDesign' src={HeroDesign} />
        </div>
    </div>

<div className='container-fluid'>
     <nav className="navbar NavBar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img  src={logo} />
        <span className='ms-2 text-light'>Pop Rock Crystal</span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end " id="navbarNav">
      <ul className="navbar-nav gap-lg-5  NavBarItems">
        <li className="nav-item">
          <a className="nav-link text-light  fw-bold" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light  fw-bold" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fw-bold" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fw-bold" href='#'>Disabled</a>
        </li>
      </ul>
      <div className='Cart me-2'>00</div>
      <div>
      <img src={ion_basket} className=''/>
      </div>
      
    </div>
  </div>
</nav>
</div>
<Hero/>
    </>
  )
}

export default Navbar