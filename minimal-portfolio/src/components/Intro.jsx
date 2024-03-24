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
            <p className="text-sm max-w-xl mb-6 font-bold">
                Hey there! Im a new Computer Science graduate that loves to code in JavaScript and Python. I have a passion for problem-solving and a solid foundation in Software Engineering, I'm eager to contribute my skills to any innovative projects!
            </p>
        </div>

    )
}

export default Intro;





