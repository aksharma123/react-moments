
import React from "react";
import './footer.css';




const Footer = () => {
    return(
        <section class="footer_section">
            <div class="footer_banner">
                <div class="container">

                    <div class="footer_content1">
                        <div class="footer_content1_top">
                            <a href="index.html"><h2>Moments Construction</h2></a>
                            <p>Quickly and easily generate Lorem Ipsum placeholder text. Select the number of characters generate</p>
                        </div>
                        <div class="footer_content1_bottom">
                            <div class="footer_bottom_left">
                                <h5>Use Full Pages</h5>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="service.html">Services</a></li>
                                    <li><a href="projects.html">Project</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                            <div class="footer_bottom_right">
                                <h5>Contact Info</h5>
                                <ul>
                                    <li>P : 08 6364 4564</li>
                                    <li>E : <a href="mailto:momentsconst@gmail.com">momentsconst@gmail.com</a></li>
                                    <li>A : 123 Main Street, Anytown, USA, 12345</li>
                                </ul>
                                <div class="icons">
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="footer_content2">
                        <div class="footer_content2_left">
                            <p>All rights reserved & designed by <span><a href="https://webappssoft.com/">WASS</a></span></p>
                        </div>
                        <div class="footer_content2_right">
                            <ul>
                                <li><a href="privacy.html">Privacy Policy</a></li>
                                <li><a href="privacy.html">Terms & Condition</a></li>
                                <li><a href="privacy.html">Privacy Policy</a></li>
                                <li><a href="privacy.html">Terms & Condition</a></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer;