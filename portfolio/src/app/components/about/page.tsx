import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../button/Button'

export default function About() {
  return (
    <div className="flex items-center justify-between gap-24 my-2.5 text-justify lg:flex-col lg:gap-12 xs:text-left" id='about'>

      {/* image content */}

      <div className={styles.imgContainer}>
        <Image src='/about-img.png' alt='' width={600} height={400} className={styles.img} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
        <div className={styles.rotate}><Image src='/rotate-dark.png' alt='alt-img' width={180} height={180} />
         </div>
         <div className="absolute bottom-20 right-16 sm:hidden"><Image src='/about.png' alt='' width={50} height={50} /></div>
      </div>



      {/* text content */}

      <div className="!flex-1 flex flex-col justify-between gap-4 cursor-pointer items-center">
        <h1 className="text-center text-[65px] lg:text-2xl font-bold bg-gradient-to-b from-[#a600ff] to-[#00c3ff] bg-clip-text text-transparent">About Me</h1>
        <p className="text-xl font-normal sm:text-base"><span className="font-normal text-gray-400">As a self-taught developer, I possess an impressive arsenal of skills in JS, Python, & Golang.</span>
          <br /> Additionally, I excel in Next, TailwindCSS with advanced animation styles for designing and maintaining responsive websites that offer a smooth user experience.<Link href='/projects'><span className='bg-gradient-to-r from-cyan-400 via-teal-600 to-slate-100 bg-clip-text text-transparent font-semibold'> Check out my projects here. </span></Link>
          Apart from all this, I've also won various competitons during my high school, one of which involved building an Arduino-based robot, an Automated Closing bridge, etc...
        </p>
        <div className="my-2.5 flex flex-col gap-1">
          <h1 className="text-center text-[#00c3ff] font-extrabold text-4xl sm:text-2xl">Education</h1>
          <h3 className="text-teal-500 text-xl sm:text-base">Bachelor of Technology</h3>
          <h3 className="font-normal text-gray-400 sm:text-base">2021-2025 | BIT Mesra, India</h3>
          <p className="text-xl font-normal sm:text-base">Pursuing a degree with majors in Chemical Engineering & minor-degree in Python.
          </p>
        </div>
        <Button url='/' text='Resume' />
      </div>
    </div>

  )
}
