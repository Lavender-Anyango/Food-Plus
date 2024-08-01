import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex justify-between px-[220px] mt-[120px]">
       <div className="max-w-[600px]  ml-40 mt-16"  >
         <h1 className="text-6xl font-bold mb-10 text-black">
           Enjoy Delicious<br />
             Food in <span className="text-yellow-500">Healthy Life</span>
          </h1>
          <p className="text-[25px] font-light text-zinc-600 mb-[60px]">
            Tandoori masala is an Indian spice blend consisting of a             variety of spices. Tandoori masala is an Indian spice blend            consisting of a variety of spices.
          </p>
          <button className="bg-yellow-500 text-white text-[25px] rounded-lg px-[40px] py-[20px]">
            ORDER NOW
          </button>
        </div>
      

        <Image src="/images/chicken.png" width={650} height={600} alt="chicken" className="rounded-full mt-[10px]" />
      </div>
  );
};

export default Hero;