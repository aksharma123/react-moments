import React from "react";
import LearnBtn from "./LearnBtn";
import visit1 from "../assets/visitimage1.png";
import visit2 from "../assets/visitimage2.png";
import visit3 from "../assets/visitimage3.png";
import visit4 from "../assets/visitimage4.png";
import "./visit.css";

const Visit = () => {
    return(
        <div class="visit_section">
            <div class="container">
                <div class="visit_content">
                    <div class="visit_image">
                        <div class="visit_image1">
                            <img src={visit1} alt=""/>
                            <img src={visit2} alt=""/>
                        </div>
                        <div class="visit_image2">
                            <img src={visit3} alt=""/>
                            <img src={visit4} alt=""/>
                        </div>
                    </div>
                    <div class="visit_form">
                        <h4>Schedule A Visit</h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos duc blanditiis praesentium voluptatum</p>

                        <form>
                            <input type="text" name ="name" pattern="[A-Za-z ]+" placeholder="Name" required/>
                            <input type="tel" pattern="\d{10}" maxlength="10" minlength="10" name="mobile" placeholder="Mobile No" required/>
                            <input type="email" name="email" placeholder="E-mail Id" required/>
                            <LearnBtn link="#" text="Submit"/>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Visit;