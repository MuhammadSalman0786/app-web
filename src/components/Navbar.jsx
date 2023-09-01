import React from 'react'
import {BiRegistered} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {TfiWorld} from 'react-icons/tfi'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=' px-10 bg-[#00193C]'>

      <div className='max-w-7xl h-24 items-center justify-between m-auto flex'>
      <Link to="/">
      <svg width="107" height="27" viewBox="0 0 107 27" xmlns="http://www.w3.org/2000/svg" role="img" className ="inverted logo" data-v-a654dca0=""><g fill="none" data-v-a654dca0=""><path d="M28.204 7.28h-3.907a.217.217 0 0 0-.212.158l-3.677 13.077-3.749-13.077a.217.217 0 0 0-.211-.159H12.32a.217.217 0 0 0-.211.16L8.405 20.514 4.727 7.438a.217.217 0 0 0-.212-.159H.61a.218.218 0 0 0-.212.283L5.724 25.65a.217.217 0 0 0 .211.159h4.86a.217.217 0 0 0 .211-.159l3.378-11.965 3.378 11.965a.217.217 0 0 0 .212.159h4.894a.217.217 0 0 0 .212-.159l5.327-18.088a.213.213 0 0 0-.203-.283zm10.583 14.973h-1.244c-.917 0-1.543-.67-1.543-1.518V.221A.218.218 0 0 0 35.78 0h-3.863a.218.218 0 0 0-.22.22v20.656c0 1.818.484 3.08 1.41 3.953.917.865 2.24 1.315 3.837 1.315h1.843c.123 0 .22-.097.22-.22v-3.45a.224.224 0 0 0-.22-.221zM67.335 7.279h-3.907a.217.217 0 0 0-.212.16l-3.678 13.076L55.8 7.438a.217.217 0 0 0-.212-.159H51.46a.217.217 0 0 0-.212.16l-3.713 13.076-3.668-13.077a.217.217 0 0 0-.212-.159h-3.907a.218.218 0 0 0-.212.283l5.327 18.088a.217.217 0 0 0 .212.159h4.86a.217.217 0 0 0 .21-.159l3.379-11.965L56.9 25.65a.217.217 0 0 0 .212.159h4.895a.217.217 0 0 0 .211-.159l5.327-18.088a.218.218 0 0 0-.211-.283zm19.825 5.4a9.927 9.927 0 0 1 9.146-6.061H80.872c-5.477 0-9.922 4.447-9.922 9.926 0 5.48 4.445 9.927 9.922 9.927h15.434c-5.477 0-9.922-4.447-9.922-9.927a9.757 9.757 0 0 1 .776-3.865z" fill="#fff" data-v-a654dca0=""></path><circle fill="#89BA17" cx="96.3" cy="16.541" r="9.925" shapeRendering="geometricPrecision" data-v-a654dca0=""></circle></g></svg>
      </Link>


      <div>


        <ul className='flex gap-6 text-white h-24'>

        
            <li className=' flex relative cursor-pointer group'>  <span className='flex gap-1 font-bold items-center '><BiRegistered className='text-3xl'/><span className="hidden lg:block">Register your company</span></span>
            <div className='hidden z-[9999] absolute w-96 lg:right-[-80px] right-0 top-[100px] shadow-md rounded-lg bg-white text-sm  text-black  p-8 group-hover:hidden lg:group-hover:block'>
              <span className='font-bold text-lg'>Start your business</span>
              <ul className='list-disc m-4'>
                <li className='mt-2'>Optimal Internet presence for your company</li>
                <li className='mt-2'>wlw is the leading B2B market place</li>
                <li className='mt-2'>Qualified business customer contacts only</li>
              </ul>
             <Link to='/supplier'> <button className='bg-[#0060df] hover:bg-[#003891] w-full p-2 text-white font-bold my-7 text-base rounded-lg'>Register Now</button></Link>
            </div>
            </li>
           
            
            <li className='flex cursor-pointer group'>  <span className='flex gap-1 font-bold items-center '><AiOutlineUser className='text-2xl'/> <span className='hidden lg:block'>Login</span></span>
            <div className='hidden absolute z-[9999] shadow-md  w-96 right-[200px] top-[100px] rounded-lg bg-white text-sm  text-black  p-8 group-hover:hidden lg:group-hover:block '>
              <span className='font-bold text-lg'>Admin login</span>
              <Link to='/login'><button className='bg-[#0060df] w-full p-2 hover:bg-[#003891] text-white font-bold my-7 text-base rounded-lg'>Login</button></Link>
              <hr />
              <span className='font-bold text-lg mt
              -15'>New here? Register as...</span>

              <div className="buttons flex gap-5">
              <Link to='/buyer' className='bg-transparent border-2 border-blue-800 w-64 text-center  p-2 text-[#0060df] hover:text-[#304a79] font-bold my-7 text-base rounded-lg'><button className=''> Buyer</button></Link>
                <Link to='/supplier' className='bg-transparent border-2 border-blue-800 w-64 text-center  p-2 hover:text-[#304a79] text-[#0060df] font-bold my-7 text-base rounded-lg'><button className='' >Supplier</button></Link>
              </div>
           
             
            </div>
            </li>





            <li className=' cursor-pointer hidden lg:flex font-bold group '> <span className='flex gap-1 items-center'><TfiWorld className='text-2xl'/><span className='hidden lg:block'>EN</span></span>
            <div className=' absolute shadow-md w-44 h-44 top-[100px] z-[9999] right-[250px] hidden rounded-lg bg-white text-black group-hover:hidden lg:group-hover:block'>
              <span className='text-center'>Language Section</span>
              <div className='flex justify-center items-center flex-col'>
                <span> <input type="radio" name='English' value='English' />English</span>
              
             <span> <input type="radio" name='English' value='English' />English</span>
             <span> <input type="radio" name='English' value='' />English</span>
              </div>
              
              
              </div>
              </li>
            
            
            
        </ul>
      </div>
      </div>
    </nav>
  )
}


export default Navbar
