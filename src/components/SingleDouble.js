import React, { useState } from "react";
import './SingleDouble.css';
import stimage from '../assets/stimage.png';
import storeyimage from '../assets/storeyimage.png';
import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';

const SingleDouble = () => {
    const [activeStorey, setActiveStorey] = useState('single'); 
    const [activeImage, setActiveImage] = useState('first_s1'); 

    const handleStoreySwitch = (storey) => {
        setActiveStorey(storey);
        setActiveImage('first_s1');
    };

    const handleImageClick = (imageClass) => {
        setActiveImage(imageClass);
    };

    const images = [
        { thumb: stimage, large: storeyimage, className: 'first_s1' },
        { thumb: stimage, large: gallery1, className: 'second_s2' },
        { thumb: stimage, large: gallery2, className: 'third_s3' },
        { thumb: stimage, large: gallery3, className: 'fourth_s4' },
        { thumb: stimage, large: gallery1, className: 'fifth_s5' },
        { thumb: stimage, large: gallery2, className: 'sixth_s6' }
    ];

    return (
        <section className="s1_s2">
            {/* Toggle buttons */}
            <div className="container">
                <div className="STOREY_TOG">
                    <div 
                        className={`singleStorey_btn ${activeStorey === 'single' ? 'activeBtn' : ''}`}
                        onClick={() => handleStoreySwitch('single')}
                    >
                        <p>Single Storey</p>
                    </div>

                    <div 
                        className={`doubleStorey_btn ${activeStorey === 'double' ? 'activeBtn' : ''}`}
                        onClick={() => handleStoreySwitch('double')}
                    >
                        <p>Double Storey</p>
                    </div>
                </div>
            </div>

            {/* Single Storey Section */}
            <section className={`Storey_section ${activeStorey === 'single' ? 'enable1' : 'enable2'}`}>
                <div className="container">
                    <div className="Storey_section_content">
                        <div className="storey_left">
                            <div className="storey_left_inner">
                                <h5>we specialize in <span>creating custom homes</span> with exceptional attention to detail</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                                <h2>SINGLE STOREY</h2>
                                <div className="storey_images">
                                    {images.map((img, index) => (
                                        <img 
                                            key={index} 
                                            className="S-img" 
                                            src={img.thumb} 
                                            alt="Thumbnail" 
                                            onClick={() => handleImageClick(img.className)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="storey_right">
                            {images.map((img, index) => (
                                <img 
                                    key={index} 
                                    className={`${img.className} ${activeImage === img.className ? 'active' : 'inactive'}`} 
                                    src={img.large} 
                                    alt="Gallery" 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Double Storey Section */}
            <section className={`SecondStorey_section ${activeStorey === 'double' ? 'enable1' : 'enable2'}`}>
                <div className="container">
                    <div className="Storey_section_content">
                        <div className="storey_left DOUBLE">
                            <div className="storey_left_inner DOUBLE">
                                <h5>we specialize in <span>creating custom homes</span> with exceptional attention to detail</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                                <h2>DOUBLE STOREY</h2>
                                <div className="storey_images">
                                    {images.map((img, index) => (
                                        <img 
                                            key={index} 
                                            className="S-img" 
                                            src={img.thumb} 
                                            alt="Thumbnail" 
                                            onClick={() => handleImageClick(img.className)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="storey_right">
                            {images.map((img, index) => (
                                <img 
                                    key={index} 
                                    className={`${img.className} ${activeImage === img.className ? 'active' : 'inactive'}`} 
                                    src={img.large} 
                                    alt="Gallery" 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default SingleDouble;
