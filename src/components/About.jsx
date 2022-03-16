import React from 'react'

const About = () => {
  return (
    <div className='flex bg-black justify-center items-center'>
        <div className='md:w-3/4 w-full flex flex-col md:flex-row justify-start items-center p-4'>
            <div className='flex flex-col md:w-3/5 w-auto p-4'>
                <h1 className='text-white text-3xl font-bold'>VISION</h1>
                <br />
                <p className='text-white'>With a compassion to change the world with our cutting-edge state-of-the-art technology, XOO envisions a paradigm shift for our community. We believe that communities are capable to provide to the best of their capacities, enriching generations if provided the appropriate tools.</p>
                <br />
                <p className='text-white'>In pursuit of a world where every individual is happy and feels blessed, we always forget that people need conventional or unconventional money to thrive. Therefore, we make sure that people connected earn as they go.</p>
            </div>
            <div className='flex flex-col md:w-2/5 w-auto bg-violet-300 h-56 m-4 p-4 rounded-xl flex justify-center items-center'>
                <h1 className='text-black text-3xl font-bold'>HOLD XOO & EARN!</h1>
                <button
                    type="button"
                    className="flex flex-row justify-center items-center my-5 mx-2 bg-[#892CDC] p-3 rounded cursor-pointer hover:bg-[#52057B]"
                    >
                    
                    <p className="text-white text-base font-semibold">
                        Buy Now
                    </p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default About