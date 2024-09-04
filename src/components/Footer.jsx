import React from 'react';
import { FaBehance, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { logo } from '../assets';
import styles from '../style';
import { navLinks } from '../constants/data';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="contact" className={`w-full bg-[#f0efec] relative flex flex-col gap-3 sm:px-16 px-16 sm:py-12 py-4 -z-0 `}>
      
      <div className='flex md:flex-row flex-col md:justify-between justify-center items-center gap-[50px]'>
        <div className='flex md:items-start items-center flex-col gap-2 md:mt-0 mt-10 z-10'>
          <a href='#'>
            <div className='flex gap-0 items-center'>
              <img src={logo} alt="logo" className="w-[130px] z-30 object-cover" />
            </div>
          </a>
          <p className='md:max-w-[480px] w-[95%] text-[18px] text-black md:text-start text-center'>
            مرحبا بكم في مؤسسة داهانك للديكور
          </p>
          
        </div>

        <div className='flex md:flex-row flex-col md:justify-between justify-center md:items-start items-center gap-[40px] md:mt-0 mt-10 z-10'>
          <ul className='flex flex-col gap-3 md:text-start text-center'>
           {
            navLinks.map((item , index) => (
              <li
              key={index}
              className={`relative font-poppins font-medium cursor-pointer text-[17px] duration-300 
              text-black
              } hover:text-mauve`}
            >
              <Link onClick={scrollTop} to={item.to}>
                {item.nameAr}
              </Link>
            </li>
            ))
           }
          </ul>

          <ul className='flex flex-col justify-center items-center gap-3 md:text-start text-center'>
            <li><h3 className='text-black text-[20px] font-semibold'>Social media</h3></li>

            <ul className='flex flex-row gap-2 items-center'>
              <li className='flex items-center gap-4 '>
                <div className='circle-icons w-[50px] h-[50px] flex justify-center items-center rounded-full bg-transparent'>
                  <a href='#' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                    <FaFacebook className="text-black" size={25} />
                  </a>
                </div>
              </li>
              <li className='flex items-center gap-4 '>
                <div className='circle-icons w-[50px] h-[50px] flex justify-center items-center rounded-full bg-transparent'>
                  <a href='#' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                    <FaInstagram className="text-black" size={25} />
                  </a>
                </div>
              </li>
              <li className='flex items-center gap-4 '>
                <div className='circle-icons w-[50px] h-[50px] flex justify-center items-center rounded-full bg-transparent'>
                  <a href='#' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                    <FaTwitter className="text-black" size={25} />
                  </a>
                </div>
              </li>
            </ul>

          </ul>

          <ul className='flex flex-col gap-5 justify-center items-center md:text-start text-center'>
            <li><h3 className='text-black text-[20px] font-semibold'>تواصل</h3></li>
            <li className='flex  flex-row gap-10 items-center'>
              <a href="#" className='flex gap-3 text-black text-[16px] duration-300 hover:text-blue font-medium'>
                <FaEnvelope className='circle-icons text-black' size={25} />  
                <span>adressemail@com</span>
              </a>
            </li>
            <li className='flex flex-row gap-10 items-center'>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex gap-3 text-black text-[16px] duration-300 hover:text-blue font-medium"
              >
                <FaPhoneAlt size={25} className="text-black" />
                <span>123456789</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='w-full flex flex-col gap-3 mt-5 center'>
        <p className='text-black text-[18px] w-full text-center'>
        2024 &copy; كل الحقوق محفوظة لمؤسسة داهانك 
        </p>
      </div>
    </footer>
  )
}

export default Footer;
