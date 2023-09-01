import React, {useState} from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {

    const [show , setShow] = useState(false);
    const [show1 , setShow1] = useState(false);

  return (
    <footer className='max-w-7xl m-auto '>

        <div className='  flex lg:flex-row flex-col lg:justify-between m-3 items-center justify-center lg:gap-5 gap-3'>
        <div className='flex items-center gap-4'>
            <span>Follow us on:</span>
            <div className='flex gap-4'>
               <Link to=""><AiFillFacebook className='text-xl'/> </Link> 
                <Link to=""><AiFillLinkedin className='text-xl'/></Link>
                <Link to=""><BsYoutube className='text-xl'/></Link>
            </div>
        </div>
        <div>
          <Link to='/supplier' >  <button className='bg-[#0060df] text-white px-3 py-2 hover:bg-[#003891] font-bold rounded'>Register your company</button></Link>
          <Link to='/login'>  <button className='p-3 font-bold text-[#2164A6]'>Login</button></Link>
        </div>
        </div>

{/* middle div */}
        <div className='flex lg:flex-row flex-col justify-between lg:m-3 my-2 border-t-2 max-w-5xl'>

            <div className='flex m-7 flex-col gap-5' onClick={()=>{ setShow(!show) }}>
                <span className='font-bold'>“Wer liefert was”</span>
                <div className={`lg:block ${show? 'block' : 'hidden'}` }>
                <ul className='flex flex-col gap-3'>
                    <Link to="/account"><li className='hover:underline'>wlw-App</li></Link>
                    <Link to=""><li className='hover:underline'>About us</li></Link>
                    <Link to=""><li className='hover:underline'>Whistleblower protection</li></Link>
                    <Link to=""><li className='hover:underline'>Support</li></Link>
                    <Link to=""><li className='hover:underline'>Press</li></Link>
                </ul>
                </div>
            </div>


            <div className='flex m-7 flex-col gap-5' onClick={()=>{ setShow1(!show1) }} >
                <span  className='font-bold '>More about Visable</span>
               <div className={`lg:block ${show1? 'block' :'hidden'}`}>
               <ul className='flex flex-col gap-3' >
                    <Link to=""><li  className='hover:underline'  >Our offers</li></Link>
                    <Link to=""><li  className='hover:underline'>Customers voices</li></Link>
                    <Link to=""><li  className='hover:underline'>Support</li></Link>
                    <Link to=""><li  className='hover:underline'>Partner programme</li></Link>
                    <Link to=""><li  className='hover:underline'>careers</li></Link>
                </ul>
               </div>
            </div>


            <div className='m-7' >
                <span className='font-bold'> wlw – Simple. Better. Sourcing. </span>
            </div>
        </div>

        <div className='flex lg:justify-between justify-start flex-col lg:flex-row border-t-2  lg:items-center'>
            <div className='flex m-7 gap-5'>
            <svg width="107" height="27" viewBox="0 0 107 27" xmlns="http://www.w3.org/2000/svg" role="img" className ="inverted logo" data-v-a654dca0=""><g fill="none" data-v-a654dca0=""><path d="M28.204 7.28h-3.907a.217.217 0 0 0-.212.158l-3.677 13.077-3.749-13.077a.217.217 0 0 0-.211-.159H12.32a.217.217 0 0 0-.211.16L8.405 20.514 4.727 7.438a.217.217 0 0 0-.212-.159H.61a.218.218 0 0 0-.212.283L5.724 25.65a.217.217 0 0 0 .211.159h4.86a.217.217 0 0 0 .211-.159l3.378-11.965 3.378 11.965a.217.217 0 0 0 .212.159h4.894a.217.217 0 0 0 .212-.159l5.327-18.088a.213.213 0 0 0-.203-.283zm10.583 14.973h-1.244c-.917 0-1.543-.67-1.543-1.518V.221A.218.218 0 0 0 35.78 0h-3.863a.218.218 0 0 0-.22.22v20.656c0 1.818.484 3.08 1.41 3.953.917.865 2.24 1.315 3.837 1.315h1.843c.123 0 .22-.097.22-.22v-3.45a.224.224 0 0 0-.22-.221zM67.335 7.279h-3.907a.217.217 0 0 0-.212.16l-3.678 13.076L55.8 7.438a.217.217 0 0 0-.212-.159H51.46a.217.217 0 0 0-.212.16l-3.713 13.076-3.668-13.077a.217.217 0 0 0-.212-.159h-3.907a.218.218 0 0 0-.212.283l5.327 18.088a.217.217 0 0 0 .212.159h4.86a.217.217 0 0 0 .21-.159l3.379-11.965L56.9 25.65a.217.217 0 0 0 .212.159h4.895a.217.217 0 0 0 .211-.159l5.327-18.088a.218.218 0 0 0-.211-.283zm19.825 5.4a9.927 9.927 0 0 1 9.146-6.061H80.872c-5.477 0-9.922 4.447-9.922 9.926 0 5.48 4.445 9.927 9.922 9.927h15.434c-5.477 0-9.922-4.447-9.922-9.927a9.757 9.757 0 0 1 .776-3.865z" fill="#00193C" data-v-a654dca0=""></path><circle fill="#89BA17" cx="96.3" cy="16.541" r="9.925" shapeRendering="geometricPrecision" data-v-a654dca0=""></circle></g></svg>
            <div className=' border-l-2'>
                <span className='flex text-xs p-2'>B2B marketplace of Visable</span>
            </div>
            </div>
            

            <div>
                <ul className='flex ms-10 gap-4 lg:flex-row justify-start flex-col'>
                    <Link href=""><li className='hover:underline'>Terms and Conditions</li></Link>
                    <Link href=""><li className='hover:underline'>Terms of Use</li></Link>
                    <Link href=""><li className='hover:underline'>Data Privacy</li></Link>
                    <Link href=""><li className='hover:underline'>Imprint</li></Link>
                </ul>
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
