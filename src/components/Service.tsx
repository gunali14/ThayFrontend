import React from 'react';

const Service: React.FC = () => {
  return (
    <div className="whyschose">
      <div className="container">
        <div className="row">
          <div className="col-md-7 offset-md-3">
            <div className="title">
              <h2>Our <strong className="black">Service</strong></h2>
             
            </div>
          </div>
        </div>
      </div>
      <div className="choose_bg">
        <div className="container">
          <div className="white_bg">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="for_box">
                  <i><img src="icon/1.png" alt="Data recovery" /></i>
                  <h3>Data recovery</h3>
                  <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="for_box">
                  <i><img src="icon/2.png" alt="Computer repair" /></i>
                  <h3>Computer repair</h3>
                  <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="for_box">
                  <i><img src="icon/3.png" alt="Mobile service" /></i>
                  <h3>Mobile service</h3>
                  <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="for_box">
                  <i><img src="icon/4.png" alt="Network solutions" /></i>
                  <h3>Network solutions</h3>
                  <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                </div>
              </div>
              <div className="col-md-12">
                <a className="read-more" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
