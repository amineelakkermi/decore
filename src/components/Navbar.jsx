import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import styles from '../style';
import { navLinks } from '../constants/data';
import { Link } from 'react-router-dom';
import { logo, logoWhite } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTop2 = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav
      className={`${styles.paddingX} fixed w-full flex justify-between items-center py-3 ${
        scrolled ? 'bg-beige' : 'bg-transparent'
      } transition-colors duration-300 z-50`}
    >
      <div className='flex-1'>
        <Link onClick={scrollTop2} to="/" className='font-bold text-4xl text-black'>
          <img src={scrolled ? logo : logoWhite} className='w-[150px]' alt="logo" />
        </Link>
      </div>
      <div className='flex-1'>
        <ul className="list-none lg:flex hidden justify-center items-center flex-1 gap-16">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={`relative font-poppins font-medium cursor-pointer text-[17px] duration-300 ${
                scrolled ? 'text-black' : 'text-white'
              } hover:text-mauve`}
            >
              <Link onClick={scrollTop2} to={item.to}>
                {item.nameAr}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={`lg:hidden flex flex-1 justify-end items-center`}>
        {toggle ? (
          <RiCloseLine color={scrolled ? "black" : "white"} cursor="pointer" size={27} onClick={() => setToggle(false)} />
        ) : (
          <RiMenu3Line color={scrolled ? "black" : "white"} cursor="pointer" size={27} onClick={() => setToggle(true)} />
        )}

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          }
          flex-col gap-10 z-20 p-6 absolute top-[50%] left-5 mx-10 my-2 rounded-xl bg-[#ded7cd] justify-center items-center sidebar`}
        >
          <ul className="list-none flex justify-center items-center gap-8 flex-col">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className={`relative font-poppins font-medium cursor-pointer text-[17px] duration-300 text-black hover:text-mauve`}
              >
                <Link to={item.to} onClick={() => { setToggle(false); scrollTop2(); }}>
                  {item.nameAr}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
