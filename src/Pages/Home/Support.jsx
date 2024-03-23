import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useRef } from "react";
import SupportNav from "./SupportNav";
import emailjs from '@emailjs/browser';
import Footer from "../../Components/Footer/Footer";
import background from "../../assets/background.webp"
const Support = () => {

    const form = useRef();

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm()
    const sendEmail = (e) => {
        e.preventDefault()
        const name = e.target.user_name.value;
        const email = e.target.user_email.value;
        const message = e.target.message.value;
        console.log(name, email, message);

        if (name && email && message) {
            e.preventDefault();
            // console.log(data);

            emailjs.sendForm('service_7ay2tdk', 'template_z5dxop8', form.current, '8R2AlonC3RdZ-e1uD')
                .then((result) => {
                    window.alert("Message sent successfully");
                    e.target.reset();
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            window.alert("Please fill all field")
        }

    }


    return (
        <div className="dark:bg-gray-700 dark:text-white">
            <div
                className="hero min-h-80"
            >
                <SupportNav />
                <div className="pt-24 pb-14 z-10">
                    <h2 className="md:text-[50px] font-bold text-white text-center">
                        How can we help?
                    </h2>
                    <p className="text-white text-center">
                        <Link to="/" className="text-3xl font-semibold cursor-pointer">
                            Send us a message!
                        </Link>
                    </p>
                </div>
            </div>


            <div className="py-24">
                <div
                    className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden px-24">
                    <div className="">
                        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                        <form ref={form} onSubmit={sendEmail} class="space-y-4">
                            <div className="flex justify-center items-center w-full gap-5">
                                <div className="w-full">
                                    <label class="sr-only" for="name">Name</label>
                                    <input
                                        class="w-full rounded-lg border-[#0C356A] border-2 p-3 text-sm"
                                        placeholder="First Name"
                                        type="text"
                                        name="user_name"
                                    />
                                </div>
                                <div className="w-full">
                                    <label class="sr-only" for="name">Name</label>
                                    <input
                                        class="w-full rounded-lg border-[#0C356A] border-2 p-3 text-sm"
                                        placeholder="Last Name"
                                        type="text"
                                        name=""
                                    />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4">
                                <div>
                                    <label class="sr-only" for="email">Email</label>
                                    <input
                                        class="w-full rounded-lg border-[#0C356A] border-2 p-3 text-sm"
                                        placeholder="Email address"
                                        type="email"
                                        name="user_email"
                                    />
                                </div>
                            </div>
                            <div>
                                <label class="sr-only" for="message">Message</label>

                                <textarea
                                    class="w-full rounded-lg border-[#0C356A] border-2 p-3 text-sm"
                                    placeholder="Your Message"
                                    rows="8"
                                    id="message"
                                    name="message"
                                ></textarea>
                            </div>

                            <div class="mt-4 w-full bg-amber-600">
                                <button
                                    type="submit"
                                    class="w-full mx-auto text-center flex justify-center items-center rounded-lg px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Send Now
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Google Map  */}
                    <div className="relative h-full max-md:min-h-[350px]">
                        <iframe src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                            allowfullscreen></iframe>
                    </div>

                </div>
            </div>



            <div className="bg-blue-500 my-20 mt-28 py-[60px] px-4"
                style={{
                    background: `url(${background})`,
                    backgroundColor: "#f9f9f9",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >
                <h1 className="uppercase text-center text-white font-bold text-4xl">DisCover our Award-winning Blog</h1>
                <p className="text-white text-center mt-2">Written by customer & employee experience experts who live & breathe experience engagement every day.</p>
                <div className="flex justify-center mt-5"> <button className="text-white bg-amber-600 py-4 px-6 mt-5">Read our Blog</button></div>
                <div className="flex flex-col md:flex-row justify-center gap-10 lg:gap-44 mt-16">

                    <div className="flex items-center justify-center gap-4 min-w-1/4">

                        <div>
                            <h1 className="text-5xl font-bold lg:leading-normal leading-7 text-white">
                                Inc.
                            </h1>
                            <p className="text-base font-normal text-white mt-5 w-56">NGDATA announced that it has signed a definitive.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 min-w-1/4">

                        <div>
                            <h1 className="text-5xl font-bold  lg:leading-normal leading-7 text-white">

                                NGDATA
                            </h1>
                            <p className="text-base font-normal text-white mt-5 w-56">NGDATA announced that it has signed a definitive.</p>
                        </div>

                    </div>
                    <div className="flex items-center justify-center gap-4 min-w-1/4">

                        <div>
                            <h1 className="text-5xl font-bold text-white">

                                Customer<br />Guru
                            </h1>
                            <p className="text-base font-normal text-white mt-5 w-56">NGDATA announced that it has signed a definitive.</p>
                        </div>

                    </div>


                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Support