import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ image, size, path }) => {
    return (
        <Link to={path}>
            <div className={`min-w-[300px] relative bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between`}>
                <a href="#">
                    <img className="h-full w-full" src={image} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="my-5 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p className="mb-3 font-normal text-xl text-gray-700 dark:text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. in reverse chronological order. Good bye tata</p>

                    <a href="#" className={`inline-flex mt-10 items-center justify-center px-3 py-2 text-xl text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                        Shop Surface Laptop 5
                    </a>
                </div>
            </div>
        </Link>

    )
}

export default Card