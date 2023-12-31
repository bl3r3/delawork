"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";
import LogoAzul from "../public/logo-svg.svg";
import LogoBlanco from "../public/Logos-blanco-14.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavbarProps = {
  color: string;
  textColor: string;
  home?: boolean;
};

const MenuItems = [
  {
    label: "",
    url: "/",
    icon: <GoHomeFill size={30} />,
    active: true,
  },
  {
    label: "Nosotros",
    url: "/nosotros",
    active: false,
  },
  {
    label: "Servicios",
    url: "/servicios",

    active: false,
  },
  {
    label: "Contact",
    url: "/contacto",
    active: true,
  },
];

const Navbar = (props: NavbarProps) => {
  const { color, textColor, home } = props;
  const [nav, setNav] = useState(false);
  const currentRoute = usePathname();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-5 text-corporativo">
        <Link href="/">
          <Image
            src={home ? LogoBlanco : LogoAzul}
            alt="Logo"
            width={180}
            height={180}
          />
        </Link>
        <ul className="hidden lg:flex ">
          <li className="p-5" style={{ color: `${textColor}` }}>
            <Link href="/">
              <GoHomeFill size={30} fill={textColor} />
            </Link>
          </li>
          <li
            className={
              currentRoute === "/nosotros" ? "font-extrabold	p-5" : " p-5"
            }
            style={{ color: `${textColor}` }}
          >
            <Link href="/nosotros">Nosotros</Link>
          </li>
          <li
            className={
              currentRoute === "/servicios" ? "font-extrabold	p-5" : " p-5"
            }
            style={{ color: `${textColor}` }}
          >
            <Link href="/servicios">Servicios</Link>
          </li>
          <li
            className={
              currentRoute === "/emprendedores" ? "font-extrabold	p-5" : " p-5"
            }
            style={{ color: `${textColor}` }}
          >
            <Link href="/emprendedores">Emprendedores</Link>
          </li>
          <li className=" p-1 text-corporativo">
            <Link href="/contacto">
              <button
                className={
                  currentRoute === "/contacto"
                    ? "font-extrabold text-corporativo bg-white rounded-3xl border-2 border-corporativo p-3"
                    : "ext-corporativo bg-white rounded-3xl border-2 border-corporativo p-3"
                }
              >
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
              <Link href="/nosotros">Sobre Nosotros</Link>
            </li>
            <li className="p-4 text-white text-4xl hover:text-second-color-hl">
              <Link href="/servicios">Servicios</Link>
            </li>
            <li className="p-4 text-white text-4xl hover:text-second-color-hl">
              <Link href="/emprendedores">Emprendedores</Link>
            </li>
            <li className=" p-1 text-corporativo">
              <Link href="/contacto">
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
