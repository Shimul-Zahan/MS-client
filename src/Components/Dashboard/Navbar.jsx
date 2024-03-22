import React, { useContext } from 'react';
import { MyContext } from '../../Auth/AuthProvide';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import { toast } from 'react-toastify';
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";

const Navbar = () => {

    // setIsSidebarOpen,
    // isSidebarOpen,

    const { user, logOut, setIsSidebarOpen, isSidebarOpen } = useContext(MyContext);

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
    const userPhotoUrl = user?.reloadUserInfo?.photoUrl || `http://localhost:8000/image/${loginUser?.image}`;

    return (
        <nav className="bg-[#21295c] p-4 flex justify-between items-center pr-10">
            {/* Left side */}
            <div className="flex items-center gap-5">
                {
                    isSidebarOpen ? <FaChevronCircleRight onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='text-3xl text-white cursor-pointer' /> :
                        <FaCircleChevronLeft onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='text-3xl text-white cursor-pointer' />
                }
                <div className="mr-4 relative">
                    {/* Search bar */}
                    <input
                        type="text"
                        className="bg-gray-700 lg:min-w-[300px] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Search..."
                    />
                    <div className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer'>
                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                </div>
            </div>

            {/* Right side */}
            <div className="flex items-center justify-end gap-5">
                {/* Notification icon */}
                <button className="text-white mr-4 focus:outline-none">
                    <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m13.58 11.6-1.33-2.18V6.33A4.36 4.36 0 0 0 10 2.26a2.45 2.45 0 0 0 0-.38A1.94 1.94 0 0 0 8 0a1.94 1.94 0 0 0-2 1.88 1.64 1.64 0 0 0 0 .38 4.36 4.36 0 0 0-2.25 4.07v3.09L2.42 11.6a1.25 1.25 0 0 0 1.06 1.9h1.77A2.68 2.68 0 0 0 8 16a2.68 2.68 0 0 0 2.75-2.5h1.77a1.25 1.25 0 0 0 1.06-1.9zM7.25 1.88A.7.7 0 0 1 8 1.25a.7.7 0 0 1 .75.63 6 6 0 0 0-.75 0 5.9 5.9 0 0 0-.75 0zM8 14.75a1.44 1.44 0 0 1-1.5-1.25h3A1.44 1.44 0 0 1 8 14.75zm-4.52-2.5 1.34-2.17.18-.31V6.33a4 4 0 0 1 .6-2.12A2.68 2.68 0 0 1 8 3.12a2.68 2.68 0 0 1 2.4 1.09 4 4 0 0 1 .6 2.12v3.44l.18.31 1.34 2.17z" /></svg>
                </button>

                {
                    (user || loginUser) ? <div onClick={logOutUser} className='flex justify-center items-center gap-3'>
                        <Link to="/registration" className='cursor-pointer nav-item text-white hover:underline'>Logout</Link>
                        {/* <VscAccount className='text-3xl ' /> */}
                        <img src={userPhotoUrl} alt="" className='h-12 w-12 rounded-full' />
                    </div> : <div className='flex justify-center items-center gap-3'>
                        <Link to="/registration" className='cursor-pointer nav-item'>Sign in</Link>
                        <VscAccount className='text-3xl ' />
                    </div>
                }
            </div>
        </nav>
    );
};

export default Navbar;


