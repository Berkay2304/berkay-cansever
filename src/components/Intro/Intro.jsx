/* src/components/Intro.jsx */
import { SiMaildotru } from "react-icons/si";
import profile from '../../assets/images/berkay.png';      // fotoğrafının yolu
import { FaGithub, FaLinkedin} from "react-icons/fa"
export default function Intro() {
  return (
    <div className='intro-section'>
        <div className='left-div'>
            <div className='left-inner'>
                <h1>Berkay CANSEVER</h1>
                <h2 style={{marginTop:"5px", marginLeft:"10px"}}>Full Stack Web Developer</h2>
            </div>
            <hr />
            <div className="icons">
                <a href="mailto:berkaycansever23@gmail.com" target="_blank"><SiMaildotru className="mail-icon" /></a>
                <a href="https://github.com/Berkay2304" target="_blank"><FaGithub className="github-icon"/></a>
                <a href="https://www.linkedin.com/in/berkay-cansever-aba033280/" target="_blank"><FaLinkedin className="linkedin-icon"/></a>
            </div>
        </div>
        <div className='right-div'>
            <img src={profile} alt="Berkay Cansever"/>
        </div>
        <div className="bottom-sep"></div>
    </div>
  );
}
