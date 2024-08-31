import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCubes  } from '@fortawesome/free-solid-svg-icons';
import Layout from '../layout/Title';
import Card from './Card';
export const Features = () => {
  return (
    <section id='features' className='w-full  border-b-[1px] border-b-black'>
      <div>
      <Layout title="Features" des="WHAT I DO" />
      <div className='grid grid-cols-2'>
  <Card 
    title="Web Development" 
    des="Building responsive and dynamic websites using modern web technologies like HTML, CSS, JavaScript, and frameworks such as React.
    Proficient in Java and Python for building robust applications, SQL for effective data management, and Tailwind CSS for modern, responsive design. I combine these skills to create seamless and high-quality solutions."
    icon={<FontAwesomeIcon icon={faCode} />} 
  />
  <Card 
    title="Blockchain Development" 
    des="I develop decentralized applications (dApps) and smart contracts on blockchain platforms like Ethereum. Smart contracts, written in Solidity, are self-executing agreements that automate transactions based on code-defined terms. dApps utilize these contracts to operate without a central authority, leveraging blockchain technology to ensure transparency, security, and immutability.."
    icon={<FontAwesomeIcon icon={faCubes} />} 
  />
</div>
      </div>
    </section>
  )
}

export default Features