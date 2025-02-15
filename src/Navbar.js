import './Navbar.css';
import logo from './media/logo.svg';
export default function Navbar(){
    return(
        <nav className="navbar">
        <div className="part1">
            <h3>Join our 2025 Marketing Predictions Webinar on 2/27!</h3>
            <h4><span>WARNING:</span> Scammers are using the SmartSites brand name. Do not get scammed.<span> Read More</span> </h4>   
        </div>
        <div className="part2">
            <img src={logo} alt='Logo'/>
        

            <ul>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Our Work</a>
                </li>
                <li>
                    <a href="#">Company</a>
                </li>
                <li>
                <a href="#">Contact</a>
                </li>
                <li>
                <a href="tel:+2018706000" className='no'>201-870-6000</a>                   
                </li>
            </ul>
        </div>
        </nav>
    )
}