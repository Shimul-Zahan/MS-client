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
                    <Card path={''} image={"https://plus.unsplash.com/premium_photo-1661898424988-a5f6d40d3db2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    <Card path={''} image={"https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    <Card path={''} image={"https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    <Card path={''} image={"https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                </div>
                <Banner />
                <div className='px-10 py-10'>
                    <h1 className='text-4xl font-bold mb-7 dark:text-white'>For business</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-4 justify-center items-center gap-8 w-full'>
                        <Card path={''} image={"https://images.unsplash.com/photo-1503437313881-503a91226402?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                        <Card path={''} image={"https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                        <Card path={''} image={"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                        <Card path={''} image={"https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home