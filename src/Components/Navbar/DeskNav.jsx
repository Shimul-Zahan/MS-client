import { useContext, useEffect, useState } from 'react'
import './deskNav.css'
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import logo from '../../assets/WhatsApp_Image_2024-03-15_at_02.20.45_1_-removebg-preview.png'
import logoDark from '../../assets/dark.png'
import { MyContext } from '../../Auth/AuthProvide';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const DeskNav = () => {

    const [toggle, setToggle] = useState(false);
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


    const menuItem = [
        {
            nav: 'Clienteer Hub',
            link: '/',
        },
        {
            nav: 'Pulse Flow',
            link: '/about'
        },
        {
            nav: 'Sales Spark',
            link: '/contact',
        },
        {
            nav: 'Finance Forte',
            link: '/login',
        },
        {
            nav: 'Support',
            link: '/login',
        },
        {
            nav: 'All Microsoft',
            link: '/registration',
            submenu: true,
            submenuItem: [
                { name: 'Apple', link: '/apple' },
                { name: 'Komla', link: '/apple' },
                { name: 'Kola', link: '/apple' },
                { name: 'Pineapple', link: '/apple' },
                { name: 'Guava', link: '/apple' }
            ]
        },
    ]

    // for darkmode here
    const [darkMode, setDarkMode] = useState(() => {
        const storedPreference = localStorage.getItem('darkMode');
        return storedPreference ? JSON.parse(storedPreference) : false;
    });

    useEffect(() => {
        const htmlElement = document.documentElement;
        if (darkMode) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    console.log(darkMode);

    return (
        <nav className='hidden lg:block px-20 py-10 dark:text-white'>
            <div className='flex justify-between items-center text-xl pb-8'>
                <ul className='flex justify-between items-center gap-8'>
                    {
                        darkMode ? <img src={logoDark} alt="" className='h-16 w-40' />
                            : <img src={logo} alt="" className='h-16 w-40' />

                    }
                    {
                        menuItem && menuItem.map((nav, index) =>
                            <Link key={index} to={`/extra/${nav.nav}`} className="nav-item cursor-pointer">{nav.nav}</Link>
                        )
                    }
                </ul>
                <ul className='flex justify-between items-center gap-8'>
                    <button
                        className="text-3xl text-black dark:text-white px-4 py-2 rounded"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? <CiLight /> : <MdDarkMode />}
                    </button>
                    {
                        (user || loginUser) && <div className='flex cursor-pointer justify-center items-center gap-3'>
                            <Link to='/dashboard' className='cursor-pointer nav-item'>Dashboard</Link>
                        </div>
                    }
                    <div onClick={() => setToggle(!toggle)} className='flex cursor-pointer justify-center items-center gap-3'>
                        <li className='cursor-pointer nav-item'>All Microsoft</li>
                        <FaAngleDown />
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <Link to={`/extra/${'Search'}`} className='cursor-pointer nav-item'>Search</Link>
                        <IoSearchOutline className='text-2xl' />
                    </div>
                    {
                        (user || loginUser) ? <div onClick={logOutUser} className='flex justify-center items-center gap-3'>
                            <Link to="/registration" className='cursor-pointer nav-item'>Logout</Link>
                            {/* <VscAccount className='text-3xl ' /> */}
                            <img src={user?.reloadUserInfo?.photoUrl || `http://localhost:8000/image/${loginUser?.image}`} alt="" className='h-12 w-12 rounded-full' />
                        </div> : <div className='flex justify-center items-center gap-3'>
                            <Link to="/registration" className='cursor-pointer nav-item'>Sign in</Link>
                            <VscAccount className='text-3xl ' />
                        </div>

                    }
                </ul>
            </div>
            <div className={`${toggle ? 'absolute top-32 w-[75%] right-16 duration-300 z-50' : 'hidden'}`}>
                <footer className="bg-gray-200 dark:bg-gray-700">
                    <div className="mx-10 px-4 py-10 sm:px-6 lg:px-8">
                        <div className="lg:flex lg:items-start lg:gap-8">
                            <div className="mt-8 grid grid-cols-2 gap-2 lg:mt-0 lg:grid-cols-6 lg:gap-y-16 w-full">
                                <div className="col-span-2 sm:col-span-1">
                                    <p className="font-medium text-gray-900 dark:text-white">Services</p>

                                    <ul className="mt-6 space-y-4 text-xl">
                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> 1on1 Coaching </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> Company Review </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> Accounts Review </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> HR Consulting </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> SEO Optimisation </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <p className="font-medium text-gray-900 dark:text-white">Company</p>

                                    <ul className="mt-6 space-y-4 text-xl">
                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> About </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> Meet the Team </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> Accounts Review </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <p className="font-medium text-gray-900 dark:text-white">Helpful Links</p>

                                    <ul className="mt-6 space-y-4 text-xl">
                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> Contact </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> FAQs </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> Live Chat </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <p className="font-medium text-gray-900 dark:text-white">Legal</p>

                                    <ul className="mt-6 space-y-4 text-xl">
                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> Accessibility </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> Returns Policy </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> Refund Policy </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> Hiring Statistics </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <p className="font-medium text-gray-900 dark:text-white">Downloads</p>

                                    <ul className="mt-6 space-y-4 text-xl">
                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> Marketing Calendar </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> SEO Infographics </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <p className="font-medium text-gray-900 dark:text-white">Downloads</p>

                                    <ul className="mt-6 space-y-4 text-xl">
                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> Marketing Calendar </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 dark:text-white transition hover:opacity-75"> SEO Infographics </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </nav>
    )
}

export default DeskNav