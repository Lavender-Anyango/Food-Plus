import Image from 'next/image';

const SpecialOffer = () => {
  return (
    <div className="flex justify-between items-center bg-white p-8 mt-32">
    <div className='ml-96'>
          <button className="bg-yellow-400 px-[20px] py-[10px] rounded-lg text-white text-[20px]">-50%</button>
          <h2 className="text-[75px] font-bold mt-[20px] text-black">Our Special Offer</h2>
          <p className="text-[25px] font-light text-zinc-600 mt-[20px]">
            Best cooks and best delivery guys all at your<br />
            service. Hot tasty food will reach you in 60 minutes.
          </p>
          <button className="mt-[60px] bg-yellow-500 text-white min-w-[200px] text-[25px] rounded-lg px-[40px] py-[15px]">
            See All Menu
          </button>
          
        </div>
      <div className="flex-1 relative ml-48">
        <Image
          src="/images/salad.png"
          alt="Special dish"
          width={600}
          height={100}
         className="rounded-full mr-2"
        />
        <div className="absolute top-0 right-28 bg-white rounded-lg shadow-md p-2 ml-4">
          <div className="flex items-center">
            <Image
              src="/images/special.png"
              alt="Cristio Maria"
              width={40}
              height={40}
              className="rounded-full mr-2"
            />
            <div className=''>
              <p className="font-semibold text-black">Cristio Maria</p>
              <p className="text-sm text-gray-500">Healthy and delicious pizza</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 bg-white rounded-lg shadow-md p-2">
          <div className="flex items-center">
            <Image
              src="/images/special.png"
              alt="Srah ali khan"
              width={40}
              height={40}
              className="rounded-full mr-2"
            />
            <div>
              <p className="font-semibold text-black">Srah ali khan</p>
              <p className="text-sm text-gray-500">Healthy and delicious pizza</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;