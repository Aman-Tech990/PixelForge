import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className='w-full relative h-screen overflow-hidden'>
            <Image
                src='/Hero_Section.gif'
                alt='Hero'
                width={1000}
                height={1000}
                className='w-full h-full object-cover absolute inset-0'
                priority
            />
            <div className='absolute w-full flex flex-col items-center mt-20'>
                <h1 className='font-bold text-7xl font-game'>Start Your </h1>
                <h1
                    className='text-8xl font-game text-yellow-400'
                    style={{ textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000" }}
                >
                    Coding Adventure
                </h1>
                <h2 className='mt-5 font-game text-4xl'>Beginner friendly coding courses and projects</h2>

                <Link
                    href='/sign-in'
                >
                    <Button
                        variant='pixel'
                        className='mt-5 font-game text-3xl p-6 cursor-pointer'
                    >
                        GET STARTED
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero;