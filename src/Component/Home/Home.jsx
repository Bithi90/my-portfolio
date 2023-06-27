import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contactme from "../ContactMe/Contactme";
import MySkills from "../MySkills/MySkills";
import Project from "../Project/Project";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <Project></Project>
            <Contactme></Contactme>
        </div>
    );
};

export default Home;