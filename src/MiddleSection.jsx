import React from 'react'
import './MiddleSection.css'
import Item from './assets/Item.png'
import Vector from './assets/Vector.png'
import Ellips from './assets/Ellipse.png'
import Ellips2 from './assets/Ellipse2.png'
import Ellips3 from './assets/Ellipse3.png'

const MiddleSection = () => {
  return (
    <>
      <div className='row'>
        <div className='col-md-12'>
          <h2 className='AllProduct mt-5'>All Products</h2>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-md-12 d-flex'>

          <div class="dropdown">
            <span className=' mt-5 ms-5 Filter fw-bold'>Filter:</span>
            <button class="btn btn-secondary dropdown-toggle ms-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              All Products
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>


          <div class="dropdown">
            <span className=' mt-5 ms-5 Filter fw-bold'>Sort:</span>
            <button class="btn btn-secondary dropdown-toggle ms-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Best Selling
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Items */}

      <div className='container-fluid'>
        <div className='row mt-5 p-lg-3 p-md-3'>
          <div className='col-md-3 col-6 p-2'>
            <div className="card h-100 shadow-lg" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <img src={Item} className='img-fluid text-center' />
                <p className='card-text text-muted'>CRYSTAL AGATE PHONE GRIP</p>
                <span className='fw-bold' style={{ color: "#317189" }}>18.99$</span>
                <br />
                <button className='BUYNOWBTN'>BUY NOW</button>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-6 p-2'>
            <div className="card h-100 shadow-lg" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <img src={Item} className='img-fluid text-center' />
                <p className='card-text text-muted'>CRYSTAL AGATE PHONE GRIP</p>
                <span className='fw-bold' style={{ color: "#317189" }}>18.99$</span>
                <br />
                <button className='BUYNOWBTN'>BUY NOW</button>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-6 p-2'>
            <div className="card h-100 shadow-lg" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <img src={Item} className='img-fluid text-center' />
                <p className='card-text text-muted'>CRYSTAL AGATE PHONE GRIP</p>
                <span className='fw-bold' style={{ color: "#317189" }}>18.99$</span>
                <br />
                <button className='BUYNOWBTN'>BUY NOW</button>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-6 p-2'>
            <div className="card h-100 shadow-lg" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <img src={Item} className='img-fluid text-center' />
                <p className='card-text text-muted'>CRYSTAL AGATE PHONE GRIP</p>
                <span className='fw-bold' style={{ color: "#317189" }}>18.99$</span>
                <br />
                <button className='BUYNOWBTN'>BUY NOW</button>
              </div>
            </div>
          </div>
        </div>

        {/* second Layer of items */}
        <div className='row mt-2 p-lg-3 p-md-3 '>
          <div className='col-md-3 col-6 p-2'>
            <div className="card h-100 shadow-lg" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <img src={Item} className='img-fluid text-center' />
                <p className='card-text text-muted'>CRYSTAL AGATE PHONE GRIP</p>
                <span className='fw-bold' style={{ color: "#317189" }}>18.99$</span>
                <br />
                <button className='BUYNOWBTN'>BUY NOW</button>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-6 p-2'>
            <div className="card h-100 shadow-lg" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <img src={Item} className='img-fluid text-center' />
                <p className='card-text text-muted'>CRYSTAL AGATE PHONE GRIP</p>
                <span className='fw-bold' style={{ color: "#317189" }}>18.99$</span>
                <br />
                <button className='BUYNOWBTN'>BUY NOW</button>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-6 p-2'>
            <div className="card h-100 shadow-lg" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <img src={Item} className='img-fluid text-center' />
                <p className='card-text text-muted'>CRYSTAL AGATE PHONE GRIP</p>
                <span className='fw-bold' style={{ color: "#317189" }}>18.99$</span>
                <br />
                <button className='BUYNOWBTN'>BUY NOW</button>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-6 p-2'>
            <div className="card h-100 shadow-lg" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <img src={Item} className='img-fluid text-center' />
                <p className='card-text text-muted'>CRYSTAL AGATE PHONE GRIP</p>
                <span className='fw-bold' style={{ color: "#317189" }}>18.99$</span>
                <br />
                <button className='BUYNOWBTN'>BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='row'>
        <div className='col-md-12 d-flex justify-content-center '>
          <img className='Vector d-none d-lg-block d-md-block' src={Vector} />
          <button className='ShowALLBTN mt-3 '>Show All</button>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6  RightSection'>
          <div className='d-lg-flex d-flex justify-content-center justify-content-lg-end'>
            <h6 className='BESTPRICE'>BEST PRICE</h6>
          </div >
          <div className='d-lg-flex d-flex justify-content-center justify-content-lg-end'>
            <h1 className='PhoneGRIP fw-bold'>Agate Phone Grip</h1>
          </div>


          <br />
          <br />
          <div className=' d-lg-flex d-flex justify-content-center justify-content-lg-end'>
            <span className='DollerPrice'>44.50$</span>
            <h1 className='Doller ms-3 '>19.50$</h1>
          </div>
          <div className='text-lg-end text-center'>
            <span>These Pop Rock Crystal grip tops can be swapped with</span>
            <br />
            <span>other tops depending on your mood, outfit, nails,</span>
            <br />
            <span>phone case, holiday, etc.! Just gently squeeze the sides</span>
            <br />
            <span> to remove and swap out with another color or design!</span>

          </div>
          <div className='d-lg-flex d-flex justify-content-lg-end justify-content-center'>
            <button className='BUYNOWBTN'>BUY NOW</button>
          </div>


        </div>
        <div className='col-md-6 EllipsDiv d-none d-lg-block d-md-block'>
          <img className='img-fluid  Ellip' src={Ellips} />
          <img className='img-fluid mt-5 Ellip2' src={Ellips2} />
          <img className='img-fluid mt-5 Ellip3' src={Ellips3} />

        </div>

      </div>


    </>
  )
}

export default MiddleSection
