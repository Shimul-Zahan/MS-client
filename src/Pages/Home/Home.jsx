import React from 'react'
import Nav from '../../Components/Navbar/Nav'
import Footer from '../../Components/Footer/Footer'
import DeskNav from '../../Components/Navbar/DeskNav'

const Home = () => {
    return (
        <>
            <div className='min-h-screen'>
                <Nav />
                <DeskNav />
            </div>
            <Footer />
        </>
    )
}

export default Home