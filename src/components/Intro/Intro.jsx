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
                <SiMaildotru className="mail-icon" />
                <FaGithub className="github-icon"/>
                <FaLinkedin className="linkedin-icon"/>
            </div>
        </div>
        <div className='right-div'>
            <img src={profile} alt="Berkay Cansever"/>
        </div>
        <div className="bottom-sep"></div>
    </div>
  );
}
