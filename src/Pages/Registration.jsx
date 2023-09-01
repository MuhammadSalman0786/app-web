import React, { useState } from "react";
import { Link } from "react-router-dom";


const Registration = () => {
  const [input, setinput] = useState({
    gender: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: '',
    companyName: "",
    country: "",
  });




  const validateForm = ()=> input.password === input.confirm_password


   
  
  
  const submitHandler = (event) => {
    event.preventDefault();

    alert(input.password);
  }

  const changeHandler = (event) => {
    setinput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <div className="  bg-[#F3F4F5]">
      <div className="max-w-7xl  px-4 m-auto ">
        <div className="flex flex-col lg:max-w-7xl m-auto gap-4 pt-5">
          <h1 className="text-4xl font-medium">
            Increase your B2B business visibility online!
          </h1>
          <h2 className="text-2xl font-medium">
            Join the leading B2B platform in German-speaking countries and grow
            your business.
          </h2>
        </div>

        <div className="lg:flex-row flex flex-col mt-7  gap-20">
          <form
            onSubmit={submitHandler}
            className="bg-white p-5 flex flex-col  gap-6 rounded-3xl border-2 md:w-100% lg:w-[50%]"
          >
            <h3 className="text-lg font-medium">
              Start with a free company profile now!
            </h3>

            <div required className="flex gap-2">
              <input
                className=""
                onChange={changeHandler}
                type="radio"
                value="female"
                name="gender"
                id="female"
              />
              <label className="text-sm" htmlFor="female">
                Mrs
              </label>
              <input
                className=""
                onChange={changeHandler}
                type="radio"
                value="male"
                name="gender"
                id="male"
              />
              <label className="text-sm" htmlFor="male">
                Mr
              </label>
            </div>

            <div className="flex lg:flex-row flex-col gap-5 justify-between">
              <div className="border-2 lg:w-1/2 w-full rounded-md flex flex-col p-1 ">
                <label className="text-xs ml-1" htmlFor="fname">
                  First Name
                </label>
                <input
                  onChange={changeHandler}
                  name="firstName"
                  required
                  className="focus:outline-none ml-1"
                  id="fname"
                  type="text"
                />
              </div>
              <div className="border-2 lg:w-1/2 w-full rounded-md flex flex-col p-1 ">
                <label className="ml-1 text-xs" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  onChange={changeHandler}
                  name="lastName"
                  required
                  className="focus:outline-none ml-1"
                  id="lastName"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="border-2 flex rounded-md p-1 flex-col">
                <label className="text-xs ml-1" htmlFor="email">
                  Email
                </label>
                <input
                  onChange={changeHandler}
                  name="email"
                  required
                  className="max-w-auto ml-1 focus:outline-none"
                  id="email"
                  type="email"
                  placeholder="e.g myname@company.com"

                />
              </div>
              <div className="flex justify-between lg:flex-row flex-col gap-5 ">
                <div className="border-2 lg:w-1/2 w-full rounded-md flex flex-col p-1 ">
                  <label className="text-xs ml-1" htmlFor="password">
                    Password
                  </label>
                  <input
                    onChange={changeHandler}
                    name="password"
                    required
                    className="focus:outline-none ml-1"
                    id="password"
                    type="password"
                    minLength={8}
                  />

                </div>

                
                  <div className="border-2 lg:w-1/2 w-full rounded-md flex flex-col p-1 ">
                    <label className="ml-1 text-xs" htmlFor="confirm_password">
                      Confirm password
                    </label>
                    <input
                      onChange={changeHandler}
                      name="confirm_password"
                      required
                      className="focus:outline-none ml-1"
                      id="confirm_password"
                      type="password"
                      minLength={8}
                    />
                    {!validateForm() && <p className="text-xs text-red-700" >Passwords do not match</p>}
                  </div>

                 
                

              </div>
              

              <div className="border-2 flex rounded-md p-1 flex-col">
                <label className="text-xs ml-1" htmlFor="company">
                  Company Name
                </label>
                <input
                  onChange={changeHandler}
                  name="company"
                  required
                  className="ml-1 focus:outline-none"
                  id="company"
                  type="text"
                />
              </div>

              <div className="border-2 lg:w-full w-full flex rounded-md p-1 flex-col">
                <label className="text-xs ml-1" htmlFor="country">
                  Country
                </label>
                <select
                  onChange={changeHandler}
                  className="focus:outline-none text-sm"
                  name="country"
                  id="country"
                >
                  <option value="select">Please select</option>
                  <option value="germany">Germany</option>
                  <option value="austria">Austria</option>
                  <option value="switzerland">Switzerland</option>
                </select>
              </div>



            </div>
            <div>
              <p className="text-md">
                By submitting the form, I accept the Terms of Use and the
                General Terms and Conditions. I have acknowledged the Data
                Privacy.
              </p>
            </div>

            <button  className="bg-[#0060df] text-white px-1 py-2  hover:bg-[#003891] w-auto lg:w-[30%] rounded-md" disabled={!validateForm()}>
              Start registration
            </button>
          </form>

          <div className="flex flex-col mt-8 gap-4 w-100% lg:w-[40%]">
            <div className="flex gap-2">
              <svg
                data-v-8c014c52=""
                width="150"
                height="156"
                viewBox="0 0 150 156"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-4 mb-4 md:mb-0 shrink-0 icon w-[80px] h-[64px] mt-2"
              >
                <path
                  d="M68.1998 2.37378C88.6401 2.12597 108.897 6.26721 127.609 14.5203C129.381 15.2807 130.878 16.5654 131.899 18.2043C132.92 19.8431 133.417 21.7575 133.322 23.6878V74.7962C133.297 90.9744 128.396 106.767 119.262 120.101C110.127 133.435 97.1863 143.686 82.1381 149.51L75.0547 152.261C70.4303 154.094 65.2838 154.094 60.6594 152.261L53.5758 149.51C38.5276 143.686 25.587 133.435 16.4525 120.101C7.31807 106.767 2.41687 90.9744 2.39228 74.7962V23.6878C2.29752 21.7575 2.79404 19.8431 3.81524 18.2043C4.83644 16.5654 6.33337 15.2807 8.10474 14.5203C26.8174 6.26721 47.074 2.12597 67.5143 2.37378"
                  stroke="#00193C"
                  strokeWidth="2.4"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M28.5713 113.454L33.4835 54.3633H45.6572L48.0065 87.5065H88.0951"
                  stroke="#00193C"
                  strokeWidth="2.4"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M45.2383 99.2725H80.9526"
                  stroke="#00193C"
                  strokeWidth="2.4"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M45.2383 108.728H80.9526"
                  stroke="#00193C"
                  strokeWidth="2.4"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M97.6191 104V95.849C97.6191 92.369 99.1242 89.0315 101.803 86.5707C104.482 84.11 108.116 82.7275 111.905 82.7275C115.694 82.7275 119.327 84.11 122.006 86.5707C124.685 89.0315 126.191 92.369 126.191 95.849V104"
                  stroke="#00193C"
                  strokeWidth="2.4"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M129.548 105.892H95.5002C93.7321 105.892 92.0364 106.589 90.7861 107.83C89.5359 109.072 88.8335 110.755 88.8335 112.51V138.51C88.8335 140.265 89.5359 141.949 90.7861 143.19C92.0364 144.431 93.7321 145.128 95.5002 145.128H129.31C131.078 145.128 132.774 144.431 134.024 143.19C135.274 141.949 135.976 140.265 135.976 138.51V112.51C136.026 111.648 135.895 110.785 135.593 109.976C135.29 109.167 134.823 108.428 134.219 107.806C133.615 107.185 132.889 106.694 132.085 106.365C131.281 106.035 130.417 105.874 129.548 105.892Z"
                  fill="white"
                  stroke="#00193C"
                  strokeWidth="2.4"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M109.524 70.9087V28.3633H61.9048V87.4542"
                  stroke="#00193C"
                  strokeWidth="2.4"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M103.595 125.036C104.17 124.753 104.654 124.314 104.991 123.771C105.328 123.228 105.504 122.601 105.5 121.963C105.369 120.962 104.845 120.053 104.043 119.434C103.24 118.814 102.223 118.534 101.214 118.654H94.3091V132.363H101.452C102.587 132.483 103.725 132.153 104.616 131.445C105.508 130.737 106.082 129.708 106.214 128.582C106.208 127.793 105.951 127.025 105.481 126.389C105.011 125.753 104.351 125.279 103.595 125.036ZM97.1662 121.254H100.5C101.69 121.254 102.404 121.727 102.404 122.673C102.403 122.91 102.351 123.145 102.251 123.36C102.152 123.576 102.007 123.769 101.827 123.925C101.647 124.082 101.436 124.198 101.207 124.268C100.978 124.337 100.737 124.357 100.5 124.327H97.1662V121.254ZM100.976 130H97.1662V126.691H100.976C101.228 126.63 101.49 126.628 101.744 126.683C101.997 126.738 102.234 126.849 102.438 127.008C102.642 127.168 102.806 127.371 102.919 127.602C103.032 127.834 103.091 128.088 103.091 128.345C103.091 128.603 103.032 128.857 102.919 129.088C102.806 129.32 102.642 129.523 102.438 129.682C102.234 129.841 101.997 129.953 101.744 130.008C101.49 130.063 101.228 130.06 100.976 130Z"
                  fill="#00193C"
                ></path>
                <path
                  d="M129.071 125.036C129.647 124.753 130.131 124.314 130.468 123.771C130.804 123.228 130.981 122.601 130.976 121.963C130.845 120.962 130.322 120.053 129.519 119.434C128.716 118.814 127.7 118.534 126.69 118.654H119.786V132.363H126.929C128.064 132.483 129.201 132.153 130.093 131.445C130.985 130.737 131.559 129.708 131.69 128.582C131.684 127.793 131.428 127.025 130.958 126.389C130.488 125.753 129.828 125.279 129.071 125.036ZM122.643 121.254H125.976C127.167 121.254 127.881 121.727 127.881 122.673C127.879 122.91 127.827 123.145 127.728 123.36C127.628 123.576 127.484 123.769 127.304 123.925C127.124 124.082 126.912 124.198 126.683 124.268C126.454 124.337 126.213 124.357 125.976 124.327H122.643V121.254ZM126.452 130H122.643V126.691H126.452C126.704 126.63 126.967 126.628 127.22 126.683C127.473 126.738 127.711 126.849 127.914 127.008C128.118 127.168 128.283 127.371 128.396 127.602C128.509 127.834 128.568 128.088 128.568 128.345C128.568 128.603 128.509 128.857 128.396 129.088C128.283 129.32 128.118 129.523 127.914 129.682C127.711 129.841 127.473 129.953 127.22 130.008C126.967 130.063 126.704 130.06 126.452 130Z"
                  fill="#00193C"
                ></path>
                <path
                  d="M117.643 132.363H107.167V130L112.167 125.982C113.833 124.8 114.31 123.854 114.31 122.909C114.304 122.642 114.243 122.378 114.131 122.136C114.018 121.893 113.856 121.676 113.655 121.498C113.454 121.321 113.217 121.186 112.961 121.104C112.705 121.021 112.435 120.992 112.167 121.018C111.498 121.039 110.844 121.222 110.263 121.552C109.682 121.881 109.191 122.347 108.833 122.909L106.929 121.018C107.544 120.216 108.336 119.565 109.244 119.114C110.152 118.663 111.152 118.425 112.167 118.418C112.778 118.366 113.392 118.436 113.976 118.623C114.559 118.809 115.099 119.109 115.565 119.505C116.03 119.901 116.411 120.385 116.686 120.929C116.961 121.473 117.125 122.065 117.167 122.672C117.155 123.701 116.861 124.707 116.315 125.582C115.77 126.457 114.994 127.167 114.072 127.636L111.453 129.527H117.405V132.363H117.643Z"
                  fill="#00193C"
                ></path>
                <path
                  d="M80.9525 40.1816H71.4287V49.6362"
                  stroke="#00193C"
                  strokeWidth="2.4"
                ></path>
                <path
                  d="M99.9999 40.1816H90.4761V49.6362"
                  stroke="#00193C"
                  strokeWidth="2.4"
                ></path>
                <path
                  d="M80.9525 59.0908H71.4287V68.5454"
                  stroke="#00193C"
                  strokeWidth="2.4"
                ></path>
                <path
                  d="M99.9999 59.0908H90.4761V68.5454"
                  stroke="#00193C"
                  strokeWidth="2.4"
                ></path>
              </svg>
              <div className="flex flex-col gap-3">
                <span className="text-lg font-medium">
                  Exclusively for B2B businesses
                </span>
                <p className="text-md font-nnormal">
                  1 million purchasers search monthly for products and services
                  from our 600.000+ registered suppliers.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <svg
                data-v-8c014c52=""
                width="132"
                height="131"
                viewBox="0 0 132 131"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-4 mb-4 md:mb-0 shrink-0 icon w-[80px] h-[64px] mt-2"
              >
                <path
                  d="M99 113.219H65.9996H1.59961V49.2188"
                  stroke="#00193C"
                  stroke-width="2.4"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M130.2 49.2188V113.219H116"
                  stroke="#00193C"
                  stroke-width="2.4"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M66 127.819V113.219"
                  stroke="#00193C"
                  stroke-width="2.4"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M99.8 129.219H32"
                  stroke="#00193C"
                  stroke-width="2.4"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M39 49.2187H1.59961V35.2188C1.59961 33.097 2.44247 31.0622 3.94276 29.5619C5.44305 28.0616 7.47788 27.2187 9.59961 27.2188H122.2C124.321 27.2188 126.356 28.0616 127.856 29.5619C129.357 31.0622 130.2 33.097 130.2 35.2188V49.2187H92"
                  stroke="#00193C"
                  stroke-width="2.4"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M13 40.9961C14.6569 40.9961 16 39.6529 16 37.9961C16 36.3392 14.6569 34.9961 13 34.9961C11.3431 34.9961 10 36.3392 10 37.9961C10 39.6529 11.3431 40.9961 13 40.9961Z"
                  fill="#00193C"
                ></path>
                <path
                  d="M23 40.9961C24.6569 40.9961 26 39.6529 26 37.9961C26 36.3392 24.6569 34.9961 23 34.9961C21.3431 34.9961 20 36.3392 20 37.9961C20 39.6529 21.3431 40.9961 23 40.9961Z"
                  fill="#00193C"
                ></path>
                <path
                  d="M33 40.9961C34.6569 40.9961 36 39.6529 36 37.9961C36 36.3392 34.6569 34.9961 33 34.9961C31.3431 34.9961 30 36.3392 30 37.9961C30 39.6529 31.3431 40.9961 33 40.9961Z"
                  fill="#00193C"
                ></path>
                <path
                  d="M85.7998 94.0199V52.4199H46.7998V95.4199"
                  stroke="#00193C"
                  stroke-width="2.4"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M64 63H56V71"
                  stroke="#00193C"
                  stroke-width="2.4"
                ></path>
                <path
                  d="M64 77H56V85"
                  stroke="#00193C"
                  stroke-width="2.4"
                ></path>
                <path
                  d="M78 63H70V71"
                  stroke="#00193C"
                  stroke-width="2.4"
                ></path>
                <path
                  d="M78 77H70V85"
                  stroke="#00193C"
                  stroke-width="2.4"
                ></path>
                <path
                  d="M68.1992 18.4L68.3992 1"
                  stroke="#00193C"
                  stroke-width="2.4"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M51.5998 20.3992L41.7998 7.19922"
                  stroke="#00193C"
                  stroke-width="2.4"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M85 20.3992L94.8 7.19922"
                  stroke="#00193C"
                  stroke-width="2.4"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M35.7999 81.8228C38.6028 88.4559 43.517 93.9784 49.7796 97.533C56.0421 101.088 63.303 102.476 70.4351 101.481C77.5672 100.487 84.1717 97.1669 89.2236 92.0353C94.2755 86.9037 97.4923 80.248 98.3746 73.1012C99.2569 65.9544 97.7555 58.7162 94.1033 52.51C90.4511 46.3038 84.8525 41.4767 78.1762 38.7779C71.5 36.0791 64.1197 35.6595 57.1806 37.5843C50.2416 39.5091 44.1319 43.6705 39.7999 49.4228C36.3879 54.0162 34.2257 59.4161 33.5247 65.095C32.8236 70.7739 33.6075 76.5375 35.7999 81.8228Z"
                  stroke="#00193C"
                  stroke-width="2.4"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M87.5996 93.418L93.3996 99.218"
                  stroke="#00193C"
                  stroke-width="2.4"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M116.4 114.616L101 99.2165C100.51 98.6781 99.9162 98.2447 99.254 97.9425C98.5919 97.6403 97.8752 97.4757 97.1475 97.4585C96.4199 97.4414 95.6963 97.572 95.0206 97.8426C94.3449 98.1132 93.7311 98.5181 93.2164 99.0328C92.7017 99.5475 92.2968 100.161 92.0262 100.837C91.7556 101.513 91.625 102.236 91.6421 102.964C91.6593 103.692 91.8239 104.408 92.1261 105.07C92.4283 105.733 92.8617 106.327 93.4001 106.816L108.8 122.216C109.823 123.147 111.165 123.648 112.548 123.616C113.93 123.583 115.247 123.019 116.225 122.041C117.203 121.063 117.766 119.746 117.799 118.364C117.832 116.981 117.331 115.639 116.4 114.616V114.616Z"
                  stroke="#00193C"
                  stroke-width="2.4"
                  stroke-miterlimit="10"
                ></path>
              </svg>
              <div className="flex flex-col gap-3">
                <span className="text-lg font-medium">
                  Rank higher on Google
                </span>
                <p className="text-md font-nnormal">
                  wlw helps your company rank higher on Google thanks to an
                  average of 1 million B2B search keywords in the Top 3 results.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <svg
                data-v-8c014c52=""
                width="142"
                height="122"
                viewBox="0 0 142 122"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-4 mb-4 md:mb-0 shrink-0 icon w-[80px] h-[64px] mt-2"
              >
                <g clip-path="url(#clip0_941_413)">
                  <path
                    d="M8.57593 99.7467L11.5675 41.7114H22.736L24.7304 68.1094H36.8962"
                    stroke="#00193C"
                    stroke-width="2.4"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M23.7324 79.1953H36.8953"
                    stroke="#00193C"
                    stroke-width="2.4"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  ></path>
                  <path
                    d="M23.7324 87.6562H36.8953"
                    stroke="#00193C"
                    stroke-width="2.4"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  ></path>
                  <path
                    d="M132.827 99.7448V51.9867L129.037 42.5156H104.107"
                    stroke="#00193C"
                    stroke-width="2.4"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M104.107 51.9922H132.827"
                    stroke="#00193C"
                    stroke-width="2.4"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M37.4941 99.9491V31.6367H104.107V89.6736"
                    stroke="#00193C"
                    stroke-width="2.4"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M65.8145 78.5894H89.7471"
                    stroke="#00193C"
                    stroke-width="2.4"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M65.8152 86.6484H75.7871"
                    stroke="#00193C"
                    stroke-width="2.4"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M88 100H2"
                    stroke="#00193C"
                    stroke-width="2.4"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M140 100L117 100"
                    stroke="#00193C"
                    stroke-width="2.4"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M118.914 121.066L103.928 104.125"
                    stroke="#00193C"
                    stroke-width="2.4"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M84.3341 88.1175L93.5217 115.39C93.705 115.943 94.022 116.44 94.4441 116.837C94.8661 117.234 95.3799 117.518 95.9388 117.663C96.4977 117.808 97.0841 117.81 97.6448 117.669C98.2055 117.527 98.7229 117.247 99.15 116.853L103.081 104.2L115.833 101.238C116.262 100.84 116.587 100.341 116.778 99.7852C116.97 99.2298 117.022 98.6354 116.929 98.0557C116.837 97.4759 116.603 96.9288 116.25 96.4635C115.896 95.9983 115.433 95.6295 114.902 95.3903L88.8041 83.9023C88.2097 83.6227 87.5455 83.5292 86.8969 83.6339C86.2484 83.7387 85.645 84.0368 85.1644 84.49C84.6839 84.9431 84.348 85.5307 84.2001 86.1771C84.0521 86.8235 84.0988 87.4992 84.3341 88.1175Z"
                    stroke="#00193C"
                    stroke-width="2.4"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M70.8008 48.9667V31.6367"
                    stroke="#00193C"
                    stroke-width="2.4"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M70.8008 13.5315V-4"
                    stroke="#00193C"
                    stroke-width="2.4"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M54.2471 19.5458L44.4746 6.24609"
                    stroke="#00193C"
                    stroke-width="2.4"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M87.3535 19.5458L97.126 6.24609"
                    stroke="#00193C"
                    stroke-width="2.4"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M104 62H112"
                    stroke="#00193C"
                    stroke-width="2.4"
                  ></path>
                  <path
                    d="M104 76H112"
                    stroke="#00193C"
                    stroke-width="2.4"
                  ></path>
                  <path
                    d="M126 62H118V70"
                    stroke="#00193C"
                    stroke-width="2.4"
                  ></path>
                  <path
                    d="M126 76H118V84"
                    stroke="#00193C"
                    stroke-width="2.4"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_941_413">
                    <rect width="142" height="122" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="flex flex-col gap-3">
                <span className="text-lg font-medium">
                  Promote your products and services to purchasers
                </span>
                <p className="text-md font-nnormal">
                  Attract purchasers requests by uploading your products and
                  services to our platform.
                </p>
              </div>
            </div>

            <div className="mt-7">
              <Link to="">
                <p className="text-blue-600 hover:underline text-lg font-normal">
                  Still have questions? Get all the information here
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="pb-10">
          <div className="max-w-7xl mt-7 flex p-7 h-auto rounded-md flex-col gap-4 border-2 w-100% lg:w-[50%] bg-white ">
            <span className="text-xl font-medium">Want more benefits?</span>
            <p>
              Connect with our sales team who will be happy to share about our
              premium options.
            </p>
            <button className="border-blue-600 border-2 p-2 w-[30%] text-[#006BBF]">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
