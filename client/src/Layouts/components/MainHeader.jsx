import React from "react";
import { Leaf, Search, ShoppingCart, User, Heart, Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="bg-gradient-to-r from-green-950 to-black text-white sticky top-0 z-50 border-b border-green-900">
      <div className="max-w-full w-full mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <Leaf size={22} className="text-green-400" />
          <span className="text-xl font-semibold tracking-wide text-green-300">
            EcoMarket
          </span> */}
          <img src="logo.png" className="w-40" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-green-300 cursor-pointer">
            Home
          </Link>
          <Link to="/shop" className="hover:text-green-300 cursor-pointer">
            Shop
          </Link>
          <Link className="hover:text-green-300 cursor-pointer">
            Sustainable
          </Link>
          <Link className="hover:text-green-300 cursor-pointer">About</Link>
          <Link className="hover:text-green-300 cursor-pointer">Contact</Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* Desktop Search */}
          <div className="hidden lg:flex items-center bg-green-900/40 px-4 py-2 rounded-full border border-green-800">
            <Search size={16} className="text-green-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-32 placeholder-gray-400"
            />
          </div>

          <Heart className="hidden md:block hover:text-green-300 cursor-pointer" />

          <div className="relative hidden md:block">
            <ShoppingCart className="hover:text-green-300 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs px-1.5 rounded-full">
              2
            </span>
          </div>

          <User className="hidden md:block hover:text-green-300 cursor-pointer" />

          {/* Mobile Sheet Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Menu className="cursor-pointer" />
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-black text-white border-l border-green-900 px-4"
              >
                <div className="flex flex-col gap-6 mt-10 text-lg font-medium">
                  <Link to="/" className="hover:text-green-300 cursor-pointer">
                    Home
                  </Link>
                  <Link
                    to="/shop"
                    className="hover:text-green-300 cursor-pointer"
                  >
                    Shop
                  </Link>
                  <Link className="hover:text-green-300 cursor-pointer">
                    Sustainable
                  </Link>
                  <Link className="hover:text-green-300 cursor-pointer">
                    About
                  </Link>
                  <Link className="hover:text-green-300 cursor-pointer">
                    Contact
                  </Link>

                  <div className="border-t border-green-900 pt-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Heart /> Wishlist
                    </div>
                    <div className="flex items-center gap-3">
                      <ShoppingCart /> Cart
                    </div>
                    <div className="flex items-center gap-3">
                      <User /> Account
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
