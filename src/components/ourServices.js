import './ourServices.css';

const OurServices = () => {
  return (
    <section className="our_services">
      <div className="container">
        <div className="our_services_heading">
          <h2>OUR SERVICES</h2>
        </div>
        <div className="our_services_cards">
          <div className="card card1">
            <span>Precision Build Solutions</span>
            <div className="overlay">Precision Build Solutions</div>
          </div>
          <div className="card card2">
            <span>Secure Build Compliance</span>
            <div className="overlay">Secure Build Compliance</div>
          </div>
          <div className="card card3">
            <span>Floor Plan</span>
            <div className="overlay">Floor Plan</div>
          </div>
        </div>
        
      </div>
    </section>
    );
};

export default OurServices;