import Footer from '../../components/footer/footer';
import LandingComp from '../../components/landing-comp/landing-comp';
import './landing.css';
import Images from '../../assets/images';
import Button from '../../components/button/button';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
    const navigateToGallery = () => {navigate("/gallery")};
    const navigateToAboutUs = () => {navigate("/aboutUs")};

    return (
        <div className="landing">
            <LandingComp />
            <Footer />
            <div className="background"><img src={Images.landingImage} alt="house painting" /></div>
            <Button title1="See Portfolio" link1={navigateToGallery} title2="About Us" link2={navigateToAboutUs} />
        </div>
    )
}

export default Landing;