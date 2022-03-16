import React from 'react'
import { ImFacebook2 } from 'react-icons/im'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const Socials = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-black'>
        <div className='m-4 p-4'>
            <h1 className='text-white text-3xl font-bold uppercase text-center'>Connect With Us For The Latest Updates</h1>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2'>
            <button
                type="button"
                className="flex flex-row justify-center items-center my-5 mx-2 bg-sky-400 p-3 rounded cursor-pointer hover:bg-sky-600"
                >
                <ImFacebook2 />
                <p className="text-white text-base font-semibold p-2">
                Facebook
                </p>
            </button>
            <button
                type="button"
                className="flex flex-row justify-center items-center my-5 mx-2 bg-violet-400 p-3 rounded cursor-pointer hover:bg-violet-600"
                >
                <AiFillInstagram />
                <p className="text-white text-base font-semibold p-2">
                Instagram
                </p>
            </button>
            <button
                type="button"
                className="flex flex-row justify-center items-center my-5 mx-2 bg-purple-600 p-3 rounded cursor-pointer hover:bg-purple-800"
                >
                <FaDiscord />
                <p className="text-white text-base font-semibold p-2">
                Discord
                </p>
            </button>
            <button
                type="button"
                className="flex flex-row justify-center items-center my-5 mx-2 bg-cyan-400 p-3 rounded cursor-pointer hover:bg-cyan-600"
                >
                <FaTwitter />
                <p className="text-white text-base font-semibold p-2">
                Twitter
                </p>
            </button>
        </div>
        
    </div>
  )
}

export default Socials