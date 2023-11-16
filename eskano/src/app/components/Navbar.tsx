"use client"
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "صفحه اصلی" },
    { href: "#about-us", label: "پروژه ها" },
    { href: "#products", label: "وبلاگ" },
    { href: "/travel", label: "سفر با ما" },
    { href: "#contact-us", label: "تماس با ما" },
    { href: "#contact-us", label: "تیم ما" },
  ];
  return (
    <>
      <header className="sm:px-8 px-4 py-2 w-full">
        <nav className="flex justify-between items-center max-container px-32">
        <Link href="/" className="text-3xl font-bold">
            اسکانو
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
            <li key={item.label}>
                <Link
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                {item.label}
                </Link>
            </li>
            ))}
        </ul>
        <div
            className="hidden max-lg:block cursor-pointer z-50"
            onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            }}
        >
            <RxHamburgerMenu className="text-4xl" />
        </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto z-50 bg-white">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl p-2 text-black bg-green-400 rounded-full" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default Navbar;