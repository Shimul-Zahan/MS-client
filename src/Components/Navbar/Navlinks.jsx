import React, { useContext, useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { MyContext } from '../../Auth/AuthProvide';

const Navlinks = () => {

    const [heading, setHeading] = useState('');

    const menuItem = [
        {
            nav: 'home',
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
            nav: 'about',
            link: '/about'
        },
        {
            nav: 'contact',
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
            nav: 'login',
            link: '/login',
        },
        {
            nav: 'registration',
            link: '/registration',
            submenu: true,
            submenuItem: [
                { name: 'Apple', link: '/apple' },
                { name: 'Komla', link: '/apple' },
                { name: 'Kola', link: '/apple' },
                { name: 'Pineapple', link: '/apple' },
                { name: 'Guava', link: '/apple' }
            ]
        }
    ]

    return (
        <>
            {
                menuItem.map(item =>
                    <div>
                        <div className='group cursor-pointer'>
                            <li onClick={() => heading !== item.nav ? setHeading(item.nav) : setHeading('')}
                                className='flex justify-between md:justify-center items-center gap-1 pr-4'>
                                {item.nav} {item.submenu && <RiArrowDropDownLine className='text-xl' />}
                            </li>
                        </div>
                        <div>
                            {/* mobile view bro */}
                            <div className={` pt-2 ${heading === item.nav ? 'md:hidden' : 'hidden'} `}>
                                {
                                    item.submenu && (
                                        <div>
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