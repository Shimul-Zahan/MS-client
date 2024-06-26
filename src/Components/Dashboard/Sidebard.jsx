import React, { useContext, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import logo from '../../assets/WhatsApp_Image_2024-03-15_at_02.20.45_1_-removebg-preview.png'
import logoDark from '../../assets/dark.png'
import { MyContext } from '../../Auth/AuthProvide'
import { MdHomeFilled } from "react-icons/md";
import './sidebar.css'
import { FaCartPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { AiFillHourglass } from "react-icons/ai";
import { MdAdminPanelSettings } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdOutlinePayments } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { IoSettings } from 'react-icons/io5'

const Sidebard = () => {

    const { isSidebarOpen, darkMode } = useContext(MyContext);

    return (
        <section className='flex justify-start items-start w-full'>
            <div className={`${isSidebarOpen ? 'w-0 duration-500' : 'w-96 duration-500'} flex h-screen bg-[#21295c] flex-col justify-between border-e`}>
                <div className="py-6">
                    <Link to='/' className='flex justify-center items-center'>
                        <img src={logoDark} alt="" className='h-24 w-52' />
                    </Link>
                    <div className='mt-2'>
                        <NavLink to='/dashboard' className='flex justify-between items-center text-[#b9a683] hover:bg-[#b9a683] hover:text-black p-5'>
                            <div className='flex justify-start items-center gap-3'>
                                <MdHomeFilled className='text-2xl' />
                                <h1 className='text-2xl'>DASHBOARD</h1>
                            </div>
                            <div className='pr- text-[#21295c]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="20px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                            </div>
                        </NavLink>
                        <div>
                            <h1 className='px-12 mt-5 text-2xl text-[#b9a683] mb-5'>Client Facing</h1>
                        </div>
                        <ul className="space-y-1 px-5">
                            <NavLink to='/dashboard/products' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <FaCartPlus className='text-2xl' />
                                    <h1 className='text-2xl'>Products</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="20px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/customer' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <FaUsers className='text-2xl' />
                                    <h1 className='text-2xl'>Customers</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="20px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/transactions' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <MdOutlinePayments className='text-2xl' />
                                    <h1 className='text-2xl'>Transactions</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="20px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/geography' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <BiWorld className='text-2xl' />
                                    <h1 className='text-2xl'>Geography</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="20px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                        </ul>
                    </div>

                    {/* navlinks */}
                    <div className='mt-6'>
                        <h1 className="px-12 mt-5 text-2xl text-[#b9a683] mb-5 ">Sales</h1>
                        <ul className="space-y-1 px-5">
                            <NavLink to='/dashboard/overview' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <AiFillHourglass className='text-2xl' />
                                    <h1 className='text-2xl'>Overview</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="20px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/daily' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <FaRegCalendar className='text-2xl' />
                                    <h1 className='text-2xl'>Daily</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="20px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/monthly' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <FaCalendarAlt className='text-2xl' />
                                    <h1 className='text-2xl'>Monthly</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="20px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/breakdown' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <MdHomeFilled className='text-3xl' />
                                    <h1 className='text-2xl'>Breakdown</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="20px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                        </ul>
                    </div>
                    <div className='mt-6'>
                        <h1 className="px-12 mt-5 text-2xl text-[#b9a683] mb-5 ">Management</h1>
                        <ul className="space-y-1 px-5">
                            <NavLink to='/dashboard/user' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <FaUsers className='text-2xl' />
                                    <h1 className='text-2xl'>Users</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="20px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/admin' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <MdAdminPanelSettings className='text-2xl' />
                                    <h1 className='text-2xl'>Admin</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="20px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/performance' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <GrDocumentPerformance className='text-2xl' />
                                    <h1 className='text-2xl'>Performance</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="20px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>

                        </ul>
                    </div>
                </div>
                <div class="sticky inset-x-0 bottom-0 z-50 flex justify-between bg-[#21295c] items-center pr-4 border-t border-gray-100 text-[#b9a683] ">
                    <a href="#" class="flex items-center gap-2 p-4">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            class="size-10 rounded-full object-cover"
                        />

                        <div>
                            <p class="text-lg">
                                <strong class="block font-medium">Eric Frusciante</strong>

                                <span> eric@frusciante.com </span>
                            </p>
                        </div>
                    </a>
                    <IoSettings className='text-3xl text-[#ddd5c7]' />
                </div>
            </div>
            {/* heres dashboard outlets */}
            <div className="w-full overflow-x-scroll">
                <div className=''>
                    <Navbar />
                </div>
                <Outlet />
            </div>
        </section>
    )
}

export default Sidebard
