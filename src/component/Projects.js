import webImg1 from '../Assets/ecommerce-websites.png';
import webImg2 from '../Assets/food-ecommerce.png';
import webImg3 from '../Assets/website-blog.png';
export default function Project(){
    const config = {
        projects : [
            {
                image: webImg1,
                description: 'A Ecommerce Website. Built with MERN Stack.',
                link: 'https://github.com/jvlcode/jvlcart'
            },
            {
                image: webImg2,
                description: 'Food Ecommerce website like Swiggy, Built with Angular & .Net',
                link: 'https://github.com/jvlcode/food'
            },
            {
                image: webImg3,
                description: 'Basic Blog Website . Built with Next JS and MongoDB',
                link: 'https://github.com/jvlcode/blog'
            }
        ]
    }




    return  <section id="projects" className="flex flex-col py-20 px-5 justify-center bg-secondary text-white">
       <div className="w-1/2 ">
         <div className="text-6xl text-white  font-hero-font border-b-2 mb-5 flex justify-center">
            <h1>Projects</h1>
            </div>
       </div>
       <div className="w-full gap-5">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
        {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
        
        </div>
        
       </div>
        



    </section>  




}