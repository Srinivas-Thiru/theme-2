import Head from "next/head";
import {
  AiOutlineLayout,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFilePdf,
  AiOutlineMail,
} from "react-icons/ai";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import Image from "next/image";
import homeicons from "../public/homeicons.svg"
import rec2 from "../public/rec2.png";
import rec1 from "../public/rec1.png";
import bitmoji from "../public/my-bitmoji.png"
import work1 from "../public/work1.png"
import work2 from "../public/work2.png"
import arrow from "../public/arrow.png"
import project1 from "../public/project1.png"
import project2 from "../public/project2.png"
import project3 from "../public/project3.png"
import BsFillMoonStarsFill from  'react-icons/bs'
import { useEffect } from "react";
import boy from "../public/boy.png"


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleWork, setIsVisibleWork] = useState(false);
  const [isVisibleRec, setIsVisibleRec] = useState(false);
  const [isVisibleRec2, setIsVisibleRec2] = useState(false);
  const [isVisibleBoy, setIsVisibleBoy] = useState(false);



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting){
            setIsVisibleBoy(false);

          }
          if (entry.isIntersecting) {
            setIsVisibleRec(true);
            setTimeout(() => {
              setIsVisibleRec2(true);
          }, 950);
          setTimeout(() => {
            setIsVisibleBoy(true);
        }, 1500);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observer.observe(document.querySelector('.recommendations'));

    return () => observer.disconnect();
  }, []);
    

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisibleWork(true);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observer.observe(document.querySelector('.work-section'));

    return () => observer.disconnect();
  }, []);

    

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observer.observe(document.querySelector('.container'));

    return () => observer.disconnect();
  }, []);
  

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sri's Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.png" /> 
      </Head>
      <main className=" bg-[#E3EBF5] px-10 dark:bg-gray-900 md:px-20 lg:px-52">
        <section className="min-h-screen z-10">
     
          {/* <div className="nav flex fixed rounded-full rounded-t-none  ">
                    <ul className="menu">
                      <li>  <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="mt-1 mx-auto cursor-pointer text-2xl md:text-lg"
                  /></li>
                        <li><a href="#home" id="menu-home">Home</a></li>
                        <li><a href="#Work">Work</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1LDZp-rTLuor-2UZVVLtbHElAqMYC2MnO/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
                    </ul>
                </div> */}
          <div className="py-10 mb-12 flex justify-between dark:text-white ">
   
            <h1 className=" z-50 font-burtons text-xl pt-2 animate-fadeIn underline-animation inline-block">get a glimpse of sri</h1>
            <button className="change-btn"  > <a className="" href="https://srinivas-thiru.github.io/"> <AiOutlineLayout className="inline-block mb-1" /></a> </button>
          </div>

                  <div className="social animate-slideRight">

                      <div className="social-btn color-telegram">
                        <div className="icons8-telegram-app ml-1">
                        <a 
                    target="_blank"
                    href="https://www.linkedin.com/in/srinivas-thiru/"></a>
                        </div>
                        <p className="order-1 google-font text-black margin-telgram">
                        <a 
                    target="_blank"
                    href="https://www.linkedin.com/in/srinivas-thiru/">LinkedIn</a> </p>
                      </div>
        
                      <div className="social-btn color-instagram">
                        <div className="icons8-instagram ml-2"><a
                    target="_blank" 
                    href="https://github.com/Srinivas-Thiru"></a></div>
                        <p className="order-1 google-font text-black margin-instagram">
                        <a
                    target="_blank" 
                    href="https://github.com/Srinivas-Thiru">GitHub</a></p>
                      </div>

                   
                      <div className=" social-btn color-whatsapp">
                        <div className="icons8-whatsapp ml-2"> <a 
                    target="_blank"
                    href="https://drive.google.com/file/d/1LDZp-rTLuor-2UZVVLtbHElAqMYC2MnO/view?usp=sharing"></a></div>
                        <p className="order-1 google-font text-black margin-instagram"> <a 
                    target="_blank"
                    href="https://drive.google.com/file/d/1LDZp-rTLuor-2UZVVLtbHElAqMYC2MnO/view?usp=sharing">Resume</a></p>
                      </div>
                    
                  </div>


            <div className="flex flex-wrap md:flex-nowrap md:pt-10">
          <div className=" p-10 animate-fadeIn py-10">
            <h2 className="name  text-4xl py-2 text-[#000] font-burtons dark:text-[#E2EBF5] md:text-6xl">
              Srinivas Thiru
            </h2>

            {/* <div className="typing-container">
          <div className="container">
            <div className="  md:text-3xl dark:text-white typewriter">A Software Engineer</div>
          </div>
        </div> */}
            <h3 className="text-xl py-2 dark:text-white md:text-3xl">
              A Software Engineer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              An Experienced Software Engineer with a Masters in CS and expertise in diverse technologies.
            </p>
            <div className="text-5xl flex flex-wrap justify-start gap-3  py-3 text-gray-600 dark:text-gray-400">

              <a 
              className=" social-icon animate-slideLeft hover:scale-105 "
              target="_blank"
              href="https://www.linkedin.com/in/srinivas-thiru/"
              >
                
                <AiFillLinkedin />
              </a>
              
              
              {/* <div id="badge" className="hover-image badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="srinivas-thiru" data-version="v1" >
                <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/srinivas-thiru?trk=profile-badge"></a>
              </div> */}

              <a
              className=" social-icon animate-slideRight  "
              target="_blank"
              href="https://github.com/Srinivas-Thiru/">
                
                <AiFillGithub />
                <div className=".icons8-instagram">

                </div>
              </a>
              <a
              className=" social-icon  animate-slideLeft "
              
              target="_blank"
              href="https://drive.google.com/file/d/1LDZp-rTLuor-2UZVVLtbHElAqMYC2MnO/view?usp=sharing">
                
                <AiFillFilePdf/>
              </a>
              <a
              className=" social-icon animate-slideRight "
              target="_blank"
              href="mailto:sri.thiru.cs@gmail.com">
                <AiOutlineMail />
              </a>
            </div>
                </div>
            <div className="image mx-auto bg-gradient-to-b from-[#E3EBF5] bitmoj-bg relative overflow-hidden mt-20 ">
              
              <Image src={deved} className=" animate-wipeUp me-image duration-300 ease-in" layout="fill" objectFit="cover" />
            </div>

          </div>
        </section>
        
        
        



{/*------------------------------------------------------ PROJECTS ------------------------------------------------------*/}


              
            <div id="Projects" className="min-h-screen pt-10 text-gray-800 dark:text-gray-200">
              <h1 className={`font-burtons section-title mb-4  text-gray-800 dark:text-gray-200 text-xl ${isVisible && "underline-animation"}`}>Thigns I've developed</h1>
              
              <div className="content overflow-hidden p-0 md:flex-row my-auto md:ml-0 w-90md:w-[60vw] ">


{/* 
              <div className="work-card py-2 border-b-2 border-gray-300 hover:scale-105 duration-300 ease-in-out  hover:shadow-teal-200 shadow-lg rounded-lg rounded-r-none mx-3 md:mx-10 mt-5 ">
                

                <div className="box-1 grid md:grid-cols-2"> 
                  <div className="project-img mx-auto md:mx-3">
                  <Image src={project1} width={200} height={100} className=" shadow-teal-400 border shadow-lg" />
                  </div>
                  <div className="project-info flex justify-between mx-3 mt-3">
                    <div>
                      <h1>Organizo</h1>
                      <h2 className=" text-gray-400 border-gray-400  border-l-2 pl-3 mt-3">A Project Management Tool</h2>
                    </div>
                    <div>
                      <a 
                      target="_blank"
                      href="https://github.com/Srinivas-Thiru/Organizo">
                      <Image className="hover:scale-110 duration-300 ease-in-out cursor-pointer hover:drop-shadow-[0_3px_8px_rgba(12,148,136,1)]" src={arrow} width={100} height={100} />
                      </a>
                    </div>
                  </div>

                </div>
                
                <div className="flex m-x2 px-2">
                  <div className="ml-3 md:ml-10">
                  
                  </div>
                  <div className="ml-auto">
                    </div>
                  </div>
                  <div className=" skills flex flex-wrap m-2 p-2">
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">React</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">JavaScript</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">MonogDB</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">REST API</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">Node</span>

                  </div>
                </div> */}










<div className={`container  ${isVisible ? ' opacity-100 animate-slideRight' : ' opacity-0'}`}>

                <div className="work-card info py-2 border-b-2 border-gray-300 hover:scale-105 duration-300 ease-in-out  hover:shadow-teal-200 shadow-lg rounded-lg rounded-r-none mx-3 md:mx-10 mt-5 ">
                <div className="flex m-2 px-2">
                  <Image src={project1} width={200} height={100} className=" shadow-teal-400 border shadow-lg" />
                  
                  
                  <div className="ml-3 md:ml-10">
                  <h1>Organizo</h1>
                  <h2 className=" text-gray-400 border-gray-400  border-l-2 pl-3 mt-3">A Project Management Tool</h2>
                  
                  </div>
                  <div className="ml-auto">
                    <a 
                    target="_blank"
                    href="https://github.com/Srinivas-Thiru/Organizo">
                    <Image className="hover:scale-110 duration-300 ease-in-out cursor-pointer hover:drop-shadow-[0_3px_5px_rgba(11,11,11,0.51)]" src={arrow} width={100} height={100} />
                    </a>
                    </div>
                  </div>
                  <div className=" skills flex flex-wrap m-2 p-2">
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">React</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">JavaScript</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">MonogDB</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">REST API</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">Node</span>

                  </div>
                </div>
</div>


<div className={`container ${isVisible ? ' opacity-100 animate-slideLeft' : ' opacity-0'}`}>
                <div className="work-card info py-2 border-b-2 border-gray-300  hover:scale-105 duration-300 ease-in-out  hover:shadow-teal-200 shadow-lg rounded-lg rounded-r-none mx-3 md:mx-10 my-5 ">
                <div className="flex m-2 px-2">
                  <Image src={project2} width={200} height={100} />
                  <div className="ml-3 md:ml-10 ">
                  <h1>Automation Bot</h1>
                  <h2 className=" text-gray-400 border-gray-400  border-l-2 pl-3 mt-3"> LinkedIn Automation.</h2></div>
                  <div className="ml-auto">
                    <a 
                    target="_blank"
                    href="https://github.com/Srinivas-Thiru/LinkedIn-Script">
                    <Image className="hover:scale-110 duration-300 ease-in-out cursor-pointer hover:drop-shadow-[0_3px_5px_rgba(11,11,11,0.51)]" src={arrow} width={100} height={100} />
                    </a>
                    </div>
                  </div>

                  <div className=" skills flex flex-wrap m-2 p-2">
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">Python</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">Selenium</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">Web Scrapping</span>
                  </div>
                </div>
                </div>

                <div className={`container pb-10 ${isVisible ? ' opacity-100 animate-slideRight' : ' opacity-0'}`}>
                <div className="work-card info py-2 border-b-2 border-gray-300  hover:scale-105 duration-300 ease-in-out  hover:shadow-teal-200 shadow-lg rounded-lg rounded-r-none mx-3 md:mx-10  ">
                <div className="flex m-2 px-2">
                  <Image src={project3} width={200} height={100} />
                  <div className="ml-3 md:ml-10">
                  <h1>My Portfolio</h1>
                  <h2 className=" text-gray-400 border-gray-400  border-l-2 pl-3 mt-3"> This site!</h2></div>
                  <div className="ml-auto">
                    <a 
                    target="_blank"
                    href="https://github.com/Srinivas-Thiru/Srinivas-Thiru.github.io">
                    <Image className="hover:scale-110 duration-300 ease-in-out cursor-pointer hover:drop-shadow-[0_3px_5px_rgba(11,11,11,0.51)]" src={arrow} width={100} height={100} />
                    </a>
                    </div>
                  </div>
                  <div className="skills flex flex-wrap m-2 p-2">
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">NextJs</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">Tailwind CSS</span>
                  <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">UI/UX</span>
                  </div>
                </div>
                </div>

              </div>

            </div>




{/*------------------------------------------------------ WORK ------------------------------------------------------*/}
        
        
        
      
        
<div id="Work" className="min-h-screen ">
                
                <h1 className={`font-burtons mt-10 section-title text-gray-800 dark:text-gray-200 text-xl ${isVisibleWork && "underline-animation"}`}> Work</h1>
                  <div className={`work-section overflow-hidden flex align-middle justify-center flex-col md:flex-row text-gray-800 dark:text-gray-200 mt-2`} >
      
                    <div className="my-auto  ">
                    <Image className={`mx-auto ${isVisibleWork ? " opacity-100 animate-slideRight" : "opacity-0"}`} src={homeicons} width={500} height={500}  />
                    </div>
                    <div className={` work-section ${isVisibleWork ? " duration-500 opacity-100 animate-slideLeft" : "opacity-0"}  content p-0 md:p-10 my-auto md:ml-0 w-100`} >
                      <div className="work-card info py-2 border-b-2 border-gray-300 hover:scale-105 duration-300 ease-in-out  shadow-lg rounded-lg rounded-r-none my-4 ">
                      <div className=" flex m-2 px-2">
                        <Image className="skill rounded-lg" src={work1} width={150} height={150} />
                        <div className="ml-3 md:ml-10">
                        <h1>Software Engineer</h1>
                        <h2 className=" text-gray-400 border-gray-400  border-l-2 pl-3 mt-3">Influexer</h2></div>
                        </div>
                        <div className="skills flex flex-wrap m-2 p-2">
                        <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">NextJs</span>
                        <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">TypeScript</span>
                        <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">PostgreSQL</span>
                        <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">GraphQL</span>
                        <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">React</span>
      
                        </div>
                      </div>
                      <div className="content hover:scale-105 duration-300 ease-in-out ">
                      <div className={`work-card  info py-2 ${isVisibleWork ? " duration-1000 opacity-100 animate-slideLeft" : "opacity-0"} border-b-2 border-gray-300   shadow-lg rounded-lg rounded-r-none my-4 mt-14` }>
                      <div className="flex m-2 px-2">
                      <Image className=" skill rounded-lg" src={work2} width={150} height={150} />
      
                        <div  className="ml-3 md:ml-10">
                        <h1>Graduate Teaching Assistant</h1>
                        <h2 className=" text-gray-400 border-gray-400  border-l-2 pl-3 mt-3"> Sacred Heart University.</h2></div>
                        </div>
                        <div className=" skills flex flex-wrap m-2 p-2">
                        <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">Python</span>
                        <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">Guided 40+ Grad-level students</span>
                        <span className="m-1 text-xs border border-gray-300 shadow-md p-1 rounded-full skill">Educational Leadership</span>
                        </div>
                      </div>
                        
      
                      </div>
                    </div>
                    
      
                  </div>
                  </div>
      
      
      



{/*------------------------------------------------------ RECOMMENDATIONS ------------------------------------------------------*/}


              <section>

              <div id="Recommendations" className=" pt-5">
              <h1 className={`font-burtons section-title text-gray-800 dark:text-gray-200 text-xl my-5 ${isVisibleRec && "underline-animation"}`}>Hear it from them</h1>
                <div className="flex flex-col lg:flex-row gap-4 mx-auto justify-between my-6 py-6 ">
                <a 
                className={` hover:scale-105 recommendations duration-300 ease-in-out   shadow-lg rounded-lg ${isVisibleRec ? "animate-scaleUp " : ""}`}
                target="_blank"
                href="https://www.linkedin.com/in/srinivas-thiru/details/recommendations/">
                <Image src={rec1} className="rounded-lg dark:bg-transparent animate" />
                </a><div className=" hover:scale-105 duration-300 ease-in-out">
                <div className={`   ${isVisibleRec2 ? " animate-slideRight opacity-100" : " opacity-0"}`}>
                <a 
                className={`shadow-lg rounded-lg   `}
                target="_blank"
                href="https://www.linkedin.com/in/srinivas-thiru/details/recommendations/">
                <Image src={rec2} className="rounded-lg  dark:bg-transparent  " />
                </a>
                </div>

                </div>

                </div>
              </div>


{/*------------------------------------------------------ CODEPENS ------------------------------------------------------*/}



{/* 
              <div id="codepen">
                <h1 className="font-burtons section-title text-gray-800 dark:text-gray-200 text-xl my-5">Some of my Fav Codepens!</h1>
              <div className="flex gap-4">
                <Image src={design} height={400} width={400} className=" bg-teal-200 rounded-lg" />
                <Image src={design} height={400} width={400} className=" bg-teal-200 rounded-lg" />
                <Image src={design} height={400} width={400} className=" bg-teal-200 rounded-lg" />
                <Image src={design} height={400} width={400} className=" bg-teal-200 rounded-lg" />
                </div>
              </div> */}



{/*------------------------------------------------------ CONTACT ------------------------------------------------------*/}



              <div id="contact" className=" text-gray-800 dark:text-gray-200 ">
                <h1 className="font-burtons text-center  text-gray-800 dark:text-gray-200 text-xl mt-10 mb-5">Wanna  get in touch?</h1>
                <div className="text-5xl flex justify-center gap-3 md:gap-8 lg:gap-16  pb-10 text-gray-600 dark:text-gray-400">
              <a 
              className=" social-icon hover:scale-105 flex duration-300 ease-in-out"
                target="_blank"
                href="https://www.linkedin.com/in/srinivas-thiru/"
              >
                <AiFillLinkedin />
              </a>
              
              <a
              className=" social-icon hover:scale-105 duration-300 ease-in-out"
              target="_blank"
              href="https://github.com/Srinivas-Thiru/">
                <AiFillGithub  />
              </a>
              <a
              className=" social-icon hover:scale-105 duration-300 ease-in-out"
              target="_blank"
              href="https://drive.google.com/file/d/1LDZp-rTLuor-2UZVVLtbHElAqMYC2MnO/view?usp=sharing"><AiFillFilePdf /></a>

            <a
              className=" social-icon hover:scale-105 duration-300 ease-in-out"
              target="_blank"
              href="mailto:sri.thiru.cs@gmail.com">
                <AiOutlineMail />
              </a>
            </div>

              </div>
              </section>
              <div className={`boy ease-in-out  " ${isVisibleBoy ? " z-50 animate-wipeUp opacity-1 " : " animate-wipeOut "}`}>
                <Image src={boy} />
              </div>
      </main>
    </div>
  );
}
