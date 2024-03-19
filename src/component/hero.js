import hero from "../Assets/hero.png"
import { FaSquareXTwitter,FaLinkedin,FaGithub } from "react-icons/fa6";



export default function Hero(){
    const config  = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
            twitter: 'https://twitter.com/jvlcode',
            linkedin: 'https://in.linkedin.com/',
            github: 'https://github.com/'
        }
    }




    return <section className="flex  flex-col md:flex-row px-2 py-32 bg-secondary justify-center">
        <div className="md:w-1/2 flex flex-col"> 
            <h1 className="w-1/2 text-white text-6xl font-hero-font"  >Hi,<br></br>I am Balamurugan
    <p className="text-2xl">Im a Front-end developer</p></h1>
    <div className="flex py-10">
     <a className="px-5 hover:text-white" href={config.social.twitter} target="_blank" rel="noopener"><FaSquareXTwitter size={40}/></a>
     <a className="px-5  hover:text-white" href={config.social.linkedin} target="_blank" rel="noopener"><FaLinkedin size={40}/></a>
     <a className="px-5   hover:text-white" href={config.social.github} target="_blank" rel="noopener"><FaGithub  size={40}/></a>

    </div>
    </div>
   
    <img className="md:w-1/3"src={hero} alt="bala"></img>
   
    </section>
}