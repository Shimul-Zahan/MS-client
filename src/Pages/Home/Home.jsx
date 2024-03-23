import React, { useContext } from 'react'
import Nav from '../../Components/Navbar/Nav'
import Footer from '../../Components/Footer/Footer'
import DeskNav from '../../Components/Navbar/DeskNav'
import Slider from '../Slider/Slider'
import Banner from '../Banner/Banner'
import Card from '../../Components/Card/Card'
import Categories from '../../Components/Categories.jsx/Categories'
import { MyContext } from '../../Auth/AuthProvide'
import { ScaleLoader } from 'react-spinners'

const Home = () => {

    const { loading } = useContext(MyContext);

    if (loading) {
        return <div className='w-full h-screen bg-gray-700 flex justify-center items-center'>
            <ScaleLoader color="#0000FF" />
        </div>
    }

    return (
        <>
            <div className='min-h-screen dark:bg-gray-700'>
                <Nav />
                <DeskNav />
                <Slider />
                <Categories />
                <div className='grid grid-cols-1 lg:grid-cols-4 justify-center items-center gap-8 w-full px-10 py-10'>
                    <Card path={''} image={"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Test-Surface-Laptop-5-Sandstone-02?wid=380&hei=213&fit=crop"} />
                    <Card path={''} image={"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-Studio-2-CONS-M001?wid=380&hei=213&fit=crop"} />
                    <Card path={''} image={"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss?wid=380&hei=213&fit=crop"} />
                    <Card path={''} image={"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSX-CP-Xbox-Series-X?wid=380&hei=213&fit=crop"} />
                </div>
                <Banner />
                <div className='px-10 py-10'>
                    <h1 className='text-4xl font-bold mb-7 dark:text-white'>For business</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-4 justify-center items-center gap-8 w-full'>
                        <Card path={''} image={"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-LIfestyle-M2?wid=380&hei=213&fit=crop"} />
                        <Card path={''} image={"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Copilot-Commercial?wid=380&hei=213&fit=crop"} />
                        <Card path={''} image={"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Microsoft-Teams-Commercial?wid=380&hei=213&fit=crop"} />
                        <Card path={''} image={"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Copilot-For-Security?wid=380&hei=213&fit=crop"} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home