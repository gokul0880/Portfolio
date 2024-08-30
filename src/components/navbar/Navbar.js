import React from 'react'
import{logo} from "../../asserts/index"
import { navLinksData } from '../../constants'
import {Link} from  "react-scroll";

const Navbar = () => {
  return (
    <div className='w-full h-20  mx-auto flex justify-between items-centre font-titlefont border-b-[1px] border-b-gray-600'>
        < img src = {logo} alt = "logo" />
        <div>
            <ul className='flex item-centre gap-10 my-7'>
                {
                    navLinksData.map(({_id , title , link}) => (
                        <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300' key={_id}>
                            <Link
                            activeClass = "active"
                            to = {link}
                            spy = {true}
                            smooth = {true}
                            ofSet = {-70}
                            duration = {500}>  
                                {title}
                            </Link>                        
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Navbar