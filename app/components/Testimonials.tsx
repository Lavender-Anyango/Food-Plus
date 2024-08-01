const Testimonial = () =>{
    return(
     <div className="mt-[200px]">
      <h2 className="text-lg mb-2 text-black text-center font-bold">Testimonial</h2>
      <h1 className="text-5xl font-bold mb-12 text-black text-center">What Our Clients Say</h1>
    
        <div>
          <img src='images/quotes.png' className='ml-[47%]'/>
          <p className='text-[20px] text-[grey] w-[830px] text-center ml-[28%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi aliquip ex ea commodo
          </p>

          <div className='flex gap-[20px] ml-[31%] p-[50px]'>
            <img src='images/woman.png' className='w-[110px]'/>
            <img src='images/manblueshirt.png'/>
            <img src="images/manorangebackground.png" />
            <img src="images/mannobeard.png"/>
            <img src="images/manwhiteshirt.png"/>
          </div>

          <h2 className='text-center font-bold text-[30px]'>Mitchell Marsh</h2>
          <p className='text-center text-[grey] text-[20px]'>CEO, Bexon Agency</p>
          <div className='flex ml-[46%] gap-[30px]'>
            <img src='images/arrowgrey.png' className='mt-[-8px]'/>
            <img src='images/arroworange.png'/>
          </div>
          
        </div>
     </div>
    )
}
export default Testimonial;