import { Helmet } from "react-helmet-async";


const AboutMe = () => {
    return (
        <div>
            <Helmet>
                <title>About || My Portfolio</title>
           </Helmet>
            <div className="pt-20">
                <div className="text-center pb-20">
                    <h2 className=" text-orange-500 font-bold text-4xl pb-8">About Me</h2>
                    <p className=" text-orange-500 font-bold text-lg">Personal Info</p>
                </div>
                <div className="flex justify-center gap-x-6">
                    <div className="flex justify-center gap-x-6 text-left">
                        <div>
                            <p>First Name : Khadija</p>
                            <p>Age : 20 Years</p>
                            <p>Phone : +8801818951990</p>
                            <p>Address : Dhaka, Bangladesh</p>
                            <p>Language : Bangla, English</p>
                        </div>
                        <div>
                            <p>Last Name : Bithi</p>
                            <p>Nationality : Bangladeshi</p>
                            <p>Email : <a className="text-blue-600" href="kabithi744@gmail.com">kabithi744@gmail.com</a></p>
                            <p>LinkedIn : <a className="text-blue-600" href="https://www.linkedin.com/in/khadija-bithi-021607280/">Khadija Bithi</a></p>
                            <p>Github : <a className="text-blue-600" href="https://github.com/Bithi90">Bithi90</a></p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-x-6">
                        <h2 className="border-2 border-zinc-300 p-8 rounded"> <span className="text-orange-500 font-bold text-4xl">30+</span> <br />Completed Project</h2>
                        <h2 className="border-2 border-zinc-300 p-8 rounded"><span className="text-orange-500 font-bold text-4xl ">146+</span> <br />Problem solving</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;