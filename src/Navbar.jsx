import React, { useState, useRef, useEffect } from 'react';
import Navbarimage from '../portfolioimage/Navbarimage.png'; // Ensure the path and filename are correct
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('.lg:hidden')
      ) {
        setIsMenuOpen(false); // Close the menu if clicked outside
      }
    };

    // Add event listener if the menu is open
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-gray-800 text-white z-50">
      {/* Logo */}
      <div>
        <img src={Navbarimage} alt="Logo" className="h-12 w-18" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-6 mr-[16px]">
        <ul className="flex space-x-4">
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to="Home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to="About" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to="Skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to="Project" smooth={true} duration={500}>
              Project
            </Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to="Contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden">
        <MenuIcon className="cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-90 z-50"
        >
          <ul className="space-y-4 text-center text-xl font-bold">
            <li className="text-white hover:text-gray-400 cursor-pointer">
              <Link
                to="Home"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="text-white hover:text-gray-400 cursor-pointer">
              <Link
                to="About"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="text-white hover:text-gray-400 cursor-pointer">
              <Link
                to="Skills"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li className="text-white hover:text-gray-400 cursor-pointer">
              <Link
                to="Project"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Project
              </Link>
            </li>
            <li className="text-white hover:text-gray-400 cursor-pointer">
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
