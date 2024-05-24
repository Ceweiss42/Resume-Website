
import Header from "../components/Header.js";

import MeImage from "../images/Me.JPG";
export default function HomePage() {

    
    return (
      <div className="homeContainer">
        <Header/>
        <div className ="content">
            <div className ="image-container">
                <img className = "profile" src={MeImage}/>
            </div>
            <div className ="text-container">
                <h3>About Me</h3>
                <p>Hello there! Allow me to introduce myself – I'm Cameron Weiss, a Software Engineer from 
                    Huntington Beach, California, where the sun-kissed shores meet the cutting-edge world of 
                    technology. <br/><br/>
                    I take immense pride in my journey as a self-taught expert in coding, constantly driven to 
                    broaden my horizons and dive deeper into the boundless sea of knowledge. My voyage into the 
                    realm of programming began at the age of 16 after gaining inspiration during a visit to 
                    Blizzard Entertainment's Irvine, California headquarters. That visit ignitied an 
                    unquenchable passion for coding. Without a single line of code in my repertoire, I returned 
                    home, and began a quest to craft captivating digital worlds and interactive experiences. <br/><br/>
                    
                    Since that fateful day, I've painstakingly honed my craft, sharpening my ability to dissect 
                    problems, think critically, and bring seemingly impossible ideas to life. But I'm not just 
                    a code maestro – I'm also a guiding light in the world of engineering. I've had the privilege 
                    of coaching a high school robotics team, propelling them to a coveted top 10 
                    international ranking. Additionally, I've rolled up my sleeves and engineered a one-of-a-kind 
                    hydrogen-electric go-kart, a testament to my inventive spirit and technical prowess. 
                    
                    <br/><br/>So, whether I'm crafting lines of code or shaping the future of engineering, 
                    I'm on an exhilarating journey to push the boundaries of what's possible.
                    
                </p>
            </div>
        </div>
      </div>
    )
  }