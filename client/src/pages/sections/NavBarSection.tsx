import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const NavBarSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { name: "Home", width: "w-[84px]" },
    { name: "Services", width: "w-[116px]" },
    { name: "About", width: "w-[84px]" },
    { name: "Contact", width: "w-[114px]" },
  ];

  return (
    <header className="flex justify-center w-full h-[59px] px-[13px] py-0">
      <div className="flex items-center justify-between w-full max-w-[1440px]">
        {/* Logo section */}
        <div className="flex items-center h-[45.09px]">
          <img
            className="w-[47px] h-10 object-cover"
            alt="Logo"
            src="/figmaAssets/logo.png"
          />
          <h1 className="ml-[11px] font-['Poppins',Helvetica] font-semibold text-black text-[35px]">
            NUTRAZS
          </h1>
        </div>

        {/* Navigation section */}
        <div className="flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-end gap-[94px]">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={`${item.width} h-[32.61px] font-['Poppins',Helvetica] font-normal text-black text-[22px]`}
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
            className="ml-[94px] w-36 h-10 rounded-[7px] border border-solid border-black bg-white"
          >
            <span className="font-['Poppins',Helvetica] font-normal text-black text-lg tracking-[-0.36px]">
              Get Quote
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};
