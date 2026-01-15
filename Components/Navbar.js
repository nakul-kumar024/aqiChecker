import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between mt-3 items-center'>
                <div>
                    <div> <img src="using.png" alt="logo of my firm" width={105} height={105} /> </div>
                </div>

                <ul className='flex gap-12 text-2xl font-bold ' >
                    <li  className="text-[#E6FFF4]">Home</li>
                    <li  className="text-[#E6FFF4]">About</li>
                    <li  className="text-[#E6FFF4] pr-2">Contact</li>
                </ul>


            </nav>
        </>
    )
}

export default Navbar