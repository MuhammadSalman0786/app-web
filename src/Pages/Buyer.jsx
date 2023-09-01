import React, { useState } from 'react'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { LuMessagesSquare } from 'react-icons/lu'


const Buyer = () => {

    const [input, setInput] = useState({ gender:'', firstName: '', lastName: '', email: '', password: '', })

    const changeHandler = (e)=>{
        setInput({...input, [e.target.name] : e.target.value})
    }

    const submitHandler =(event)=>{
        event.preventDefault()
        alert(input.gender)
    }

    return (
        <div className='bg-[#F3F4F5] flex justify-center'>

            <div className='m-8 flex items-center flex-col gap-12 bg-white lg:w-3/5 md:w-11/12 sm:w-full'>
                <div className='flex flex-col gap-8 mt-10 px-3'>
                    <h1 className='text-4xl font-medium text-center'>Free registration</h1>
                    <div >
                        <p className='lg:text-lg text-base text-center'>You don't have a free buyer account?</p>
                        <p className='lg:text-lg text-base'>Register now and use all benefits in the course of your research.</p>
                    </div>

                </div>

                <div className='flex lg:flex-row flex-col gap-14' >
                    <div className='flex justify-center gap-4 items-center max-w-[192px] flex-col'>
                        <div className='w-20 h-20 flex justify-center items-center text-4xl rounded-full bg-[#89BA17]'>
                            <AiOutlineFileSearch className='text-white  ' />

                        </div>

                        <div className='flex flex-col items-center'>
                            <span className='font-medium'>Sourcing Service</span>
                            <span className='text-center'>Create and manage requests with wlw Connect</span>
                        </div>



                    </div>

                    <div className='flex justify-center gap-4 items-center flex-col max-w-[192px]'>
                        <div className='w-20 h-20 flex justify-center items-center text-4xl rounded-full bg-[#89BA17]'>
                            <LuMessagesSquare className='text-white  ' />

                        </div>
                        <div  className='flex flex-col items-center'>
                            <span className='font-medium'>Direct contact</span>
                            <span className='text-center'>Contact companies fast and easy</span>
                        </div>

                    </div>
                </div>
                <div className='border-t-2 w-[60%]'></div>

                <form onSubmit={submitHandler} action="" className=' lg:w-[60%] w-11/12 flex flex-col  gap-6'>
                    <h2 className='text-2xl font-medium'>Register now for a free buyer account</h2>

                    <div required className='flex gap-2'>
                        <input onChange={changeHandler} className='' type="radio" value='female' name='gender' id='female' />
                        <label className='text-sm' htmlFor="female">Mrs</label>
                        <input onChange={changeHandler} className='' type="radio" value='male' name='gender' id='male' />
                        <label className='text-sm' htmlFor="male">Mr</label>
                    </div>

                    <div className='flex lg:flex-row flex-col justify-between gap-5'>
                        <div className=' lg:w-[50%] w-full rounded-md flex flex-col p-1 '>
                            <label className='text-xs ml-1' htmlFor="fname">First Name *</label>
                            <input onChange={changeHandler} name='firstName' required className='border-2 rounded-md focus:shadow-md p-1 focus:outline-none mt-2' id='fname outline-none' type="text" />
                        </div>
                        <div className=' lg:w-[50%] w-full rounded-md flex flex-col p-1 '>
                            <label className='ml-1 text-xs' htmlFor="lname ">Last Name</label>
                            <input onChange={changeHandler} name='lastName' required className='border-2 rounded-md focus:shadow-md p-1 focus:outline-none mt-2' id='lname' type="text" />
                        </div>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div className=' flex rounded-md p-1 flex-col' >
                            <label className='text-xs ml-1' htmlFor="email">Email</label>
                            <input onChange={changeHandler} name='email' required className='border-2 rounded-md focus:shadow-md p-1 max-w-auto mt-2 focus:outline-none' id='email' type="text" placeholder='e.g myname@company.com' />
                        </div>

                        <div className=' flex rounded-md p-1 flex-col' >
                            <label className='text-xs ml-1' htmlFor="email">Password</label>
                            <input onChange={changeHandler} name='password' required className='border-2 rounded-md focus:shadow-md p-1 mt-2 focus:outline-none' id='email' type="password" />

                        </div>
                    </div>


                    <div className='flex content-start gap-2'>
                        <div className='mt-1'><input type="checkbox" /></div>
                        <p className='text-sm'> I have read and agree to the General Terms of use, Terms of use and the Privacy Policy. I also agree to “Visable GmbH” using my inventory data and user data to contact me either by phone or e-mail within the context of my existing company profile and to inform me about their products (features, offers, news). I may withdraw my consent at any time, either in part or in full.*</p>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-[#0060df] hover:bg-[#003891] p-2.5 m-5  rounded-md lg:text-base font-medium text-white md:w-full lg:w-[35%]'>Register now for free</button>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Buyer
