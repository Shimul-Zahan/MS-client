import { useState } from 'react'
import './deskNav.css'
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import logo from '../../assets/WhatsApp Image 2024-03-15 at 02.20.45.jpeg'

const DeskNav = () => {

    const [toggle, setToggle] = useState(false);

    const menuItem = [
        {
            nav: 'Clienteer Hub',
            link: '/',
            submenu: true,
            submenuItem: [
                { name: 'Apple', link: '/apple' },
                { name: 'Komla', link: '/apple' },
                { name: 'Kola', link: '/apple' },
                { name: 'Pineapple', link: '/apple' },
                { name: 'Guava', link: '/apple' }
            ]
        },
        {
            nav: 'PulseFlow',
            link: '/about'
        },
        {
            nav: 'SalesSpark',
            link: '/contact',
            submenu: true,
            submenuItem: [
                { name: 'Apple', link: '/apple' },
                { name: 'Komla', link: '/apple' },
                { name: 'Kola', link: '/apple' },
                { name: 'Pineapple', link: '/apple' },
                { name: 'Guava', link: '/apple' }
            ]
        },
        {
            nav: 'FinanceForte',
            link: '/login',
        },
        {
            nav: 'TaskTorch',
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
        {
            nav: 'Support',
            link: '/login',
        },
    ]

    return (
        <nav className='hidden lg:block px-20 py-10'>
            <div className='flex justify-between items-center text-xl pb-8'>
                <ul className='flex justify-between items-center gap-8'>
                    <img src={logo} alt="" className='h-16 w-40' />
                    {
                        menuItem && menuItem.map((nav, index) =>
                            <Link key={index} to={`/extra/${nav.nav}`} className="nav-item cursor-pointer">{nav.nav}</Link>
                        )
                    }
                </ul>
                <ul className='flex justify-between items-center gap-8'>
                    <div onClick={() => setToggle(!toggle)} className='flex cursor-pointer justify-center items-center gap-3'>
                        <li className='cursor-pointer nav-item'>All Microsoft</li>
                        <FaAngleDown />
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <Link to={`/extra/${'Search'}`} className='cursor-pointer nav-item'>Search</Link>
                        <IoSearchOutline className='text-2xl' />
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <Link to="/registration" className='cursor-pointer nav-item'>Sign in</Link>
                        <VscAccount className='text-3xl ' />
                    </div>
                </ul>
            </div>
            <div className={`${toggle ? 'absolute top-32 w-[75%] right-16 duration-300 z-50' : 'hidden'}`}>
                <footer className="bg-gray-200">
                    <div className="mx-10 px-4 py-10 sm:px-6 lg:px-8">
                        <div className="lg:flex lg:items-start lg:gap-8">
                            <div className="mt-8 grid grid-cols-2 gap-2 lg:mt-0 lg:grid-cols-6 lg:gap-y-16 w-full">
                                <div className="col-span-2 sm:col-span-1">
                                    <p className="font-medium text-gray-900">Services</p>

                                    <ul className="mt-6 space-y-4 text-xl">
                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> 1on1 Coaching </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> Company Review </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> HR Consulting </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> SEO Optimisation </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <p className="font-medium text-gray-900">Company</p>

                                    <ul className="mt-6 space-y-4 text-xl">
                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <p className="font-medium text-gray-900">Helpful Links</p>

                                    <ul className="mt-6 space-y-4 text-xl">
                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> Contact </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> FAQs </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> Live Chat </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <p className="font-medium text-gray-900">Legal</p>

                                    <ul className="mt-6 space-y-4 text-xl">
                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> Accessibility </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> Returns Policy </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> Refund Policy </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> Hiring Statistics </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <p className="font-medium text-gray-900">Downloads</p>

                                    <ul className="mt-6 space-y-4 text-xl">
                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> Marketing Calendar </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> SEO Infographics </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <p className="font-medium text-gray-900">Downloads</p>

                                    <ul className="mt-6 space-y-4 text-xl">
                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> Marketing Calendar </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75"> SEO Infographics </a>
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