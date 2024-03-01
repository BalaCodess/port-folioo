import resumeImg from '../Assets/resume.png'


export default function Resume(){
    const config = {
        link: 'https://www.africau.edu/images/default/sample.pdf'
    }



return <section id="resume" className='flex flex-col md:flex-row bg-secondary px-5'>
    <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
        <img className=" w-[300px]"src={resumeImg}></img>
    </div>
    <div className="md:w-1/2 flex justify-center"> 
    <div className='flex flex-col justify-center'>
     <h1 className='text-6xl text-white  font-hero-font border-b-2 mb-5 flex justify-center'>Resume</h1>
     <p className='text-white py-5 font-hero-font text-2xl'>You can view my resume <a className='btn' href={config.link} download target='_blank'>Download</a></p>

     </div>
    
    </div>

</section>





}