import React from "react";
import CustomLink from "../useCustom/useCustomLink";

const Header = () => {
  return (
    <div className="bg-[#0438A1] sticky top-0 px-10 py-6 flex items-center justify-between">
      <div>
        <h1 className="font-mono italic text-white text-xl border-2 p-2 rounded-lg">Ahsan Habib</h1>
      </div>
      <div className="flex gap-6 text-xl items-center">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About Us</CustomLink>
        <CustomLink to="/shop">Shop</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/products">Products</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink className='border-2 rounded-lg py-2 px-4 hover:bg-blue-700 text-white' to='/button'>Log In</CustomLink>
      </div>
    </div>
  );
};

export default Header;
