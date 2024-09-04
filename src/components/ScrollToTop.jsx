import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY >= 100 ? setIsVisible(true) : setIsVisible(false);
    });
  }, []);

  const goTOtop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <button
        className={`fixed bottom-10 right-2 text-[55px] z-20 cursor-pointer text-gray-700 bg-none rounded-full p-0 border-none ${
          isVisible ? 'block' : 'hidden'
        }`}
        onClick={goTOtop}
      >
        <FaArrowCircleUp />
      </button>
    </div>
  );
};

export default ScrollTop;
