import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div className="flex py-40 px-4 justify-between items-center bg-[url('https://cdn.shopify.com/s/files/1/0037/2680/3011/files/s1.jpg?v=1535965822')] bg-cover bg-center w-full h-full">
      <div>
        <img
          src="https://o.remove.bg/downloads/6e33c445-001f-49b7-b6f6-137811679cee/photo-1502877338535-766e1452684a-removebg-preview.png"
          alt=""
        />
      </div>
      <div>
          <h1 className="text-blue-600 mt-10 font-sans font-bold text-4xl">Stap Morgen <span className="text-blue-800 text-6xl italic">in AR Company</span></h1>
          <p className="text-gray-500 mt-10 text-xl w-3/5 mx-auto">Seating Mind sees 30% conversion increase, 47% boost in visitor spend after going exclusive with Fast.</p>
          <button className="px-6 mt-10 py-3 bg-blue-500 hover:bg-blue-700 duration-300 text-xl text-white rounded border-2">Buy Now</button>
      </div>
    </div>
  );
};

export default Header;
