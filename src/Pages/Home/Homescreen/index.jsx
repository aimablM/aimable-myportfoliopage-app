import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
//import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
// eslint-disable-next-line no-unused-vars
import Projects from "../Projects";
//import BlogArticles from "../BlogArticles";
import ComingSoon from "../ComingSoon";
//import Navbar from "../Navbar"; 



export default function Home() {
    return (
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <Projects />
            <ComingSoon />
            {/*< BlogArticles /> */}
            {/*< MyPortfolio /> */}
            <ContactMe/>
            <Footer />
        </>
    );
}