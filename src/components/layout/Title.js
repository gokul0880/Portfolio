import React from 'react'

const Layout = ({title , des}) => {
  return (
    <div className='flex flex-col gap-4 font-titlefont py-20'>
        <h3 className='text-sm uppercase font-light text-designColor tracking-wide'>{title}</h3>
        <h1 className='text-5xl text-gray-300 font-bold capitalize'>{des}</h1>
        </div>
  )
}

export default Layout