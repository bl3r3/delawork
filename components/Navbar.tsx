"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";
import Logo from "../public/logo-azul.png";

import Image from "next/image";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#0052A1");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 60) {
        setColor("#ffffff");
        setTextColor("#0052A1");
      } else {
        setColor("#ffffff");
        setTextColor("#0052A1");
      }
    };

    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-5 text-corporativo">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={130} height={100} />
        </Link>
        <ul className="hidden lg:flex ">
          <li className="p-5">
            <Link href="/">
              <GoHomeFill size={30} fill="#0052A1" />
            </Link>
          </li>
          <li className="p-5 text-corporativo">
            <Link href="/nosotros">Nosotros</Link>
          </li>
          <li className="p-5 text-corporativo">
            <Link href="/servicios">Servicios</Link>
          </li>
          <li className="p-5 text-corporativo">
            <Link href="/emprendedores">Emprendedores</Link>
          </li>
          <li className=" p-1 text-corporativo">
            <Link href="/contacto">
              <button className="text-corporativo bg-white rounded-3xl border-2 border-corporativo p-3">
                Contacto
              </button>
            </Link>
          </li>
        </ul>
        {/* mobile Button */}

        <div onClick={handleNav} className="lg:hidden block z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "#ffffff" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* mobile menu */}
        <div
          className={
            nav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-corporativo text-center ease-in duration-300"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-red text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-white text-4xl hover:text-second-color-hl">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-white text-4xl hover:text-second-color-hl">
              <Link href="/about">Sobre Nosotros</Link>
            </li>
            <li className="p-4 text-white text-4xl hover:text-second-color-hl">
              <Link href="/portfolio">Servicios</Link>
            </li>
            <li className="p-4 text-white text-4xl hover:text-second-color-hl">
              <Link href="/contact">Emprendedores</Link>
            </li>
            <li className=" p-1 text-corporativo">
              <Link href="/contact">
                <button className="text-corporativo text-4xl bg-white rounded-3xl border-2 border-corporativo p-3">
                  Contacto
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
