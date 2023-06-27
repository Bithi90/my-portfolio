import { MdEmail, MdLocationPin } from 'react-icons/Md';
import { LuPhoneCall } from 'react-icons/Lu';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/Fa';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contactme = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bv9xh5h', 'template_rv7aqsi', form.current, 'xPTvMBFWCfxvgU6LQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your message send successfully',
                showConfirmButton: false,
                timer: 1500
              })
    };

    return (
        <div>
            <div className='text-center text-orange-500 font-bold text-4xl my-20'>
                <h2>Contact Me</h2>
            </div>
            <div>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col gap-44 lg:flex-row-reverse">
                        <div className="text-center  lg:text-left">
                            <h1 className="text-2xl text-orange-500 pb-4 font-bold">Contact info:</h1>
                            <p className=" flex gap-2 items-center"><MdEmail></MdEmail>kabithi744@gmail.com</p>
                            <p className=" flex gap-2 items-center"><LuPhoneCall></LuPhoneCall>+8801818951990</p>
                            <p className=" flex gap-2 items-center"><MdLocationPin></MdLocationPin>Dhaka , Bangladesh</p>
                            <p className="text-2xl text-orange-500 pb-4 font-bold py-4">Social Network :</p>
                            <div className='text-2xl flex gap-4 items-center'>
                                <Link to='https://www.facebook.com/khadijaakter.bithi.121'><FaFacebook></FaFacebook></Link>
                                <Link to='https://www.linkedin.com/in/khadija-bithi-021607280/'><FaLinkedin></FaLinkedin></Link>
                                <Link to='https://github.com/Bithi90'><FaGithub></FaGithub></Link>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-center text-orange-500 font-bold text-xl my-8'>Write me a message</h2>
                            <div className="card flex-shrink-0 w-[600px]  shadow-2xl bg-base-100">
                                <form ref={form} onSubmit={sendEmail} className="card-body w-[600px]">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input name='name' type="text" placeholder="Name" className="input input-bordered " />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input name='email' type="text" placeholder="Email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Message</span>
                                        </label>
                                        <input name='message'  type="text" placeholder="Write Your Message" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-block bg-orange-500 text-white">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactme;