import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between mt-3 items-center'>
                <div>
                    <Link href={"/"}>
                    <div> <img src="using.png" alt="logo of my firm" width={105} height={105} /> </div>
                    </Link>
                </div>

                <ul className='flex gap-12 text-2xl font-bold ' >
                    {/* <li  className="text-[#E6FFF4]">Home</li> */}
                    <Link href={"/about"} className="text-[#E6FFF4]">About</Link>
                    <Link href={"/contact"}  className="text-[#E6FFF4] pr-2">Contact</Link>
                </ul>


            </nav>
        </>
    )
}

export default Navbar