import { IoMenu } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import supportImg from "../../assets/support.jpg";
import logo from '../../assets/remove bg.png';

const SupportNav = () => {
    return (
        <div className="py-4 lg:px-16 px-2 w-full relative" style={{
            background: `url(${supportImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "350px", // Adjust the height as needed
        }}>
            <div className="absolute inset-0 bg-blue-500 opacity-50"></div>
            <nav className='flex justify-between items-start h-full relative z-10'>
                <img src={logo} alt="" className="md:w-80 w-56"/>
                <div className='flex justify-center items-center gap-6 md:mt-5'>
                    <section className='flex justify-center items-center gap-4'>
                        <button className='lg:text-2xl text-white leading-[22px] font-bold border px-2 md:px-12 py-1'>Contact</button>
                    </section>
                    <section className='lg:ml-12 flex items-center gap-3'>
                        <p className="flex justify-center items-center text-white"><IoHome className="text-white mr-2" />Log in</p>
                        <span className="text-white">|</span>
                        <IoMenu className="lg:w-10 h-12 text-white lg:ml-4" />
                    </section>
                </div>
            </nav>
        </div>
    );
};

export default SupportNav;