import React from 'react'

const Home = () => {
  return (
    <div className='container mt-5'>
      <div className='row mb-5'>  

        <div className='col-12 col-md-6 p-2'>
          <div className='position-relative'>
            <div className='position-absolute text-white mt-4 ms-4'>
          <h6 className='fw-bold mb-1 ff-bebas'>TRY IT TODAY</h6>
          <h4 className='fw-bold ff-bebas'>MOST POPULAR BURGER</h4>
            </div>
          <img className='w-100 h-sm-235' height='365' src='assets/images/burger21.png'/>

          </div>
        </div>
        <div className='col-12 col-md-6 p-2'>
          <div className=' position-relative mb-3'>
          <div className='position-absolute text-white mt-4 ms-4'>
          <h6 className='fw-bold mb-1 ff-bebas'>TRY IT TODAY</h6>
          <h4 className='fw-bold mb-1 ff-bebas'>MORE FUN</h4>
          <h4 className='fw-bold fs-bebas'>MOST TASTE</h4>

            </div>
          <img className='w-100'height='173' src='assets/images/burger22.png'/>

          </div>
          <div className='mt-1 position-relative'>
          <div className='position-absolute text-white mt-4 ms-4'>
          <h6 className='fw-bold mb-1 ff-bebas'>TRY IT TODAY</h6>
          <h4 className='fw-bold ff-bebas'>FRESH & CHILLI</h4>
            </div>
          <img className='w-100' height='173' src='assets/images/burger23.png'/>

          </div>
          </div>
      </div>
      <div className='text-center c-brown mb-5'>
        <div className=''>
        <span className='d-inline-block p-3  bg-main  ff-bebas fs-5 mb-3'>
          ALWAYS TASTY BURGER
        </span>

        </div>
        <h1 className='f-fam-alpha mb-4'>CHOOSE & ENJOY</h1>
        <p className='fw-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
      </div>
      <div className='row'>
        <div className='col-12 col-md-4 text-center c-brown mb-5'>
          <div className=''>
            <img className='w-100' height='215' src='assets/images/burger31.png'/>

          </div>
          <h5 className='fw-bold fs-4 ff-bebas'>Lorem ipsum dolor</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
             <button className='btn bg-red text-white p-3 px-4 fw-bold f-fam-alpha'>ORDER NOW</button>
    
        </div>
        <div className='col-12 col-md-4 text-center c-brown mb-5'>
          <div className=''>
            <img className='w-100'height='215' src='assets/images/burger32.png'/>

          </div>
          <h5 className='fw-bold fs-4 ff-bebas'>Lorem ipsum dolor</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
             <button className='btn bg-red text-white p-3 px-4 fw-bold f-fam-alpha'>ORDER NOW</button>
    
        </div>
        <div className='col-12 col-md-4 text-center c-brown mb-5'>
          <div className=''>
            <img className='w-100'height='215' src='assets/images/burger31.png'/>

          </div>
          <h5 className='fw-bold fs-4 ff-bebas'>Lorem ipsum dolor</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
             <button className='btn bg-red text-white p-3 px-4 fw-bold f-fam-alpha'>ORDER NOW</button>
    
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-12 col-md-6'>
          <h6 className='fw-bold'>DISCOVER</h6>
        <h2 className='f-fam-alpha c-brown'>UPCOMMING EVENTS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
        <div className='col-12 col-md-6'>
          <img className='w-100 h-100' src='assets/images/burgercardimage.png'/>
        </div>
      </div>
      <div className='text-center mb-5'>
      <h6 className='fw-bold c-brown text-uppercase'>Reservation</h6>
        <h2 className='f-fam-alpha c-brown text-uppercase fs-2 mb-5'>Book your table</h2>
        <div className='row justify-content-center'>
          <div className='col-md-7'>
            <div className='row table-form'>
              <div className='col-12 col-md-6'>
                <div>
                  <input type={'text'} className='bg-main form-control mb-3 p-2' placeholder='NAME' />
                </div>
                <div>
                  <input type={'date'} className='bg-main form-control mb-3 p-2' placeholder='DATE' />
                </div>
                <div>
                  <input type={'text'} className='bg-main form-control mb-3 p-2' placeholder='PEOPLE' />
                </div>
              </div>
              <div className='col-12 col-md-6'>
              <div>
                  <input type={'email'} className='bg-main form-control mb-3 p-2' placeholder='EMAIL' />
                </div>
                <div>
                  <input type={'time'} className='bg-main form-control mb-3 p-2' placeholder='TIME' />
                </div>
                <div>
                <button className='btn bg-red text-white py-2 fw-bold f-fam-alpha d-block w-100'>FIND A TABLE</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home