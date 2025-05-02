import './landing-comp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Images from '../../assets/images.js';
import Header from '../header/header.jsx';

function LandingComp() {

    const info = [
        {
            icon: faPhone,
            detail: "+44 7861 431781",
            link: "tel:+447861431781"
        },
        {
            icon: faEnvelope,
            detail: "liam_maidment @live.co.uk",
            link: "mailto:liam_maidment@live.co.uk?Subject=Project Enquiry"
        },
        {
            icon: faLocationDot,
            detail: "5 Hawkins Road, Poole, United Kingdom",
            link: "https://www.bing.com/maps?q=5+Hawkins+Road%2C+Poole%2C+United+Kingdom&FORM=HDRSC6&cp=50.747439~-1.91989&lvl=16.2"
        },
        {
            icon: faFacebookF,
            detail: "Southern Patios and Landscaping",
            link: "https://www.facebook.com/profile.php?id=100054542255785"
        }
    ];

    return (
        <div className="landing-comp">
            <div className="top">
                <div className="top-text">
                    <img src={Images.logo} alt="Detailed Quality Painting Logo" />
                    <Header />
                    <p>Patios & Paving <span>|</span> Artificial Grass & Turfing <span>|</span> Fencing Services <span>|</span> Garden Rooms <span>|</span> Garden Transformations</p>
                </div>
                <div className="trapezium"></div>
            </div>
            
            <div className="middle">
                {
                    info.map((infoItem, index) => (
                        <div className="info-item" key={index}>
                            <a href={infoItem.link} className='icon-wrap' target='_blank'><FontAwesomeIcon icon={infoItem.icon} className='icon' /></a>
                            <div className="design">
                                <div className="rect"></div>
                                <div className="circle"></div>
                            </div>
                            <p><a href={infoItem.link} target='_blank'>{infoItem.detail}</a></p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LandingComp;