import React, { useState } from 'react'

const Account = () => {

    const [input , setInput] = useState({})
  
  
  
    const submitHandler = (event)=>{
      event.preventDefault();
      alert(input.date)
    }
    
    
    const changeHandler = (event)=>{
      setInput({...input, [event.target.name] : event.target.value})
    }
    return (



        <div className='flex justify-center bg-[#F3F4F5]'>
            <div  className='bg-white p-5 flex flex-col m-10  gap-6 rounded-md border-2 md:w-100% lg:w-[40%]'>
                <h3 className='text-lg font-medium'>My Account</h3>

                <div className='flex gap-4'>
                    <div className='rounded-full w-24 h-24'>
                        <img src="" alt="avatar" />
                    </div>
                    <button className='bg-purple-900 h-10 p-2 text-sm text-white'>Upload Avatar</button>
                </div>




                <form onSubmit={submitHandler} className=' w-full md:w-full flex flex-col gap-3'>




                    <div className=' w-full rounded-md flex flex-col p-1 '>
                        <label className='text-xs ml-1' htmlFor="fname">First Name</label>
                        <input name='firstName' required className='border-2 rounded-md focus:shadow-md p-1 focus:outline-none mt-2' id='fname outline-none' type="text" />
                    </div>


                    <div className='  w-full rounded-md flex flex-col p-1 '>
                        <label className='ml-1 text-xs' htmlFor="lname ">Last Name</label>
                        <input name='lastName' required className='border-2 rounded-md focus:shadow-md p-1 focus:outline-none mt-2' id='lname' type="text" />
                    </div>

                    <div className='flex flex-col gap-3'>
                        <div className=' flex rounded-md p-1 flex-col' >
                            <label className='text-xs ml-1' htmlFor="email">Phone</label>
                            <input name='email' required className='border-2 rounded-md focus:shadow-md p-1 max-w-auto mt-2 focus:outline-none' id='email' type="number" />
                        </div>

                        <div className=' flex rounded-md p-1 flex-col' >
                            <label className='text-xs ml-1' htmlFor="date">Date of birth</label>
                            <input  name='date' required className='border-2 rounded-md focus:shadow-md p-1 mt-2 focus:outline-none' id='dete'  type="date" onChange={changeHandler}  />

                        </div>
                    </div>

                    <div className='w-full  rounded-md flex flex-col p-1 '>
                        <label className='text-xs ml-1' htmlFor="email">Gender</label>
                        <select className='text-sm border-2 p-1 mt-2' name="" id="">
                            <option value="gender">~Select~</option>
                            <option value="male">Male</option>
                            <option value="female">female</option>
                        </select>
                    </div>


                    <div className=' rounded-md flex p-1 '>
                        <div className='flex flex-col'>
                            <label className='text-xs ml-1' htmlFor="fname">Country</label>
                            <input name='firstName' required className='border-2 w-[70%] rounded-md focus:shadow-md p-1 focus:outline-none mt-2' id='fname outline-none' type="text" />

                        </div>
                        <div className='flex flex-col'>
                            <label className='text-xs ml-1' htmlFor="fname">State</label>
                            <input name='firstName' required className='border-2 w-[70%] rounded-md focus:shadow-md p-1 focus:outline-none mt-2' id='fname outline-none' type="text" />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-xs ml-1' htmlFor="fname">City</label>
                            <input name='firstName' required className='border-2 w-[70%] rounded-md focus:shadow-md p-1 focus:outline-none mt-2' id='fname outline-none' type="text" />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-xs ml-1' htmlFor="fname">Zip code</label>
                            <input name='firstName' required className='border-2 w-[70%] rounded-md focus:shadow-md p-1 focus:outline-none mt-2' id='fname outline-none' type="text" />
                        </div>

                    </div>

                    <div className=' w-full rounded-md flex flex-col p-1 '>
                        <label className='text-xs ml-1' htmlFor="fname">Address</label>
                        <input name='firstName' required className='border-2 rounded-md focus:shadow-md p-1 focus:outline-none mt-2' id='fname outline-none' type="text" placeholder='Enter address' />
                    </div>


                    <button className='bg-[#0060df] text-white p-2 hover:bg-[#003891] w-20 ms-auto rounded-md font-bold'>Submit</button>


                </form>





            </div>
        </div>


    )
}

export default Account
