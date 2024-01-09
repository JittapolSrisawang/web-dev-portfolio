import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <nav className="w-screen bg-slate-50 border-b-2 border-gray-200">
      <div className="w-full mx-auto max-w-7xl px-8 py-4 flex justify-between items-center">
        <h2 className="text-3xl text-slate-800 font-bold">
          <a href="#home">
            Portfolio<span className="text-orange-600">.dev</span>
          </a>
        </h2>
        <div className="sm:hidden" onClick={handleClick}>
          {!nav ? (
            <Bars3Icon className="h-6 w-6 text-slate-800" />
          ) : (
            <XMarkIcon className="h-6 w-6 text-slate-800" />
          )}
        </div>
        <div className="hidden sm:flex font-bold ">
          <li>
            <Link to="home" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} offset={50} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-slate-50 w-full px-8"}>
        <li>
          <Link to="home" onClick={handleClose} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" onClick={handleClose} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" onClick={handleClose} smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" onClick={handleClose} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
