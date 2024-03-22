import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import Navlinks from './Navlinks';
import { MyContext } from '../../Auth/AuthProvide';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';

const Nav = () => {

    const [open, setOpen] = useState(false);

    const { user, logOut } = useContext(MyContext);

    const logOutUser = () => {
        logOut().then(res => {
            localStorage.removeItem('ms_userInfo');
            toast.warning('Successfully Logout', {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
            })
        }).catch(err => console.log(err))
    }

    const userManual = localStorage.getItem("ms_userInfo");
    const loginUser = JSON.parse(userManual);


    return (
        <div className='lg:h-0 darl:text-white'>
            <nav className='flex justify-between z-50 relative h-full items-center lg:hidden md:px-10'>
                <div className='w-full md:w-auto px-4 py-5 flex justify-between items-center'>
                    <h1 className='text-xl font-bold'>LOGO</h1>
                    <div onClick={() => setOpen(!open)} className='text-2xl md:hidden cursor-pointer'>
                        {open ? <IoClose /> : <GiHamburgerMenu />}
                    </div>
                </div>
                <ul className='md:flex hidden justify-center items-center gap-10 py-5 uppercase'>
                    <Navlinks />
                </ul>
                <button className='md:block hidden px-6 py-2 bg-red-500 rounded-full'>
                    Get Startered
                </button>


                {/* mobile Nav */}
                <ul className={`md:hidden py-10 bg-gray-700 absolute text-white w-full h-screen space-y-5 bottom-0 top-16 left-0 pl-4
                duration-700 ${open ? 'left-0' : 'left-[-100%]'}
                `}>
                    <Navlinks />
                    <div className="mr-4 relative w-full pr-2">
                        {/* Search bar */}
                        <input
                            type="text"
                            className="bg-gray-700 w-full border border-white text-white px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Search..."
                        />
                        <div className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer'>
                            <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                    </div>
                    {
                        (user || loginUser) ? <div onClick={logOutUser} className='flex justify-start items-center gap-3'>
                            <Link to="/registration" className='cursor-pointer nav-item'>Logout</Link>
                            {/* <VscAccount className='text-3xl ' /> */}
                            <img src={user?.reloadUserInfo?.photoUrl || `http://localhost:8000/image/${loginUser?.image}`} alt="" className='h-12 w-12 rounded-full' />
                        </div> : <div className='flex justify-start items-center gap-3'>
                            <Link to="/registration" className='cursor-pointer nav-item'>Sign in</Link>
                            <VscAccount className='text-3xl ' />
                        </div>

                    }
                </ul>

            </nav>
        </div>
    )
}

export default Nav