import React from 'react'
import { AiFillPlayCircle, AiOutlinePaperClip } from 'react-icons/ai'

const Nft = () => {
  return (
    <div className='flex bg-black w-auto h-auto justify-center items-center'>
        <div className='flex md:flex-row flex-col md:w-3/4 w-auto'>
            <div className='flex flex-col justify-center md:w-1/2 w-auto p-4 m-4'>
                <h1 className='text-white text-6xl font-extrabold py-2'>
                    NFTs COMING SOON
                </h1>
                <p className='text-white text-left py-2'>
                    Ready for the best NFT collection yet? Get lucky!
                </p>
                <div className='flex md:flex-row flex-col'>
                    <button
                    type="button"
                    className="flex flex-row justify-center items-center my-5 mx-2 bg-[#892CDC] p-3 rounded cursor-pointer hover:bg-[#52057B]"
                    >
                    <AiFillPlayCircle className="text-white mr-2" />
                    <p className="text-white text-base font-semibold">
                        Register
                    </p>
                    </button>
                </div>
            </div>
            <div className='md:w-1/2 md:h-3/4 m-4 p-4 flex justify-center items-center'>
                <img src='./nft.jpg' alt='' />
            </div>
        </div>
    </div>
  )
}

export default Nft