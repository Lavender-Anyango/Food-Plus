const Download = () =>{
    return(
       <div className="mt-[200px]">
         <div className='flex gap-[100px] ml-[22%] p-[100px]'>
          <img src='images/phone.png' alt="phone"/>
          <div className='p-[100px]'>
            <p className='text-[#FF8C01] text-[25px]'>Download Our App</p>
            <h2 className='w-[250px] font-bold text-[40px]'>It's all here. All in one app.</h2>
            <p className='w-[500px] text-[grey] text-[20px]'>
              Discover local, on-demand delivery or pickup from restaurants, nearby
              grocery and convinience stores, and more.
            </p>
            <div className='flex'>
              <img src='images/applestore.png' alt="apple logo"/>
              <img src='images/googleplay.png' alt="google logo"/>
            </div>
          </div>
        </div>
       </div>

    )
}
export default Download;