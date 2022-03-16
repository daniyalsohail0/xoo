import React from 'react'
import { BsFillTelephoneFill, BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const Contact = () => {
  return (
    <div className='bg-black w-auto h-auto flex flex-col justify-center items-center'>
        <div className='flex flex-col w-1/2'>
            <h1 className='text-white text-mono font-bold tracking-widest text-3xl md:text-5xl text-center'>
                    Contact Us
            </h1>
            <p className='text-white text-mono tracking-wide text-center p-4'>We are always looking forward to get in touch with our valuable clients, leave us a message and one of our representatives will connect with you shortly.</p>
        </div>
        <div className='flex md:flex-row flex-col w-3/4 h-auto m-4 bg-white rounded-xl'>
            <div className='text-white border md:w-2/6 w-auto h-auto bg-[#892CDC] rounded-xl flex flex-col m-2 md:m-4'>
                <h1 className='text-white text-mono font-semibold tracking-widest text-3xl md:text-3xl p-4'>Contact Information</h1>
                <p className='text-white text-mono font-normal tracking-wide p-4'>Fill up our form or feel free to contact us on our given contact details</p>
                <div className='flex p-4'>
                    <BsFillTelephoneFill />
                    <p className='text-white underline hover:text-blue-600 pl-4'>+1 302 100 2200</p>
                </div>
                <div className='flex p-4'>
                    <AiOutlineMail />
                    <p className='text-white underline hover:text-blue-600 pl-4'>contactus@xoo.com</p>
                </div>
                <div className='flex p-4'>
                    <HiOutlineLocationMarker />
                    <p className='text-white hover:text-blue-600 pl-4'>Nowhere, yet.</p>
                </div>
                <div className='flex p-4'>
                    <div className='p-2 hover:cursor-pointer hover:border hover:rounded-full'>
                        <BsFacebook />
                    </div>
                    <div className='p-2 hover:cursor-pointer hover:border hover:rounded-full'>
                        <BsInstagram />
                    </div>
                    <div className='p-2 hover:cursor-pointer hover:border hover:rounded-full'>
                        <BsTwitter />
                    </div>
                    <div className='p-2 hover:cursor-pointer hover:border hover:rounded-full'>
                        <BsLinkedin />
                    </div>
                </div>
            </div>
            <div className='md:w-4/6 w-auto p-4 flex flex-col'>
                <label for="fname" className='p-2'>First Name</label>
                <input type="text" name="firstname" placeholder="Your name.." className='border p-2 rounded'/>
                <label for="fname" className='p-2'>Second Name</label>
                <input type="text" name="firstname" placeholder="Your name.." className='border p-2 rounded'/>
                <label for="fname" className='p-2'>Email</label>
                <input type="text" name="firstname" placeholder="abc@gmail.com" className='border p-2 rounded'/>
                <label for="fname" className='p-2'>Phone Number</label>
                <input type="text" name="firstname" placeholder="+ 92 333 240 6797" className='border p-2 rounded'/>
                <h3 className='font-extrabold p-2'>What type of query is this?</h3>
                <textarea id="subject" name="subject" placeholder="Write something.." className='p-2 h-28 border rounded'></textarea>
                <button className='bg-[#892CDC] border-2 rounded-xl text-white pt-2 pb-2 pl-4 pr-4 m-4 cursor-pointer hover:bg-[#52057B] hover:text-white hover:border'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Contact