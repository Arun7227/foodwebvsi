import React from 'react'

const Header = () => {
  return (
    <nav className="position-relative bg-main">
    <div className='container-fluid'>
    <div className='w-100'>
      <div className='navbar navbar-expand py-0  w-100 top-0'>
    <a className="navbar-brand my-4" href="#">
      <img className='h-50 w-50' src='assets/images/logo.png'/>
        {/* <h5 className='fs-5'><i className="fa-sharp fa-solid fa-burger"></i>BURGER HOUSE</h5> */}
    </a>
  
  
    <div className="collapse navbar-collapse justify-content-end position-relative" id="navbarSupportedContent">
      
      <div className="c-brown">
        <div className='fw-bold text-end pe-3 my-md-3'>
        <svg className='align-bottom me-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff"  viewBox="0 0 16 16">
  <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z"/>
</svg>          <span className='fs-7'>Express Delivery +1 234 567 890</span>
                </div>
       <ul className='navbar-nav link-container mr-auto  '>
       <li className="nav-item ">
          <a className="nav-link c-brown fs-8 text-nowrap">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link c-brown fs-8 text-nowrap">MENU</a>
        </li>
  
        <li className="nav-item">
          <a className="nav-link c-brown fs-8 text-nowrap" >OUR STORY</a>
        </li>
        <li className="nav-item">
          <a className="nav-link c-brown fs-8 text-nowrap" >CONTACT US</a>
        </li>
       </ul>
      </div>
     
    </div>
    </div>

    </div>


<div className='row'>
  <div className='col-6 col-md-5 position-relative p-1'>
  <div className='position-absolute text-center w-100 p-1 top-35% c-brown'>
  <h6 className='border-dashed-title p-2 d-inline text-nowrap ff-bebas '>It is a good time for the great taste of burgers</h6>
<h1 className='header-title  titleburger mt-2 f-fam-alpha ts-title'>BURGER</h1>
<h1 className=' subtitle-titleburger f-fam-alpha ts-title'>WEEK</h1>
  </div>

  </div>
  <div className='col-6 col-md-7 position-relative'>
    <img src='assets/images/burgerwithprice.png'className='w-100 h-100'/>
    {/* <div className='bg-red rounded-circle p-1 p-md-2 text-white position-absolute text-center price'>
        <div className='rounded-circle border-dashed p-1 p-md-2'>
        <h1 className=' d-inline'>$5</h1><span>.49</span>
        <h2 className='mb-0'>ONLY</h2>

        </div>
    </div> */}
    </div>
</div>
    </div>
  </nav>
  )
}

export default Header