import React from 'react';
// import abc from './abc.jpg'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';


const Home = () => {
  return (
    // <div style={{backgroundImage:`url(${abc})`, height:'90vh', backgroundSize: "cover",backgroundOrigin:'content-box', backgroundRepeat:'no-repeat', }}>
    // <h1>WLW</h1>
    <>
      {/* <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://mdbootstrap.com/img/new/slides/043.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://mdbootstrap.com/img/new/slides/043.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://mdbootstrap.com/img/new/slides/043.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div> */}

      <div className=''>
        <Carousel fade >
          <Carousel.Item className=''>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <img src={require('./abc.jpg')} alt='slider' />
            {/* <Carousel.Caption> */}
            <div className='absolute top-[20%] left-[30%] text-white '>
              <div className='flex text-center flex-col gap-20'>
                <h1 className='lg:text-4xl md:text-2xl font-bold'>
                  Simple. Better. Sourcing.
                </h1>
                <div className='text-center'>
                  <input className='relative focus:outline-none opacity-50 text-black bg-white rounded-full py-3 px-3 w-[650px]' type="text" placeholder='Search term e.g. CNC milling work,packaging...' />
                  <button className='bg-[#0060df] absolute hover:bg-[#003891] -right-8 py-3 font-bold text-xl px-10 rounded-full'>Search</button>
                </div>
              </div>
            </div>
            {/* </Carousel.Caption>  */}
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <img src={require('./robert-lukeman-_RBcxo9AU-U-unsplash.jpg')} alt='slider' />
            {/* <Carousel.Caption>
            
         
        </Carousel.Caption> */}
        <div className='absolute top-[20%] left-[30%] text-white '>
              <div className='flex text-center flex-col gap-20'>
                <h1 className='text-4xl font-bold'>
                  Simple. Better. Sourcing.
                </h1>
                <div className='text-center'>
                  <input className='relative focus:outline-none text-black opacity-50 bg-white rounded-full py-3 px-3 w-[650px]' type="text" placeholder='Search term e.g. CNC milling work,packaging...' />
                  <button className='bg-[#0060df] absolute hover:bg-[#003891]  -right-8 py-3 font-bold text-xl px-10 rounded-full'>Search</button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <img src={require('./abc.jpg')} alt='slider' />
            {/* <Carousel.Caption> */}
            <div className='absolute top-[20%] left-[30%] text-white '>
              <div className='flex text-center flex-col gap-20'>
                <h1 className='text-4xl font-bold'>
                  Simple. Better. Sourcing.
                </h1>
                <div className='text-center'>
                  <input className='relative focus:outline-none text-black opacity-50 bg-white rounded-full py-3 px-3 w-[650px]' type="text" placeholder='Search term e.g. CNC milling work,packaging...' />
                  <button className='bg-[#0060df] absolute hover:bg-[#003891]  -right-8 py-3 font-bold text-xl px-10 rounded-full'>Search</button>
                </div>
              </div>
            </div>

            {/* </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>

        {/* <div className='position-absolute '>
          <h1 >
            Simple. Better. Sourcing.
          </h1>
        </div> */}
      </div>





    </>
  )
}

export default Home
