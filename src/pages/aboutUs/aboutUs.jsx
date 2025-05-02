import './aboutUs.css';
import Heading from '../../components/heading/heading.jsx';
import Button from '../../components/button/button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
    const titleA = "👋 About Us";
    const descriptionA = "We deliver high-quality landscaping services with integrity";
    const navigate = useNavigate();
    const navigateToLanding = () => { navigate('/') };
    const navigateToGallery = () => { navigate('/gallery') };

    return (
        <div className="about-us">
            <Heading title={titleA} description={descriptionA} />

            <div className="about-text">
                <div className="about-comp-text">
                    <p>At <b>Southern Patios and Landscaping</b>, we’re more than just landscapers — we’re a <b>family-run business</b> with a passion for helping homeowners in <b>Poole</b> and the surrounding areas transform their outdoor spaces. <br />From stunning patios to custom garden rooms and fencing, we pride ourselves on delivering top-quality craftsmanship, friendly service, and results that suit your budget.</p>
                    <div className="about-bullet">
                        <div className="item">
                            <FontAwesomeIcon className='a-check' icon={faCheck} />
                            <span>Professional<br />Workers</span>
                        </div>
                        <div className="item">
                            <FontAwesomeIcon className='a-check' icon={faCheck} />
                            <span>Guaranteed<br />Quality</span>
                        </div>
                        <div className="item">
                            <FontAwesomeIcon className='a-check' icon={faCheck} />
                            <span>Extensive<br />Experience</span>
                        </div>
                        <div className="item">
                            <FontAwesomeIcon className='a-check' icon={faCheck} />
                            <span>Transparent<br />Quotation</span>
                        </div>
                    </div>
                </div>
            </div>

            <Button title1="Back Home" link1={navigateToLanding} title2="See Porfolio" link2={navigateToGallery} />
        </div>
    )
}

export default AboutUs