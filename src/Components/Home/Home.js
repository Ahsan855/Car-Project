import React from "react";
const Home = () => {
  
  return (
    <div className="flex py-40 px-4 justify-evenly items-center bg-[url('https://cdn.shopify.com/s/files/1/0037/2680/3011/files/s1.jpg?v=1535965822')] bg-cover bg-center w-full h-full">
      <div>
          <img src="https://o.remove.bg/downloads/d53fb2ff-cd18-4595-923d-d88924656ac7/photo-1502877338535-766e1452684a-removebg-preview.png" alt="" />
      </div>
      <div className="place-items-start">
          <h1 className="text-blue-600 mt-20 w-3/5 mx-auto text-left font-sans font-bold text-4xl">Stap Morgen <span className="text-blue-800 text-6xl italic">in AR Company</span></h1>
          <p className="text-gray-500 mt-10 text-xl w-3/5 mx-auto text-left">Seating Mind sees 30% conversion increase, 47% boost in visitor spend after going exclusive with Fast.</p>
          <p className="text-left w-3/5 mx-auto ">
          <button className="px-6 mt-10 py-3  bg-blue-500 hover:bg-blue-700 duration-300 text-xl text-white rounded border-2">Buy Now</button>
          </p>
          
      </div>
    </div>
  );
};

export default Home;
