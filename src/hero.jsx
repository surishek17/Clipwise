import React from 'react'
import item from './assets/Item.png'
import ScrollBtn from './assets/ScrollBtn.png'
import './hero.css'

 const Hero = () => {
  return (
   <>
   <div className='container-fluid'>
    <div className='row'>
        <div className='col-md-8 mt-5 HeroLeftBox'>
            <div className='row  ms-lg-5'>
                <h3 className='text-light'>Welcome to</h3>
                <h1 className='Heading'>Pop Rock Crystal Shop!</h1>
                 <br/>
                 <span>
                 Here you will find unique phone accessories, crystals,</span>
                 <span>jewellery and more. Free shipping inside the U.S. and our</span>
                 <span>phone grips come with a limited warranty. Enjoy!</span>
                 
            </div >
            <div className='ms-md-5  mt-md-4 ms-lg-5  d-lg-flex d-md-flex d-flex gap-5  mt-lg-5 justify-content-center justify-content-lg-start justify-content-md-start '>
            <div><button className='ShopBtn'>SHOP NOW</button></div>
            <div> <button className='ShopBtn'>About us</button></div>
            </div>
                
            
        </div>
        <div className='col-md-4 mt-4 '>
        <div className="card shadow" style={{width:"100%", height:"22rem"}}>
  <div className="card-body text-center">
   <img className='h-75 img-fluid' src={item}/>

   <p className='card-text text-muted'>CRYSTAL AGATE PHONE GRIP - <span className='fw-bold' style={{color:"#317189"}}>18.99$</span></p>
  </div>
  <div className='NewLot'>New lot</div>
</div>
<nav className="NavBar2 navbar">
        <ul className="pagination justify-content-center">
            <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item active"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">5</a></li>
            <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
        </div>
    </div>
    <div className='row text-center'>
        <div className='col-md-12'>
            <img src={ScrollBtn} className='ScrollBtn'/> <span className='fw-bold ScrollBtn' style={{color:"#317189"}}>scroll down</span>
        </div>
    </div>
    </div>

  
   </>
  )
}

export default Hero;