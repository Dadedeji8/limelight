import { useState } from "react"
import { Link } from "react-router-dom"

const NavbarComponent = () => {
    const [opened, setOpened] = useState(false)
    return (
        <div className="w-full">
            <nav className='absolute px-9 pt-5 z-30 flex justify-between w-full' >
                <div className="w-full md:w-fit  text-white hover:text-yellow-900 duration-500 flex items-center justify-between cursor-pointer ">
                    <Link to={'/'} className=' cursor-pointer text-3xl font-black text-shadow-lg'>
                        LIMELIGHT
                    </Link>
                    <div className="flex flex-col gap-1 md:hidden cursor-pointer">
                        <span className="w-[30px] h-[2px] bg-white block rounded"></span>
                        <span className="w-[30px] h-[2px] bg-white block rounded"></span>
                        <span className="w-[30px] h-[2px] bg-white block rounded"></span>

                    </div>
                </div>
                <ul className="hidden text-white md:flex gap-4">
                    <li className="hover:text-yellow-900 transition-colors ease-in-out duration-300">
                        <Link to={'/'}>
                            Home
                        </Link>

                    </li>
                    <li className="hover:text-yellow-900 transition-colors ease-in-out duration-300">
                        <Link to={'/'}>
                            About Us
                        </Link>

                    </li>
                    <li className="hover:text-yellow-900 transition-colors ease-in-out duration-300">

                        <Link to={'/'}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="h-svh w-full block absolute top-0 left-[100%] rounded-s-2xl bg-yellow-900 z-50 md:hidden">

            </div>
        </div>
    )
}

export default NavbarComponent
