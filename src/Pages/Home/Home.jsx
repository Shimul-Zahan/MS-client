import React from 'react'
import Nav from '../../Components/Navbar/Nav'
import Footer from '../../Components/Footer/Footer'
import DeskNav from '../../Components/Navbar/DeskNav'
import Slider from '../Slider/Slider'
import Banner from '../Banner/Banner'

const Home = () => {
    return (
        <>
            <div className='min-h-screen'>
                <Nav />
                <DeskNav />
                <Slider />
                <Banner />
            </div>
            <Footer />
        </>
    )
}

export default Home