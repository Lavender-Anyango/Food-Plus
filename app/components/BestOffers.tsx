import Image from 'next/image';

interface OfferCardProps {
  title: string;
  description: string;
  price?: string;
  imageSrc: string;
}

const BestOffers = () => {
  return (
    <div className='mt-[200px] ml-[200px]'>
      <div className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-lg mb-2 text-gray-600">Quality Food👌</h2>
      <h1 className="text-5xl font-bold mb-4 text-black">Get The Best Offers</h1>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        The food at your doorstep. Why starve when you have us. You hunger 
        partner. Straight out of the oven to your doorstep.
      </p>

      <div className='flex justify-between'>
        <OfferCard 
          title="Any day offers" 
          description="New phenomenon Burger taste" 
          price="$12.90"
          imageSrc="/images/burger.png"
        />
        <OfferCard 
          title="Other flavors" 
          description="Save room. We made salats" 
          price="$12.90"
          imageSrc="/images/salad.png"
        />
        <OfferCard 
          title="Find a poco store near you" 
          description=""
          imageSrc="/images/location.png"
        />
      </div>
      
      <div className="flex justify-center mt-8">
        <span className="h-2 w-2 rounded-full bg-yellow-400 mx-1"></span>
        <span className="h-2 w-2 rounded-full bg-gray-300 mx-1"></span>
        <span className="h-2 w-2 rounded-full bg-gray-300 mx-1"></span>
      </div>
    </div>
    </div>
  );
};

const OfferCard: React.FC<OfferCardProps> = ({ title, description, price, imageSrc }) => {
  return (
    <div className="flex items-center">
      <div className="text-left mr-4 gap-10">
        <h3 className="text-3xl font-semibold mb-2 text-black">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        {price && (
          <p className="text-2xl font-bold text-yellow-500 mt-[40px]">{price}</p> 
        )}
        <div className="w-8 h-2 bg-yellow-400 rounded-full mt-[90px]"></div>
      </div>
      <div className="w-90 h-90 flex items-center justify-center">
        <Image src={imageSrc} alt={title} width={650} height={650} />
      </div>
    </div>
  );
};
export default BestOffers;