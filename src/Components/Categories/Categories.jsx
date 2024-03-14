import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {

    const menus = [
        {
            title: 'Shop Surface devices',
            image: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Surface-Devices?wid=40&hei=40",
            path: '/shop-surface'
        },
        {
            title: 'Choose your Microsoft 365',
            image: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40",
            path: '/ms-365'
        },
        {
            title: 'Shop for your business ',
            image: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Business?wid=40&hei=40",
            path: '/shop-business'
        },
        {
            title: 'Shop for accessories',
            image: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Accessories?wid=40&hei=40",
            path: '/shop-accessories'
        },
        {
            title: 'Shop Xbox games and consoles',
            image: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Xbox-Games-Consoles?wid=40&hei=40",
            path: '/xbox'
        },
    ]

    return (
        <div className='pt-10 pb-20'>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
                {
                    menus.map((menu, idx) =>
                        <Link key={idx} to={menu.path} className='flex justify-center items-center flex-col gap-2'>
                            <img src={menu.image} alt="cat-image" className='h-10 w-10' />
                            <h1 className='font-bold underline text-blue-700'>{menu.title}</h1>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Categories