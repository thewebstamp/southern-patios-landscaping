import './gallery.css';
import Images from '../../assets/images';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Heading from '../../components/heading/heading.jsx';
import Button from '../../components/button/button.jsx'
import { useNavigate } from 'react-router-dom'; 

function Gallery() {
    const navigate = useNavigate();
    const titleG = "🧱 Our Portfolio";
    const descriptionG = "Take a look at some of our recent projects";
    const navigateToLanding = () => {navigate("/")};
    const navigateToAbout = () => {navigate("/aboutUs")};
    const [galleryImage, setGalleryImage] = useState([
        Images.g1,
        Images.g2,
        Images.g3,
        Images.g4,
        Images.g5,
        Images.g6,
        Images.g7,
        Images.g8,
        Images.g9,
        Images.g10,
        Images.g11,
        Images.g12,
        Images.g13,
        Images.g14,
        Images.g15,
        Images.g16,
    ]);

    const nextImage = () => {
        setGalleryImage((g) => {
            g.push(g[0]);
            g.shift();
            return [...g];
        })
    };

    const prevImage = () => {
        setGalleryImage((g) => {
            const indexOfLastElement = g.length - 1;
            g.unshift(g[indexOfLastElement]);
            g.pop();
            return [...g];
        })
    };

    const showImage = (e) => {
        let length = e.target.name;
        setGalleryImage((g) => {
            let groupOfImages = g.splice(0, length);
            return([...g, ...groupOfImages]);
        });
    }

    return (
        <div className="gallery">
            <Heading title={titleG} description={descriptionG} />
            <div className="middle">
                <div className="image-top">
                    <img src={galleryImage[0]} alt="house painting" />
                    <div className="control">
                        <FontAwesomeIcon className='awesome-icon' icon={faArrowLeft} onClick={prevImage} />
                        <FontAwesomeIcon className='awesome-icon' icon={faArrowRight} onClick={nextImage} />
                    </div>
                </div>
                <div className="image-base">
                    <div className="image-case">
                        {galleryImage.map((image, index) => (
                            <img className='img' key={index} src={image} alt='house painting' name={index} onClick={showImage} />
                        ))}
                    </div>
                </div>
            </div>
            
            <Button title1="Back Home" link1={navigateToLanding} title2="About Us" link2={navigateToAbout} />
        </div>
    )
}

export default Gallery;