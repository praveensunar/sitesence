import laptop from "./media/laptop.webp";
import "./service.css";
export default function Services(){
    return (
        <div>
            <div className="banner">
                <div className='left'>
                <h4>Grow Your Business With Scalable Digital Marketing</h4>
<h3>Outsmart the competition with best-in-class digital marketing services</h3>
<h5>Get more traffic. Acquire more customers. Sell more stuff. SmartSites offers proven strategies & reliable execution to exceed your marketing goals.</h5>
                </div>
                <div className='right'>
                    <img src={laptop}/>
                </div>

            </div>
            {/* Add your service components here */}
        </div>
    );
}   