import ss1 from '../../assets/2023-06-27 (2).png';
import ss2 from '../../assets/2023-06-27 (3).png';
import ss3 from '../../assets/2023-06-27 (4).png';
import ss4 from '../../assets/2023-06-27 (5).png';
import ss5 from '../../assets/2023-06-27 (7).png';
import ss6 from '../../assets/2023-06-27 (8).png';
import ss7 from '../../assets/2023-06-27 (9).png';
import ss8 from '../../assets/2023-06-27 (10).png';
import ss9 from '../../assets/2023-06-27 (11).png';
import ss10 from '../../assets/2023-06-27 (12).png';
import ss11 from '../../assets/2023-06-27 (13).png';
import ss12 from '../../assets/2023-06-27 (14).png';
import ss13 from '../../assets/2023-06-27 (15).png';
import { Link } from 'react-router-dom';
import { BsArrow90DegRight } from 'react-icons/Bs';


const Project = () => {
    return (
        <div>
            <div className='text-center text-orange-500 font-bold text-4xl my-20'>
                <h2>My Projects</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div>
                    <Link to='https://recipe-hub-c3383.web.app/category/0'><h2 className="text-orange-500 font-bold text-2xl mb-10 flex justify-center gap-2">Recipe Hub<BsArrow90DegRight></BsArrow90DegRight></h2></Link>
                    <div className="h-[300px] w-[400px] p-8 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full">
                            <img src={ss1}/>
                        </div>
                        <div className="carousel-item h-full">
                            <img src={ss2} />
                        </div>
                        <div className="carousel-item h-full">
                            <img src={ss3} />
                        </div>
                        <div className="carousel-item h-full">
                            <img src={ss4}/>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div>
                <Link to='https://smart-toys-c8079.web.app/'><h2 className="text-cyan-500 font-bold text-2xl mb-10 flex justify-center gap-2">Smart Toy<BsArrow90DegRight></BsArrow90DegRight></h2></Link>
                    <div className="h-[300px] w-[400px] p-8 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full">
                            <img src={ss5}/>
                        </div>
                        <div className="carousel-item h-full">
                            <img src={ss6} />
                        </div>
                        <div className="carousel-item h-full">
                            <img src={ss7} />
                        </div>
                        <div className="carousel-item h-full">
                            <img src={ss8}/>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div>
                <Link to='https://summer-camp-b8153.web.app/'><h2 className="text-orange-500 font-bold text-2xl mb-10 flex justify-center gap-2">Sports Academy<BsArrow90DegRight></BsArrow90DegRight></h2></Link>
                    <div className="h-[300px] w-[400px] p-8 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full">
                            <img src={ss9}/>
                        </div>
                        <div className="carousel-item h-full">
                            <img src={ss10} />
                        </div>
                        <div className="carousel-item h-full">
                            <img src={ss11} />
                        </div>
                        <div className="carousel-item h-full">
                            <img src={ss12}/>
                        </div>
                        <div className="carousel-item h-full">
                            <img src={ss13}/>
                        </div>
                    </div>
                    <div></div>
                </div>
                
            </div>
        </div>
    );
};

export default Project;