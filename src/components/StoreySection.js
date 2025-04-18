import './StoreySection.css';
import React from 'react';
import groupimage from '../assets/Group 63.png';


const Storey =()=>{
    return(
        <section class="our_story">
            <div class="container">
                <div class="our_story_content">
                    <div class="our_Story_text">
                        <h2>OUR <span>STORY</span></h2>
                        <p class="our_story_para">
                            At Moments Construction, we believe that every project is more than just a building – it’s a milestone. Founded in 2024, our journey began with a vision to create spaces that truly reflect the dreams and aspirations of our clients. Our very first project is nearing completion, and we couldn’t be more excited to share the progress with you.
                        </p>
        
                        <p>
                            From humble beginnings, we have dedicated ourselves to building not just structures, but lasting relationships with our clients. We focus on delivering exceptional results on every project, no matter the size or complexity. We’re proud of the work we’ve done, and we look forward to growing and evolving with every project we take on.
                        </p>
                    </div>
                    <div class="our_story_image">
                        <img src={groupimage} alt="Counter 1" />                    
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Storey;