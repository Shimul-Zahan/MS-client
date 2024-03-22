import React, { useContext, useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { MyContext } from '../../Auth/AuthProvide';
import { Link } from 'react-router-dom';

const Navlinks = () => {

    const [heading, setHeading] = useState('');

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

    return (
        <>
            {
                menuItem.map(item =>
                    <div>
                        <div className='group cursor-pointer'>
                            <li onClick={() => heading !== item.nav ? setHeading(item.nav) : setHeading('')}
                                className='flex justify-between md:justify-center items-center gap-5 py-2 text-xl pr-4'>
                                <Link to={item.link}>
                                    {item.nav}
                                </Link> {item.submenu && <RiArrowDropDownLine className='text-xl' />}
                            </li>
                        </div>
                        <div>
                            {/* mobile view bro */}
                            <div className={` pt-2 ${heading === item.nav ? 'md:hidden' : 'hidden'} `}>
                                {
                                    item.submenu && (
                                        <div className='space-y-4 text-lg px-5'>
                                            {
                                                item?.submenuItem.map(subMenuItem =>
                                                    <li>{subMenuItem.name}</li>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Navlinks