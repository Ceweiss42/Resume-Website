import { useNavigate } from 'react-router-dom';
import './Header.css';


//header component of the app (top title)
export default function Header() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the selected page
};
  
  return (
    <div class="navBar-wrapper">
        <nav class="navBar">
            <h1 class = "left">Cameron Weiss</h1>
            <ul class = "right">
                <li><button onClick={() => handleNavigation("/")}>Home</button></li>
                <li><button onClick={() => handleNavigation("/projects")}>Projects</button></li>
                <li><button onClick={() => handleNavigation("/work")}>Work Experience</button></li>
                <li><button  onClick={() => handleNavigation("/resume")} class = "active">Resume</button></li>
                <li><button onClick={() => handleNavigation("/contact")} >Contact</button></li>
            </ul>

        </nav>
    </div>
  );
}