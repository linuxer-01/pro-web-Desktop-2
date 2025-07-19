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
  
  // Navigation menu items data with scroll targets
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  // Smooth scroll function
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="flex justify-center w-full px-4 py-3 md:px-[13px] md:py-0 md:h-[59px]">
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
        <div className="hidden lg:flex items-center ml-8 xl:ml-16">
          <NavigationMenu>
            <NavigationMenuList className="flex items-end gap-6 xl:gap-[80px]">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    onClick={() => scrollToSection(item.href)}
                    className="font-['Poppins',Helvetica] font-normal text-black text-lg xl:text-[20px] hover:text-green-600 transition-colors cursor-pointer"
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
            onClick={() => scrollToSection('#partnership')}
            className="ml-6 xl:ml-[80px] px-4 py-2 h-10 rounded-[7px] border border-solid border-black bg-white hover:bg-gray-50"
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
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg lg:hidden z-40">
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="font-['Poppins',Helvetica] font-normal text-black text-lg hover:text-green-600 transition-colors py-2 text-left"
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="outline"
              onClick={() => scrollToSection('#partnership')}
              className="w-full mt-4 h-10 rounded-[7px] border border-solid border-black bg-white"
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
