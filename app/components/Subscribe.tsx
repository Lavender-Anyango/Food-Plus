const Subscribe = () => {
    return (
      <div className='flex gap-[200px] p-[200px] ml-[10%]'>
        <div>
          <h1 className='w-[550px] font-bold text-[40px]'>
            Subscribe To Our Newsletter
          </h1>
          <p className='text-[20px] text-[grey]'>
            Subscribe on our newsletter to get our news
          </p>
        </div>
        <div className='relative  text-black'>
          <input
            type='text'
            placeholder='Your email address...'
            className='p-[20px]'
          />
          <button className='flex bg-[#FF8C01] text-[white] absolute top-0 left-[200px] p-[20px] gap-[10px] rounded-[3px]'>
            Subscribe
            <span className='bg-[white] text-[#FF8C01] p-[5px] rounded-[3px] w-[30px]'>
              &#8594;
            </span>
          </button>
        </div>
      </div>
    );
  };
  
  export default Subscribe;