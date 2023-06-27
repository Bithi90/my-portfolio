import logo1 from '../../assets/html-icon-png-4.jpg';
import logo2 from '../../assets/141-1415372_css3-icon-png.png';
import logo3 from '../../assets/Tailwind_CSS_Logo.svg.png';
import logo4 from '../../assets/bootstrap.png';
import logo5 from '../../assets/javascript.png';
import logo6 from '../../assets/React.jpg';
import logo7 from '../../assets/mongoDB.png';
import logo8 from '../../assets/firebase.png';
import logo9 from '../../assets/github.png';
import logo10 from '../../assets/android-icon-transparent-background-4.jpg';
import logo11 from '../../assets/expreess.png';

const MySkills = () => {
    return (
        <div className='mt-20'>
            <div className='text-center text-orange-500 font-bold text-4xl mb-20'>
                <h2>My Skills</h2>
            </div>
            <div className='grid grid-cols-4 gap-4 justify-items-center '>
                <div className='flex items-center gap-x-1'>
                    <img className='h-[50px] w-[50px]' src={logo1} alt="" />
                    <p>HTML</p>
                </div>
                <div className='flex items-center gap-x-1'>
                    <img className='h-[50px] w-[50px]' src={logo2} alt="" />
                    <p>CSS</p>
                </div>
                <div className='flex items-center gap-x-1'>
                    <img className='h-[50px] w-[50px]' src={logo3} alt="" />
                    <p>Tailwind</p>
                </div>
                <div className='flex items-center gap-x-1'>
                    <img className='h-[50px] w-[50px]' src={logo4} alt="" />
                    <p>Bootstrap</p>
                </div>
                <div className='flex items-center gap-x-1'>
                    <img className='h-[50px] w-[60px]' src={logo5} alt="" />
                    <p>Javascript</p>
                </div>
                <div className='flex items-center gap-x-1'>
                    <img className='h-[50px] w-[50px]' src={logo6} alt="" />
                    <p>React</p>
                </div>
                <div className='flex items-center gap-x-1'>
                    <img className='h-[50px] w-[50px]' src={logo7} alt="" />
                    <p>MongoDB</p>
                </div>
                <div className='flex items-center gap-x-1'>
                    <img className='h-[50px] w-[50px]' src={logo8} alt="" />
                    <p>Firebase</p>
                </div>
                <div className='flex items-center gap-x-1'>
                    <img className='h-[50px] w-[60px]' src={logo9} alt="" />
                    <p>Github</p>
                </div>
                <div className='flex items-center gap-x-1'>
                    <img className='h-[50px] w-[50px]' src={logo10} alt="" />
                    <p>Android</p>
                </div>
                <div className='flex items-center gap-x-1'>
                    <img className='h-[50px] w-[50px]' src={logo11} alt="" />
                    <p>Express.js</p>
                </div>
            </div>
        </div>
    );
};

export default MySkills;