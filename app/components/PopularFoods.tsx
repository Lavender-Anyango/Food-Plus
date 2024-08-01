import React from 'react';

interface FoodItem {
  name: string;
  traditionalName: string;
  image: string;
  rating: number;
}

const foods: FoodItem[] = [
  { name: 'Fruit dish', traditionalName: "Dinko", image: '/images/fruitfish.png', rating: 4.5 },
  { name: 'Vegetable dish', traditionalName: "Dinko", image: '/images/veg.png', rating: 4.7 },
  { name: 'Sea fish dish', traditionalName: "Dinko", image: '/images/seafish.png', rating: 4.8 },
  { name: 'Pizza', traditionalName: "Dinko", image: '/images/pizza.png', rating: 4.6 },
];

const PopularFoods: React.FC = () => {
  return (
    <section className="py-20 px-1">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl mb-6 text-center text-black italic">Online Foods</h1>
        <h1 className="text-3xl font-bold mb-12 text-center text-black">Popular Foods</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {foods.map((food, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {food.name}
                </h3>
                <p className="text-black text-sm font-light">{food.traditionalName}</p>
                <div className="flex items-center justify-center mb-4"> 
                  <span className="text-yellow-500">★★★★☆</span>
                  <span className="ml-2">{food.rating}</span>
                </div>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-full w-full">
                  Add to Cart <span>$649</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularFoods;