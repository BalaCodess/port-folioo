import aboutImg from '../Assets/about.png'


export default function About(){
return <section id="about"className='flex flex-col md:flex-row bg-secondary px-5'>
    <div className='md:w-1/2 py-5'>
        <img src={aboutImg} alt="bala"></img>
    </div>
    <div className="md:w-1/2 flex justify-center"> 
    <div className='flex flex-col justify-center'>
     <h1 className='text-6xl text-white  font-hero-font border-b-2 mb-5 flex justify-center'>About Me</h1>
     <p className='text-white py-5 font-hero-font text-2xl'>Hi, myself Balamurugan,Im a Front-end web developer I built wonderful websites by using React.js and tailwind css</p>
     <p className='text-white py-5 font-hero-font text-2xl'> Im proficient in Front-end skills like Html5,Css3,JavaScript,React.Js,Next.js(basics) </p>
    <p className='text-white  py-5 font-hero-font text-2xl'>Im also having a basic knowelegde in Back-end skills like Sql,Spring boot</p>
     </div>
    
    </div>

</section>





}