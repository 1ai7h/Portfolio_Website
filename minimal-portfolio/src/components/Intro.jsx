import React from "react";
import myImage from '/Users/laith/Desktop/Portfolio Website/minimal-portfolio/public/pfp.png'

function Intro(){
    return (
        <div className="flex items-center 
        justify-center flex-col text-center pt-20 
        pb-6">
            <img src={myImage} alt="My Image" className="rounded-full mx-auto h-32 w-33" />
            <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font">Laith Kamal</h1>
            <p className="text-base md:text-xl mb-3 font-normal">Software Engineer</p>
            <h3 className="text-sm mb-3 italic text-blue-800">Seattle, Washington</h3>
            <a className='mb-2' href="https://www.linkedin.com/in/laithkamal/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            <p className="text-sm max-w-xl mb-6 font-bold">
                Hey there! Im a new Computer Science graduate that loves to code in JavaScript and Python. I have a passion for problem-solving and a solid foundation in Software Engineering, I'm eager to contribute my skills to any innovative projects!
            </p>
        </div>

    )
}

export default Intro;





