import './consructions.css'
import counterImage1 from '../assets/counter_image1.png';
import counterImage2 from '../assets/counter_image2.png';



const Construction = () => {
    return (
        <section class="moments_counter" id="next-section">
            <div class="container">
                <div class="moments_counter_text">
                    <div class="moments_counter_left">
                        <p>Moments Constructions</p>
                        <h3>Meet the Builder Behind <span>Moments Constructions</span> </h3>
                    </div>
                    <div class="moments_counter_right">
                        <p>Moments Construction is a reputable building firm dedicated to creating custom-made homes with extensive industry experience, the team at Moments Construction merges skilled craftsmanship, meticulous attention to detail, and a strong dedication to client satisfaction. Focusing on residential projects, renovations, and additions, Moments Construction guarantees that each undertaking authentically represents the client’s vision, executed with care, precision, and an emphasis on enduring quality.</p>
                    </div>
                </div>

                <div class="moments_counter_image">
                    <div class="moments_counter_image_left">
                        <img src={counterImage1} alt="Counter 1" />                    
                    </div>
                    <div class="moments_counter_image_right">
                    <img src={counterImage2} alt="Counter 2" />                    
                    </div>
                </div>

                {/* <div class="counter_main">
                    <div class="c_text">
                        <span class="plusSign">+</span>
                        <div class="count count_one" data-target="172">0</div>
                        <span class="span_1">Square Areas</span>
                    </div>
                    <div class="c_text">
                        <div class="count" data-target="50" >0</div>
                        <span class="span_2">Square Areas</span>
                    </div>
                    <div class="c_text">
                        <div class="count" data-target="900">0</div>
                        <span class="span_3">Square Areas</span>
                    </div>
                    <div class="c_text">
                        <span class="kSign">K</span>
                        <div class="count count_two" data-target="20">0</div>
                        <span class="span_4">Square Areas</span>
                    </div>
                </div> */}

                {/* <div class="learn_more_btn">
                    <a href="about.html">Learn More<FontAwesomeIcon icon={faAngleRight} className='icon-arrow'/></a>
                </div> */}
            </div>
        </section>
    );
};

export default Construction;