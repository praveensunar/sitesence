import React from 'react';
import "./Navbar.css";
// import logo from './media/logo.svg';
export default function Navbar(){
    return(
        // <nav classNameName="navbar">
        // <div classNameName="part1">
        //     <h3>Join our 2025 Marketing Predictions Webinar on 2/27!</h3>
        //     <h4><span>WARNING:</span> Scammers are using the SmartSites brand name. Do not get scammed.<span> Read More</span> </h4>   
        // </div>
        // <div classNameName="part2">
        //     <img src={logo} alt='Logo'/>
        

        //     <ul>
        //         <li>
        //             <a href="#">Services</a>
        //         </li>
        //         <li>
        //             <a href="#">Our Work</a>
        //         </li>
        //         <li>
        //             <a href="#">Company</a>
        //         </li>
        //         <li>
        //         <a href="#">Contact</a>
        //         </li>
        //         <li>
        //         <a href="tel:+2018706000" classNameName='no'>201-870-6000</a>                   
        //         </li>
        //     </ul>
        // </div>
        // </nav>

<header className="site-header">
<div  className="top-bar-header">
<p><a href="https://www.smartsites.com/whats-in-whats-out-2025-marketing-predictions/">Join our 2025 Marketing Predictions Webinar on 2/27!</a></p>
</div>

<div className="top-bar-header">
<p>WARNING: Scammers are using the SmartSites brand name. Do not get scammed. <a className="show-disclaimer">Read More</a></p>
</div>
<nav className="navbar">
<a className="navbar-brand" href="https://www.smartsites.com/"><img fetchpriority="high" src="https://www.smartsites.com/wp-content/themes/smartsites/images/smartsites-logo.svg" alt="SmartSites Digital Marketing Agency" width="208" height="43"/></a>

<div className="navbar-collapse">
<ul className="navbar-nav">
<li><a href="#">Services</a></li>
<li>
<a href="https://www.smartsites.com/work/" className="nav-link">Our Work</a></li>
<li>
<a href="https://www.smartsites.com/company/" className="nav-link">Company</a></li>
<li>
<a href="https://www.smartsites.com/contact/" className="nav-link">Contact</a></li>
</ul>
</div>
<a href="tel:2018706000" className="click-call gradient-text h5">201-870-6000</a>
</nav>
</header>
)
}