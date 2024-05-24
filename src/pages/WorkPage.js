
import Header from "../components/Header.js";
import { useEffect, useState } from "react";

import Waldorf from "../images/waldorf.jpg";
import Car from "../images/Car.JPG";
import Table from "../images/tablework.jpeg";
import Pit from "../images/Pitstop.JPG";
import "./HomePage.css";


export default function WorkPage() {

  const [cont, setCont] = useState(workA);
  const [page, setPage] = useState(0);
  
  const switchCont = () => {
    if (page == 0) {
      setCont(workB)
      setPage(1)
    }
    else {
      setCont(workA);
      setPage(0);
    }
  
  }



    return (
      <div className="homeContainer">
        <Header/>
        <div id = "1" className ="">
          {cont}
        </div>

        <div className ="button-holder">
          <button className ="tabButton" onClick={switchCont}>&lt;</button>
          <button className ="tabButton" onClick={switchCont}>&gt;</button>
        </div>
      </div>
    )
  }

  function workA ()
  {
    return (
      <div className="content">
        <div className ="image-container">
            <img className = "profile" src="https://location-logos-production.s3.amazonaws.com/2512934359284067954/2708/logo20211103-15602-1th2w4n.jpeg"/>
        </div>
        <div className ="text-container">
            <h3>Code Ninjas</h3>
            <p>For the past couple of years, I've had the privilege of fostering the creative minds of young learners through my role as the 
                lead instructor at Code Ninjas. This enriching journey has been primarily centered around teaching kids the art of coding, 
                guiding them through the fascinating realms of robotics and game development. A significant portion of my day was dedicated 
                to imparting coding skills, whether it was helping them write lines of code, debugging their ambitious projects, or assisting 
                them in devising ingenious solutions to the coding challenges they encountered.<br/><br/>

                Beyond the classroom, I devoted my time to crafting meticulously designed curricula for upcoming events, ensuring that each 
                learning experience was engaging and educational. I also took on the task of creating comprehensive documentation and orientation 
                materials, a valuable resource for incoming instructors. In addition to my instructional duties, I actively contributed to 
                curriculum development, prototyping robots, and conducting rigorous stress tests on these robotic creations. This allowed me 
                to anticipate and tackle potential bugs that might arise during the building process, ensuring a seamless and enriching 
                learning journey for our young coding enthusiasts. <br/><br/>
                
                My role at Code Ninjas has been a harmonious blend of education, creativity, and problem-solving. It's been immensely fulfilling 
                to witness the sparks of creativity ignite in young minds as they embark on their coding adventures, and to play a pivotal role in 
                nurturing their passion for technology.
                
            </p>
        </div>
      </div>
        )
  }

  function workB ()
  {
    return(
        <div  className ="content extra">
            <div className ="text-container">
                <h3>High School Robotics Coach</h3>
                <p>Beyond my role as Lead Coding Instructor at Code Ninjas, I've had the distinct honor of serving as the head coach of a dynamic
                     sustainable engineering robotics team at the Waldorf School of Orange County. In this capacity, I led a group of highly
                      motivated and talented students through the exhilarating journey of engineering, testing, and creative problem-solving 
                      within a high-intensity environment. What set our program apart was its unwavering commitment to sustainability, exemplified 
                      by our Hydrogen Fuel Cell RC car program. <br/><br/>
                      As head coach, my responsibilities extended beyond guiding the teams through technical challenges. I played a pivotal role in 
                    nurturing their engineering knowledge, ensuring that they comprehended the intricate details of every component on the Hydrogen 
                    Fuel Cell RC car. Our program not only emphasized engineering excellence but also instilled a deep understanding of sustainable 
                    technology. We were pioneering a new era in robotics, where innovative and eco-friendly solutions were at the forefront of our endeavors.
                    <br/><br/>
                    Moreover, I had the vital task of managing the teams within budget constraints, while also ensuring they had access to the necessary 
                    resources at every stage of the journey. It was a balancing act that required strategic planning and resourcefulness. <br/><br/>
                    
                    In essence, my role as head coach was a thrilling blend of mentorship, leadership, and resource management, all in the context of a 
                    sustainable engineering program. It was a journey of empowerment, where young minds thrived, engineering marvels came to life, and 
                    a passion for sustainable technology, exemplified by our Hydrogen Fuel Cell RC car, was ignited.

                </p>
            </div>
            <div className ="image-container">
                <img className = "profile" src={Waldorf}/>
            </div>
        </div>
    )
  }