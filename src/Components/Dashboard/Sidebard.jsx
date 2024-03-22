import React, { useContext, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import logo from '../../assets/WhatsApp Image 2024-03-15 at 02.20.45.jpeg'
import { MyContext } from '../../Auth/AuthProvide'
import { MdHomeFilled } from "react-icons/md";
import './sidebar.css'

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
                        <ul className="space-y-1">
                            <NavLink to='/dashboard/products' className='flex justify-between items-center text-[#b9a683] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <MdHomeFilled className='text-3xl' />
                                    <h1 className='text-2xl'>Products</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/customer' className='flex justify-between items-center text-[#b9a683] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <MdHomeFilled className='text-3xl' />
                                    <h1 className='text-2xl'>Customers</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/transactions' className='flex justify-between items-center text-[#b9a683] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <MdHomeFilled className='text-3xl' />
                                    <h1 className='text-2xl'>Transactions</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/geography' className='flex justify-between items-center text-[#b9a683] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <MdHomeFilled className='text-3xl' />
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
                        <h1 className="px-12 mt-10 text-2xl text-[#b9a683] mb-5 ">TOOLS</h1>
                        <ul className="space-y-1">
                            <NavLink to='/dashboard/products' className='flex justify-between items-center text-[#b9a683] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <MdHomeFilled className='text-3xl' />
                                    <h1 className='text-2xl'>General</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/customer' className='flex justify-between items-center text-[#b9a683] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <MdHomeFilled className='text-3xl' />
                                    <h1 className='text-2xl'>Billing</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/transactions' className='flex justify-between items-center text-[#b9a683] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <MdHomeFilled className='text-3xl' />
                                    <h1 className='text-2xl'>Invoices</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                        </ul>
                    </div>
                    <div className='mt-6'>
                        <h1 className="px-12 mt-10 text-2xl text-[#b9a683] mb-5 ">FINANCE</h1>
                        <ul className="space-y-1">
                            <NavLink to='/dashboard/products' className='flex justify-between items-center text-[#b9a683] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <MdHomeFilled className='text-3xl' />
                                    <h1 className='text-2xl'>General</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/customer' className='flex justify-between items-center text-[#b9a683] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <MdHomeFilled className='text-3xl' />
                                    <h1 className='text-2xl'>Billing</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/transactions' className='flex justify-between items-center text-[#b9a683] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <MdHomeFilled className='text-3xl' />
                                    <h1 className='text-2xl'>Invoices</h1>
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

// import { useState } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import Navbar from './Navbar';
// import logo from '../../assets/WhatsApp Image 2024-03-15 at 02.20.45.jpeg';

// const Sidebar = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     return (
//         <section className='flex justify-start items-start bg-[#21295c]'>
//             {isSidebarOpen ? (
//                 <div style={{
//                     width: '320px', // Adjust width as needed
//                     overflowX: 'hidden',
//                     transition: 'width 0.5s ease'
//                 }}>
//                     <div className="py-6">
//                         <img src={logo} alt="" className='h-24 w-full rounded-lg' />

//                         <div className='mt-6'>
//                             <h1 className="flex justify-center gap-12 items-center w-full  py-4 text-xl bg-[#EABE6C] text-black text-center font-bold">DASHBOARD <span onClick={toggleSidebar}><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg></span></h1>
//                             <div><h1 className='px-12 mt-10 text-xl text-[#b9a683] mb-5'>Client Facing</h1></div>
//                             <ul className="px-8 space-y-1 text-[#EABE6C]">
//                                 <li>
//                                     <NavLink to='/dashboard/route' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#b9a683] hover:bg-gray-100 hover:text-gray-700">
//                                         Products
//                                     </NavLink>
//                                 </li>

//                                 <li>
//                                     <NavLink to='/dashboard/route' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#b9a683] hover:bg-gray-100 hover:text-gray-700">
//                                         Customers
//                                     </NavLink>
//                                 </li>

//                                 <li>
//                                     <NavLink to='/dashboard/route' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#b9a683] hover:bg-gray-100 hover:text-gray-700">
//                                         Transactions
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to='/dashboard/route' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#b9a683] hover:bg-gray-100 hover:text-gray-700">
//                                         Geography
//                                     </NavLink>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className='mt-6 px-8'>
//                             <h1 className="block rounded-lg px-4 py-2 text-xl text-[#b9a683] font-bold ">TOOLS</h1>
//                             <ul className=" space-y-1 text-[#c7af83]">
//                                 <li>
//                                     <NavLink to='/dashboard/route' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#b9a683] hover:bg-gray-100 hover:text-gray-700">
//                                         General
//                                     </NavLink>
//                                 </li>

//                                 <li>
//                                     <NavLink to='/dashboard/route' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#b9a683] hover:bg-gray-100 hover:text-gray-700">
//                                         Billing
//                                     </NavLink>
//                                 </li>

//                                 <li>
//                                     <NavLink to='/dashboard/route' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#b9a683] hover:bg-gray-100 hover:text-gray-700">
//                                         Invoices
//                                     </NavLink>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className='mt-6 px-8'>
//                             <h1 className="block rounded-lg px-4 py-2 text-xl text-[#b9a683] font-bold">FINANCE</h1>
//                             <ul className=" space-y-1">
//                                 <li>
//                                     <NavLink to='/dashboard/route' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#b9a683] hover:bg-gray-100 hover:text-gray-700">
//                                         General
//                                     </NavLink>
//                                 </li>

//                                 <li>
//                                     <NavLink to='/dashboard/route' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#b9a683] hover:bg-gray-100 hover:text-gray-700">
//                                         Billing
//                                     </NavLink>
//                                 </li>

//                                 <li>
//                                     <NavLink to='/dashboard/route' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#b9a683] hover:bg-gray-100 hover:text-gray-700">
//                                         Invoices
//                                     </NavLink>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="flex items-center w-12 mt-12" >
//                     <span onClick={toggleSidebar}><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="44px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg></span>
//                 </div>
//             )}
//             {/* Sidebar Content */}
//             <div className='w-full'>
//                 <div className='w-full h-20'>
//                     <Navbar />
//                 </div>
//                 <Outlet />
//             </div>
//         </section>
//     );
// };

// export default Sidebar;