import React from 'react'

const Footer = () => {
  return (
    <div className='container position-relative pagefooter overflow-hidden '>
      <div className='row position-absolute w-100 p-md-5'>
        <div className='col-12 col-md-7'>
        <img className='footer-logo' height={'50'} src='assets/images/logo.png'/>  
        <p className='text-white footer-text mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis. </p>
        </div>
        <div className='col-12 col-md-5 d-flex align-items-end justify-content-center'>
         <div className='row'>
          <h6 className='ff-bebas text-white text-uppercase footer-text mb-md-3 col-6 col-md-12 '><img className='me-3 otherlogo' src='assets/images/location.png'/>Main Road, Building Name, Country</h6>
          <h6 className='ff-bebas text-white text-uppercase footer-text col-6 col-md-12 '><img className='me-3 otherlogo' src='assets/images/mail.png'/>info@companyname.com</h6>

         </div>
        </div>
      </div>
      <div className='position-absolute bottom-0 w-100 d-flex justify-content-between px-5 '>
        <p className='text-white fs-12 footer-text'>CN 2022.All RIGHTS RESERVED</p>
        <div className=''>
          <img className='me-1 otherlogo' src='assets/images/insta.png'/>
          <img  className='me-1 otherlogo' src='assets/images/facebook.png'/>
          <img  className='me-1 otherlogo' src='assets/images/twitter.png'/>
          <img  className='me-1 otherlogo' src='assets/images/whatsaap.png'/>

        </div>
      </div>
      <img className='w-100 h-100' src='assets/images/footerbackground.png' />
      </div>
  )
}

export default Footer