import React from 'react';

const Card = ({ title, des, icon }) => {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center justify-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-300">
      <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
        <div className='flex flex-col items-center gap-6 translate-y-14 group-hover:translate-y-0 transition-transform duration-300'>
          <div className='flex items-center justify-center py-5'>
            <span className='text-5xl text-designColor'>
              {icon}
            </span>
          </div>
          <div className='text-center'>
            <h2 className='text-2xl font-titlefont font-bold text-gray-300'>{title}</h2>
            <p className='text-gray-400'>{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
