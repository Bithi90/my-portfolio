import picture from '../../assets/portfolio image.webp'
import { BsDownload } from 'react-icons/Bs';

const Banner = () => {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('resumePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resumePDF.pdf';
                alink.click();
            })
        })
    }
    

    return (
        <div className=' flex justify-center gap-x-6 '>
            <div className='my-auto'>
                <h4 className='text-left text-orange-500 font-bold text-3xl'>MERN</h4>
                <h2 className='text-left text-orange-500 font-bold text-3xl pb-10'>DEVELOPER</h2>
                <p className='pb-10'>Hi, I am Khadija Akter Bithi. A passionate MERN Stack <br /> Developer based in Dhaka , Bangladesh.</p>
                <div>
                    <button onClick={onButtonClick} className="btn text-white btn-warning bg-orange-500">Download Resume<BsDownload></BsDownload></button>
                </div>
            </div>
            <div>
                <img className='h-[400px] w-[500px]' src={picture} alt="" />
            </div>
        </div>
    );
};

export default Banner;