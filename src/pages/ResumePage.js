
import Header from "../components/Header.js";
import resume from "../images/CW - Resume.pdf";

export default function ResumePage() {
    
    return (
      <div className="homeContainer">
        <Header/>
        <div className ="content">
          <iframe width = "100%" height = "1000px" src={resume}/>
        </div>
      </div>
    )
  }