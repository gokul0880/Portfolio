import React from 'react';
import LeftHome from './LeftHome';
import RightHome from './RightHome';

const Home = () => {
    return (
        <section id='home' className='w-full py-20 flex items-center border-b-[1px] font-titleFont border-b-black'>
            <LeftHome />
            <RightHome />
        </section>
    );
}

export default Home;
