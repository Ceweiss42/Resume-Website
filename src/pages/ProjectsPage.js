
import Header from "../components/Header.js";
import Me from "../images/spotter.png";
import Kart from "../images/Kart.jpg";
import dataV from "../images/data.png";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
    
  const [cont, setCont] = useState(projectA);
  const [page, setPage] = useState(1);
  
  const switchContRight = () => {
      if (page == 0) {
        setPage(1)
        setCont(projectB);
      }
      else if (page == 1) {
        setPage(2)
        setCont(projectC);
      }
      else if (page == 2) {
        setPage(3)
        setCont(projectD);
      }
      else if (page == 3) {
        setPage(4)
        setCont(projectE);
      }
      else if (page == 4) {
        setPage(5)
        setCont(projectF);
      }
      else if (page == 5) {
        setPage(0)
        setCont(projectA)
      }
    }

    const switchContLeft = () => {
      if (page == 0) {
        setPage(5)
        setCont(projectF);
      }
      else if (page == 1) {
        setPage(0)
        setCont(projectA);
      }
      else if (page == 2) {
        setPage(1)
        setCont(projectB);
      }
      else if (page == 3) {
        setPage(2)
        setCont(projectC);
      }
      else if (page == 4) {
        setPage(3)
        setCont(projectD);
      }
      else if (page == 5) {
        setPage(4)
        setCont(projectE);
      }
    }

    



    return (
      <div className="homeContainer">
        <Header/>
        <div className="content">
            {cont}
        </div>

        <div className ="button-holder">
          <button className ="tabButton" onClick={switchContLeft}>&lt;</button>
          <button className ="tabButton" onClick={switchContRight}>&gt;</button>
        </div>
      </div>
    )
  }

  function projectC()
  {
    return(
      <div className="content">
        <div className="image-container">
            <img class = "profile" src={Kart}/>
        </div>
        <div className="text-container">
            <h3>Go Kart</h3>
            <p>My standout engineering project is a custom Go Kart designed for speed and innovation. Powered by a 1.8kW electric motor, it 
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
      </div>
    )
  }

  function projectB()
  {
    return (
      <div className="content">
        <div className="text-container">
            <h3>H-Pattern Gear Shift</h3>
            <p>One of my exciting projects revolves around enhancing my racing experience in Assetto Corsa with a custom H-pattern gear shift.
                 This Arduino-based creation combines hardware and software ingenuity to bring a touch of realism to virtual racing.<br/><br/>

                The heart of this project lies in Arduino's versatility. Through a clever arrangement of limit switches, my gear shift 
                can accurately read and transmit the selected gear to my computer. These limit switches act as the bridge between the physical 
                and digital worlds, ensuring that every gear shift I make is seamlessly reflected in the game.<br/><br/>
                
                What makes this project even more remarkable is that it's a product of 3D printing prowess. Almost every component, from the 
                intricate gear lever to the sturdy base, is meticulously crafted with 3D printed parts. It's a testament to the potential of additive 
                manufacturing in realizing complex designs.<br/><br/>
                
                With this H-pattern gear shift in action, I'm not just playing a racing game; I'm experiencing the thrill of realism in every 
                gear change. It's a beautiful fusion of craftsmanship, innovation, and a love for virtual racing, resulting in an immersive gaming 
                setup that elevates my racing adventures to new heights.
                
            </p>
        </div>
        <div className="image-container">
            <iframe id="youtube-video" class = "youtube-video" width="560" height="315" src="https://www.youtube.com/embed/XJI0XePPJJs?si=hqAaj4V6RwFlC8fN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    )
  }

  function projectD()
  {
    return (
      <div className="content">
        <div className="image-container">
            <img class = "tall-image" src={Me}/>
        </div>
        <div className="text-container">
            <h3>Sportscar Hunter App</h3>
            <p>One of my most enjoyable and impressive projects has to be the Sportscar Hunter App. 
                Myself, along with a team of four others, embarked on a journey to develop a remarkable application that 
                harnesses the power of machine learning. This innovative app is designed to do something truly extraordinary: 
                recognize and identify the cars your phone 'sees' through its camera lens. The magic happens as the app registers 
                each car in real time, adding it to the virtual deck of cars unique to each user.<br/><br/>

                This functionality empowers users to curate their own collections of vehicles encountered in the real world. 
                Whether it's a sleek sports car, a classic beauty, or an exotic supercar, the app seamlessly captures and catalogues 
                these automotive gems. To accomplish this, our project leverages an expansive database, employs Flask servers for 
                efficient communication, and boasts a constantly live web-hosted user interface built using the React framework.<br/><br/>
                
                The beauty of the Sportscar Hunter App extends beyond its cutting-edge features. It's designed with user convenience in mind,
                 ensuring a smooth experience. Users can instantly download the app onto their smartphones, taking up minimal storage 
                 space. What's more, thanks to the image recognition AI hosted on the database side itself, the app maintains its responsive 
                 and snappy performance, delivering a delightful user experience every time it's used.
                
            </p>
        </div>
      </div>
    )
  }

  function projectE()
  {
    return (
      <div className="content">
        <div className="text-container">
            <h3>Databse Manipulator</h3>
            <p>This project represented a significant step beyond my college Databases course, pushing the boundaries of what I could achieve with my newfound 
                knowledge. At its core, the project featured a React Native front-end user interface hosted through Expo. However, what truly set it apart was 
                the seamless integration with a MongoDB backend, creating a powerful and intuitive tool for data management. <br/><br/>

                The graphical user interface (GUI) of the application was designed with simplicity in mind. When connected to the MongoDB backend, the GUI would 
                effortlessly display the entries from the selected table, providing users with a clean and organized view of their data. What made this project 
                particularly user-friendly was its accessibility. With just a few clicks on their smartphones, users could not only view but also add or remove 
                entries from any table within the database. This level of flexibility and ease of use empowered users to interact with their data in a way that 
                felt both efficient and intuitive. <br/><br/>
                
                In essence, this project was a testament to the practical application of database management skills. It showcased the power of modern technology,
                 allowing users to interact with databases from the convenience of their mobile devices. The fusion of React Native, MongoDB, and a user-friendly
                 interface opened new possibilities for efficient data management, making this project a noteworthy milestone in my journey as a developer. 
            </p>
        </div>
        <div className="image-container">
            <img class = "profile" src="https://repvue.imgix.net/a9yxc48y3ay5dm2udzwizc2bdyph"/>
        </div>
      </div>
    )
  }

  function projectF()
  {
    return(
      <div className="content">
        <div className="text-container">
            <h3>Encrypted Messaging Service</h3>
            <p>
                This project grew from an exploration into the world of encryption in one of my college courses.
                When introduced to Public-Private key encryption, I became enthralled in how it worked. I read up
                on the system and got to work creating my own private messaging system using PGP. It encrypts 
                messages and sends them over network to a user-input destination. The computer at that destination then
                decrypts and reads the message, and can respond with the same pathway back to the original computer. 
                All messages are immediately deleted on completion of the program.<br/><br/>

                To provide more detail, the messaging service provides a way for users to communicate with one-another in 
                a secure way. Some setup is required, such as downloading the public key to the recipient, as that key is 
                needed to encrypt the message. Once the key is downloaded, the user simply typed their destination (a port for
                the message to go to), and hits enter. The program will create a flask server at the user's end, encrypt the message,
                and send it over the internet to the flask server running on the recipient's end. When a message is received,
                the contents are decrypted and displayed to the console. <br/><br/>

                I am currently working on an intuitive UI to the application, as well as a way to automate the key-grabbing 
                process, to ensure usability for even the least tech-fluent people. The github for the project can be found 
                <a class = "blueLink" href="https://github.com/Ceweiss42/EncryptedMessenger" >here</a>.
            </p>
        </div>
        <div className="image-container">
            <img class = "profile" src="https://i0.wp.com/primefactors.com/wp-content/uploads/2020/01/open-pgp-icon.png"/>
        </div>
      </div>
    )
  }

  function projectA()
  {
    return(
      <div className="content">
        <div className="text-container">
            <h3>Data Toolbox</h3>
            <p>
                After spending a race weekend with Dale Coyne Racing, I took what I learned in data analysis and spent some time making
                my own data visualization software. <br/><br/>

                The software is largely customizable, allowing custom colors, datapoints, graph size and layout. It also automatically
                uploads your data to a csv file for easy exporting later on. For ease of use, the software opens a port where you can
                send your realtime telemetry data for visualization while the car is on track.<br/><br/>

                While still a work in progress, the software is currently being used by some RC car teams in the
                United States branch of the H2GP competition for trackside data analysis and insights.
            </p>
        </div>
        <div className="image-container">
            <iframe id="youtube-video" class = "youtube-video" width="560" height="315" src="https://www.youtube.com/embed/pZGrTrl50hg?si=5799HZuqySRzUvUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    )
  }