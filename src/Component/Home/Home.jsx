import { Helmet } from "react-helmet-async";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contactme from "../ContactMe/Contactme";
import MySkills from "../MySkills/MySkills";
import Project from "../Project/Project";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || My Portfolio</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <AboutMe></AboutMe>
                <MySkills></MySkills>
                <Project></Project>
                <Contactme></Contactme>
            </div>
        </div>
    );
};

export default Home;