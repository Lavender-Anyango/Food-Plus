import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className='flex bg-[#180606] text-[white] p-[100px] gap-[480px]'>
        <div>
          <h1 className='text-[40px]'>FoodHouse <span className='text-[#FEC61C]'>.</span></h1>
          <p className='text-[20px] w-[400px]'>
            Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes
          </p>
          <br />
          <div className='flex gap-[10px]'>
            <button className='bg-[white] p-[15px] rounded-[8px] w-[50px] h-[50px] flex items-center justify-center'>
              <FaFacebookF className='text-[#180606] text-xl text-[#FEC61C]' />
            </button>
            <button className='bg-[white] p-[15px] rounded-[8px] w-[50px] h-[50px] flex items-center justify-center'>
              <FaTwitter className='text-[#FEC61C] text-xl' />
            </button>
            <button className='bg-[white] p-[15px] rounded-[8px] w-[50px] h-[50px] flex items-center justify-center'>
              <FaLinkedinIn className='text-[#FEC61C] text-xl' />
            </button>
          </div>
        </div>

        <div className='flex gap-[180px]'>
          <div>
            <h1 className='text-[30px]'>Company</h1><br />
            <p className='text-[20px]'>Career</p>
            <p className='text-[20px]'>About Us</p>
            <p className='text-[20px]'>Blog</p>
            <p className='text-[20px]'>Press Info</p>
            <p className='text-[20px]'>Features</p>
          </div>

          <div>
            <h1 className='text-[30px]'>Fudo</h1><br />
            <p className='text-[20px]'>Why Fudo</p>
            <p className='text-[20px]'>How it Works</p>
            <p className='text-[20px]'>Why Choose Us</p>
            <p className='text-[20px]'>Client Stories</p>
            <p className='text-[20px]'>Gallery</p>
          </div>

          <div>
            <h1 className='text-[30px]'>Menu</h1><br />
            <p className='text-[20px]'>Breakfast</p>
            <p className='text-[20px]'>Lunch</p>
            <p className='text-[20px]'>Dinner</p>
            <p className='text-[20px]'>Fast Foods</p>
            <p className='text-[20px]'>Drinks</p>
          </div>
        </div>
      </div>

      <div className='bg-[#F9C428] text-[white] flex gap-[200px] text-[20px] p-[20px]'>
        <p className='ml-[40%]'>Copyright 2021 Besnik All Rights Reserved</p>
        <div className='flex gap-[80px]'>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Security</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;