import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const NavBarSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Navigation menu items data
  const navItems = [
    { name: "Home" },
    { name: "Services" },
    { name: "About" },
    { name: "Contact" },
  ];

  return (
    <header className="flex justify-center w-full px-4 py-3 md:px-[13px] md:py-0 md:h-[59px]">
      <div className="flex items-center justify-between w-full max-w-[1440px]">
        {/* Logo section */}
        <div className="flex items-center h-[45.09px]">
          <img
            className="w-8 h-8 md:w-[47px] md:h-10 object-cover"
            alt="Logo"
            src="/figmaAssets/logo.png"
          />
          <h1 className="ml-2 md:ml-[11px] font-['Poppins',Helvetica] font-semibold text-black text-xl md:text-[35px]">
            NUTRAZS
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-end gap-8 xl:gap-[94px]">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className="font-['Poppins',Helvetica] font-normal text-black text-lg xl:text-[22px] hover:text-green-600 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Get Quote button */}
          <Button
            variant="outline"
            className="ml-8 xl:ml-[94px] px-4 py-2 h-10 rounded-[7px] border border-solid border-black bg-white hover:bg-gray-50"
          >
            <span className="font-['Poppins',Helvetica] font-normal text-black text-sm xl:text-lg tracking-[-0.36px]">
              Get Quote
            </span>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg lg:hidden z-50">
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="font-['Poppins',Helvetica] font-normal text-black text-lg hover:text-green-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="outline"
              className="w-full mt-4 h-10 rounded-[7px] border border-solid border-black bg-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-['Poppins',Helvetica] font-normal text-black text-lg tracking-[-0.36px]">
                Get Quote
              </span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
