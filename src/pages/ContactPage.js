
import Header from "../components/Header.js";
import Me from "../images/Me.JPG";

export default function ContactPage() {
    
    return (
      <div className="homeContainer">
        <Header/>
        <div className="content">
          <div className="image-container">
              <img className = "profile" src={Me}/>
          </div>
          <div className="text-container">
              <h3>Contact Me</h3>
              <p>You can find me at...</p>
              <p><b>Email: </b> ceweiss7@gmail.com</p>
              <p><b>Phone: </b> +1 (714)-587-8691</p>
              <p><b>LinkedIn: </b> <a className = "blueLink" href="https://www.linkedin.com/in/cameron-weiss-19207b177/">https://www.linkedin.com/in/cameron-weiss-19207b177/</a></p>
          </div>
        </div>
      </div>
    )
  }