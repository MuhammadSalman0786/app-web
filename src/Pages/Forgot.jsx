import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Forgot = () => {

  const [input , setInput] = useState({email : ""})
  
  
  
  const submitHandler = (event)=>{
    event.preventDefault();
    alert(input.email)
  }
  
  
  const changeHandler = (event)=>{
    setInput({...input, [event.target.name] : event.target.value})
  }
   

  return (
    <div className='flex justify-center items-center w-screen bg-[#F3F4F5]'>

      <div className=' bg-white p-5 shadow-md rounded-md m-20 w-[20%] h-auto'>
        <h2 className='font-medium text-2xl mb-5'>Forgot password?</h2>
        <p className='text-sm'>Enter the e-mail address you have already confirmed. We will then send you an e-mail with a link to change your password.</p>



        <form onSubmit={submitHandler} className='mt-2 flex flex-col gap-4 ' action="">
          <div className='flex flex-col'>
            <label className='text-sm font-medium mb-1'  htmlFor="email">E-mail address</label>
            <input onChange={changeHandler} className='border-2 p-1 rounded-sm' name='email' id='email' type="email" />
          </div >
         
          <button className='bg-[#0060df] text-white p-2 hover:bg-[#003891] w-20 ms-auto rounded-md font-bold'>Submit</button>
          </form>
         
      </div>


    </div>

  )
}

export default Forgot
