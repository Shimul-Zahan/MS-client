import React, { useContext, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import logo from '../../assets/WhatsApp Image 2024-03-15 at 02.20.45.jpeg'
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

const Sidebard = () => {

    const { isSidebarOpen } = useContext(MyContext);

    return (
        <section className='flex justify-start items-start'>
            <div className={`${isSidebarOpen ? 'w-0 duration-500' : 'w-96 px-2 duration-500'} flex h-screen bg-[#21295c] flex-col justify-between border-e`}>
                <div className="py-6">
                    <img src={logo} alt="" className='h-24 w-full rounded-lg' />
                    <div className='mt-3'>
                        <NavLink to='/dashboard' className='flex justify-between items-center text-[#b9a683] hover:bg-[#b9a683] hover:text-black p-5'>
                            <div className='flex justify-start items-center gap-3'>
                                <MdHomeFilled className='text-3xl' />
                                <h1 className='text-2xl'>DASHBOARD</h1>
                            </div>
                            <div className=' text-[#21295c]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                            </div>
                        </NavLink>
                        <div>
                            <h1 className='px-12 mt-10 text-2xl text-[#b9a683] mb-5'>Client Facing</h1>
                        </div>
                        <ul className="space-y-1 px-5">
                            <NavLink to='/dashboard/products' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                <FaCartPlus className='text-2xl'  />
                                    <h1 className='text-2xl'>Products</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/customer' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                <FaUsers className='text-2xl' />
                                    <h1 className='text-2xl'>Customers</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/transactions' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                <MdOutlinePayments className='text-2xl' />
                                    <h1 className='text-2xl'>Transactions</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/geography' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                <BiWorld className='text-2xl' />
                                    <h1 className='text-2xl'>Geography</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                        </ul>
                    </div>

                    {/* navlinks */}
                    <div className='mt-6'>
                        <h1 className="px-12 mt-10 text-2xl text-[#b9a683] mb-5 ">Sales</h1>
                        <ul className="space-y-1 px-5">
                            <NavLink to='/dashboard/overview' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <AiFillHourglass className='text-2xl' />
                                    <h1 className='text-2xl'>Overview</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/daily' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                <FaRegCalendar className='text-2xl' />
                                    <h1 className='text-2xl'>Daily</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/monthly' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                <FaCalendarAlt className='text-2xl' />
                                    <h1 className='text-2xl'>Monthly</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/breakdown' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <MdHomeFilled className='text-3xl' />
                                    <h1 className='text-2xl'>Breakdown</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                        </ul>
                    </div>
                    <div className='mt-6'>
                        <h1 className="px-12 mt-10 text-2xl text-[#b9a683] mb-5 ">Management</h1>
                        <ul className="space-y-1 px-5">
                            <NavLink to='/dashboard/admin' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                <MdAdminPanelSettings className='text-2xl' />
                                    <h1 className='text-2xl'>Admin</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/performance' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                <GrDocumentPerformance className='text-2xl' />
                                    <h1 className='text-2xl'>Performance</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            
                        </ul>
                    </div>
                </div>
            </div>
            {/* heres dashboard outlets */}
            <div className='w-full'>
                <div className='w-full h-24'>
                    <Navbar />
                </div>
                <Outlet />
            </div>
        </section>
    )
}

export default Sidebard
