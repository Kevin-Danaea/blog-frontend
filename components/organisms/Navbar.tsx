"use client";

import React, { useState } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
} from "@heroui/navbar";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";
import { NavItems } from "@/components/molecules/NavItems";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeroUINavbar
      className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700"
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-serif font-bold text-xl text-blog-title">
              Kevin Aguilera
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-4/5" justify="end">
        <ul className="lg:flex gap-4 justify-start ml-2 space-x-4">
          <NavItems items={siteConfig.navItems} />
        </ul>
      </NavbarContent>

      <NavbarMenu>
        <NavItems isMobile items={siteConfig.navMenuItems} />
      </NavbarMenu>
    </HeroUINavbar>
  );
};
