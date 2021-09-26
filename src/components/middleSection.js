import About from "../pages/about/about"
import Home from "../pages/home/home"
import Project from "../pages/projects/projects"
import Skills from "../pages/skills/skills"
import Footer from "./footer/footer"


const MiddleSection = ()=>{

    return (
        <>
        <Home/>
        <About/>
        <Skills/>
        <Project/>
        <Footer/>
        </>
    )
}
export default MiddleSection;