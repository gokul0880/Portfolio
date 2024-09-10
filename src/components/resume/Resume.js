import React from 'react'
import Title from '../layout/Title'

export const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
        <div className="flex justify-center items-center text-center">
        <Title 
          title="VISIT MY PORTFOLIO, GIVE YOUR FEEDBACK" 
          des="My projects" 
        />
        </div>
        <div>
            <ul className='w-full grid grid-cols-4 text-center'>
                <li className='resumeLi'>EDUCATION</li>
                <li className='resumeLi'>PROFESSIONAL SKILLS</li>
                <li className='resumeLi'>ACHIVEMENTS</li>
                <li className='resumeLi'>CERTIFICATIONS</li>
            </ul>
        </div>
    </section>
    )
}
