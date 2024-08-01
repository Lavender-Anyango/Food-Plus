const Services = () =>{
    return(
        <div className="text-black ml-[200px] mt-[100px]" >
          <h1 className='text-[45px] ml-[42%] mb-[100px] font-bold'>Our Service</h1>
          <div className='flex gap-[200px] ml-[200px]'>
            <div className='items-center'>
              <img src="images/restaurants.png" alt="restaurant image" />
              <h3 className='text-[25px]'>55+ Restaurants</h3>
            </div>
            <div className='items-center'>
              <img src="images/Goodquality.png" alt="restaurant image" />
              <h3 className='text-[25px]'>Good Quality</h3>
            </div>
            <div className='items-center'>
              <img src="images/Discountsystem.png" alt="restaurant image" />
              <h3 className='text-[25px]'>Discount System</h3>
            </div>
            <div className='items-center'>
              <img src="images/fastdelivery.png" alt="restaurant image" />
              <h3 className='text-[25px]'>Fast Delivery</h3>
            </div>
          </div>
        </div>
    )
}

export default Services;