import track from "../images/track.png";
import porsche from "../images/porsche.jpg";
import cadillac from "../images/cadillac.jpg";
import darktrack from "../images/darktrack.jpg";
import Kart from "../images/Kart.jpg";
import Me from "../images/spotter.png";
import peugot from "../images/peugot.jpg";
import racing from "../images/racing.jpg";
import rain from "../images/rain.jpg";
import racingnight from "../images/racingnight.jpg";
import r95 from "../images/95night.jpg";
import puegotnight from "../images/peugotnight.jpg";
import pits from "../images/pits.jpg";
import Self from "../images/Me.JPG";
import Waldorf from "../images/tablework.jpeg";
import Resume from "../images/CW - Resume.pdf";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import "./HomePage.css"

export default function HomePage() {

    
    return (

      <div>
        <Parallax pages={12}>
          <ParallaxLayer offset={0} speed={1} factor={1.6}
          style={{
            backgroundImage: `linear-gradient(#00000000, #000000cc, #000000), url(${track})`,
            backgroundSize: 'cover',
          }}>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2} factor={0.9}>
            <div className="centered">
              <h1 className="SiteTitle">Cameron Weiss</h1>
              <h2 className="SiteSubTitle">Software engineer      &#8226;      Data Engineer</h2>
              
            </div>
            </ParallaxLayer>
            
          <ParallaxLayer offset={2} speed={1} factor={1}
          style={{
            backgroundImage: `linear-gradient(#000000cc, #000000cc), url(${porsche})`,
            backgroundSize: 'cover',
            backgroundPosition: '20vw',
          }}>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.4}>
              <div className="centered textbox pushdown">
                <p className="maincontent">One of my earliest memories is sitting alongside my mother as we watched my dad race around a go-kart track. 
                  I remember being enthralled at how the karts swerved around every turn, and immediately curiosity sprung out. At the age of 5, my life goal was to become 
                  a racecar driver. Unfortunately, speed was not my strong suit, and I was whisked away into more ‘logical’ careers. The curiosity never left me, 
                  however, and I began tinkering, building remote control cars and small racecar models. I taught myself to program, 
                  writing my own programs to run cars, and eventually worked my way up to building a full-scale electric go-kart.
                  <br></br> <br></br>

                  Most of my projects are automotive based. I've always had an affinity to the area, motorsports especially. This website serves as
                  a window into the world of my development, as a programmer in the amateur and eventually professional space. 
                </p>
              </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.1}>
              <h1 className="centered SiteSubTitle">Projects</h1>
              <div className="centered textbox slideleft">
                <p className="maincontent">
                After spending a race weekend with Dale Coyne Racing, I took what I learned in data analysis and spent some time making
                my own data visualization software. <br/><br/>

                The software is largely customizable, allowing custom colors, datapoints, graph size and layout. It also automatically
                uploads your data to a csv file for easy exporting later on. For ease of use, the software opens a port where you can
                send your realtime telemetry data for visualization while the car is on track.<br/><br/>

                While still a work in progress, the software is currently being used by some RC car teams in the
                United States branch of the H2GP competition for trackside data analysis and insights.
                </p>
                <div className="image-container">
                    <iframe id="youtube-video" class = "youtube youtube-video" src="https://www.youtube.com/embed/pZGrTrl50hg?si=5799HZuqySRzUvUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
          </ParallaxLayer>
          

          <ParallaxLayer offset={3} speed={1} factor={1}
          style={{
            backgroundImage: `radial-gradient(#00000000, #000000, #000000), url(${cadillac})`,
            backgroundSize: 'cover',
            backgroundPosition: '-20vw',
          }}>


          </ParallaxLayer>

          <ParallaxLayer  offset={3} speed={0.1}>
          <div className="centered textbox slideright">
                <div className="image-container-right">
                    <iframe id="youtube-video" class = "youtube youtube-video" src="https://www.youtube.com/embed/XJI0XePPJJs?si=hqAaj4V6RwFlC8fN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <p className="maincontent">
                  One of my exciting projects revolves around enhancing my racing experience in Assetto Corsa with a custom H-pattern gear shift.
                 This Arduino-based creation combines hardware and software to accurately read and transmit the selected gear to my computer.
                 Using limit switches as the bridge between the physical and digital worlds, every gear shift I make is seamlessly reflected in the game.<br/><br/>
                
                With this H-pattern gear shift in action, I'm not just playing a racing game; I'm experiencing the thrill of realism in every 
                gear change. It's a beautiful fusion of craftsmanship, innovation, and a love for virtual racing, resulting in an immersive gaming 
                setup that elevates my racing adventures to new heights.
                
                </p>
                
              </div>
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={.1}>
            <div className="centered textbox">
              <img class = "tall-image image-container-right" src={Me}/>
              <p className="maincontent">One of my most enjoyable and impressive projects has to be the Sportscar Hunter App. 
                  Myself, along with a team of four others, embarked on a journey to develop an application that 
                  uses machine learning to recognize and identify the cars your phone 'sees' through its camera lens. The magic happens as the app registers 
                  each car in real time, adding it to the virtual deck of cars unique to each user.<br/><br/>

                  This functionality empowers users to curate their own collections of vehicles encountered in the real world. 
                  Whether it's a sleek sports car, a classic beauty, or an exotic supercar, the app seamlessly captures and catalogues 
                  these automotive gems. To accomplish this, our project leverages an expansive database, employs Flask servers for 
                  efficient communication, and boasts a constantly live web-hosted user interface built using the React framework.<br/><br/>
                  
              </p>
            </div>
            
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={1} factor={1}
          style={{
            backgroundImage: `radial-gradient(#00000000, #000000f2, #000000), url(${peugot})`,
            backgroundSize: 'cover',
            backgroundPosition: '30vw',
            zIndex:-10,
          }}>


          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={2} factor={1}
          style={{
            backgroundImage: `radial-gradient(ellipse at 60% 40%, #000000d5, #000000f0, #000000ff, #000000ff, #000000ff), url(${racing})`,
            backgroundSize: 'cover',
            backgroundPosition: '-20vw',
            zIndex:-10,
          }}>
          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={.1}>
            <div className="centered textbox">
              <p className="maincontent">This project grew from an exploration into the world of encryption in one of my college courses.
                I read up on public-key encryption and got to work creating my own private messaging system using PGP. It encrypts 
                messages and sends them over network to a user-input destination. The computer at that destination then
                decrypts and reads the message, and can respond with the same pathway back to the original computer. 
                All messages are immediately deleted on completion of the program.<br/><br/>

                To provide more detail, the messaging service provides a way for users to communicate with one-another in 
                a secure way. Some setup is required, such as downloading the public key to the recipient, as that key is 
                needed to encrypt the message. Once the key is downloaded, the user simply typed their destination (a port for
                the message to go to), and hits enter. The program will create a flask server at the user's end, encrypt the message,
                and send it over the internet to the flask server running on the recipient's end. When a message is received,
                the contents are decrypted and displayed to the console.
            </p>
            <img className="image-container-right sq" src="https://i0.wp.com/primefactors.com/wp-content/uploads/2020/01/open-pgp-icon.png"/>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={6} speed={.1}>
            <div className="centered textbox">
              <p className="maincontent">My standout engineering project is a custom Go Kart designed for speed and innovation. Powered by a 1.8kW electric motor, it 
                can reach thrilling speeds of up to 35mph (56 kph). What sets this project apart is its DIY approach, built using readily 
                available parts from my local hardware store, with only a few items sourced pre-made, such as the chassis, wheels, stub axle, and brakes.<br/><br/>

                Although it currently runs on batteries, I'm actively working on integrating a 1kW Hydrogen fuel cell for hydrogen-electric power. 
                Additionally, I'm developing an Arduino-based Engine Management System (EMS) to enhance efficiency and extend its runtime. 
                This Go Kart represents a blend of resourcefulness, sustainability, and engineering ingenuity—an exciting journey in pushing the limits 
                of eco-friendly transportation. <br/><br/>

                What truly makes this project an ongoing adventure is the relentless pursuit of improvement. I'm continually exploring ways to 
                upgrade and fine-tune the Go Kart, ensuring that it remains at the forefront of speed and innovation. It's a testament to the 
                ever-evolving nature of engineering, where each modification brings new excitement and possibilities to this thrilling project.
                
            </p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={6.2} speed={1}>
            <img class="Kart"src={Kart}/>
          </ParallaxLayer>

          <ParallaxLayer offset={6} speed={2} factor={1}
          style={{
            backgroundImage: `radial-gradient(ellipse at 55% 40%, #00000000, #000000df, #000000ff, #000000ff, #000000ff), url(${racingnight})`,
            backgroundSize: 'cover',
            backgroundPosition: '25vw 2vw',
            zIndex:-10,
          }}>
          </ParallaxLayer>

          <ParallaxLayer offset={7} speed={2} factor={1}
          style={{
            backgroundImage: `radial-gradient(ellipse at 50% 40%, #00000000, #000000f4, #000000ff), url(${puegotnight})`,
            backgroundSize: 'cover',
            backgroundPosition: '-30vw 1vh',
            zIndex:-10,
          }}>
          </ParallaxLayer>

          <ParallaxLayer offset={7} speed={.1}>
            <div className="centered textbox">
              <p className="maincontent padRight">While learning databases, I made an app that would allow mobile editing of the users mongoDB tables.
                At its core, the project featured a React Native front-end user interface hosted through Expo. However, what truly set it apart was 
                the seamless integration with a MongoDB backend, creating a powerful and intuitive tool for data management. <br/><br/>

                The graphical user interface (GUI) of the application was designed with simplicity in mind. When connected to the MongoDB backend, the GUI would 
                effortlessly display the entries from the selected table, providing users with a clean and organized view of their data. What made this project 
                particularly user-friendly was its accessibility. With just a few clicks on their smartphones, users could not only view but also add or remove 
                entries from any table within the database. This level of flexibility and ease of use empowered users to interact with their data in a way that 
                felt both efficient and intuitive.
                
            </p>
              <img className="image-container-right sq"  src="https://repvue.imgix.net/a9yxc48y3ay5dm2udzwizc2bdyph"/>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={8} speed={2} factor={1}
          style={{
            backgroundImage: `radial-gradient(ellipse at 40% 50%, #00000000, #000000f0, #000000ff), url(${r95})`,
            backgroundSize: 'cover',
            backgroundPosition: '30vw',
            zIndex:-10,
          }}>
          </ParallaxLayer>

          <ParallaxLayer offset={8} speed={.1}>
            <h1 className="centered SiteSubTitle">Work Experience</h1>
            <div className="centered textbox">
            <img className="image-container-right sqthree" src={Self}/>
              <div>
                <h1>Dale Coyne Racing</h1>
              <p className="maincontent padRight">While only there for a handful of weekends, I had the opportunity to shadow and help with the data systems on the car. Most of
               my time was spent shadowing and learning the ins and outs of the car, team and everything else that went on during a race weekend. <br/><br/>

               While unable to join the team fulltime during the season, I learned a lot of valuable information that can be translated to many
               different situations and encounters.
                
            </p>
              </div>
              
              
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={9} speed={2} factor={1}
          style={{
            backgroundImage: `radial-gradient(ellipse at 0% 100%, #000000c8, #000000f6, #000000ff), url(${pits})`,
            backgroundSize: 'cover',
            backgroundPosition: '00vw',
            zIndex:-10,
          }}>
          </ParallaxLayer>

          <ParallaxLayer offset={9} speed={.1}>
            <div className="centered textbox">
            <img className="image-container-left sqthree" src={Waldorf}/>
              <div>
                <h1>Waldorf RC Racing</h1>
              <p className="maincontent padLeft">I've had the distinct honor of serving as the head coach of a dynamic
                     sustainable engineering robotics team at the Waldorf School of Orange County. In this capacity, I led a group of highly
                      motivated and talented students through the exhilarating journey of engineering, testing, and creative problem-solving 
                      within a high-intensity environment. What set our program apart was its unwavering commitment to sustainability, exemplified 
                      by our Hydrogen Fuel Cell RC car program. <br/><br/>
                      As head coach, my responsibilities extended beyond guiding the teams through technical challenges. I played a pivotal role in 
                    nurturing their engineering knowledge, ensuring that they comprehended the intricate details of every component on the Hydrogen 
                    Fuel Cell RC car. Our program not only emphasized engineering excellence but also instilled a deep understanding of sustainable 
                    technology. Under my leadership we achieved a Top 10 rank internationally.
                </p>
              </div>
              
              
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={10} speed={2} factor={1}
          style={{
            backgroundImage: `radial-gradient(ellipse at 60% 50%, #00000000, #000000c8, #000000ff, #000000ff), url(${rain})`,
            backgroundSize: 'cover',
            backgroundPosition: '20vw',
            zIndex:-10,
          }}>
          </ParallaxLayer>

          <ParallaxLayer offset={10} speed={.1}>
            <div className="centered textbox">
              <div>
                <h1>Code Ninjas</h1>
              <p className="maincontent padRight">For the past couple of years, I've held the role of  
                lead instructor at Code Ninjas. The journey has been centered around teaching kids the art of coding, 
                guiding them through the fascinating realms of robotics and game development. A significant portion of my day was dedicated 
                to imparting coding skills, whether it was helping them write lines of code, debugging their ambitious projects, or assisting 
                them in devising ingenious solutions to the coding challenges they encountered.<br/><br/>

                Beyond the classroom, I devoted my time to crafting meticulously designed curricula for upcoming events, ensuring that each 
                learning experience was engaging and educational. I also took on the task of creating comprehensive documentation and orientation 
                materials, a valuable resource for incoming instructors. In addition to my instructional duties, I actively contributed to 
                curriculum development, prototyping robots, and conducting rigorous stress tests on these robotic creations. This allowed me 
                to anticipate and tackle potential bugs that might arise during the building process, ensuring a seamless and enriching 
                learning journey for our young coding enthusiasts.
                
            </p>
              </div>
              
              <img className="image-container-right sqthree"  src={"https://location-logos-production.s3.amazonaws.com/2512934359284067954/2708/logo20211103-15602-1th2w4n.jpeg"}/>
            </div>
          </ParallaxLayer>


          <ParallaxLayer offset={11} speed={2} factor={1}
          style={{
            backgroundImage: `linear-gradient(#000000, #000000aa, #00000033, #00000022), url(${darktrack})`,
            backgroundSize: 'cover',
          }}>
            <br></br><br></br><br></br>
            <h1 className="centered SiteSubTitle">Contact</h1>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="centered">
              <h2>ceweiss7@gmail.com</h2>
              <br></br>
              <h2>714.587.8691</h2>
              <br></br>
              <a className="blueLink" href={Resume}><h2>Resume</h2></a>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div>
                <a href="https://www.linkedin.com/in/cameron-weiss-19207b177/" className="blueLink"><img width={50} height={50} src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/displaying-19-gallery-images-for-linkedin-logo-png-25.png"/></a>
                <a href="https://github.com/Ceweiss42" className="blueLink"><img width={50} height={50} src="https://img.icons8.com/fluent-systems-filled/200/FFFFFF/github.png"/></a>
                <a href="https://www.instagram.com/cameronericweiss/" className="blueLink"><img width={50} height={50} src="https://www.kortegaard.co.uk/wp-content/uploads/2020/06/best-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png"/></a>
              </div>
            
            </div>
            
          </ParallaxLayer>


        </Parallax>
        
      </div>
      
    )
  }
  