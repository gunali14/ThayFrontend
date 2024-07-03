import React from 'react';
import '../Style.css';
import LearnMore from './LearnMore';
import Service from './Service';

const AboutUs: React.FC = () => {
  return (
    <div className="main-layout">
      {/* About Section */}
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>About</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="about_box">
                <figure><img src="/imagess.jpg" alt="About us" /></figure>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="about_box">
                <h3>Who is Thay Technology</h3>
                <p>Thay Technologies is an IT Solutions firm based in Chennai. With its state-of-the-art infrastructure and amicable location in the heart of the city, Thay Technologies intends to add value to IT companies.</p>

<p>Thay Technology rings a fresh and innovative approach to IT services, acting as liaison between the client and their end-users. Our goal is to exceed the expectations of every client by offering outstanding services, increased flexibility, and greater values, thus optimizing and improving operation efficiency. Our associates are distinguished by their functional and technical expertise combined with their hands-on experience, thereby ensuring that our clients receive the most effective and professional service. This fetched us a lot of business tie-up, in executing their projects by outsourcing the professional, consultancy services to them.</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Client Logos Section */}
      <div className="whyschose">
        <div className="container">
          <div className="row">
            <div className="col-md-7 offset-md-3">
              <div className="title">
                <h2>Our <strong className="black">clients</strong></h2>
              </div>
            </div>
          </div>

          <section id="companies" className="companies">
            
            <div className="container">
              <div className="example">
                <div className="logo-track">
                  {/* Repeat logos as needed */}
                  <div className="companies__logo-box">
                    <img src="/Oracle-Logo.png" alt="Company 1 logo" title="Company 1 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="/HCL-Logo.png" alt="Company 2 logo" title="Company 2 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="/Wipro_logo.jpg" alt="Company 3 logo" title="Company 3 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="/SLK_logo.jpg" alt="Company 4 logo" title="Company 4 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="/Sony Logo.jpg" alt="Company 5 logo" title="Company 5 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="/TATA Logo.jpg" alt="Company 6 logo" title="Company 6 Logo"/>
                  </div>
                  {/* Repeat logos to create seamless loop */}
                  <div className="companies__logo-box">
                    <img src="/hexaware-technologies-logo.png" alt="Company 1 logo" title="Company 1 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="/Softeon.jpg" alt="Company 2 logo" title="Company 2 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="/Reuters.jpg" alt="Company 3 logo" title="Company 3 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="/8K Miles.jpg" alt="Company 4 logo" title="Company 4 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="Verint_Logo.jpg" alt="Company 5 logo" title="Company 5 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="/verizon-logo.png" alt="Company 6 logo" title="Company 6 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="/akamai-logo.png" alt="Company 6 logo" title="Company 6 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="/AVO carbon Logo.jpg" alt="Company 6 logo" title="Company 6 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="/Bank Of America.jpg" alt="Company 6 logo" title="Company 6 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="/CRI logo.jpg" alt="Company 6 logo" title="Company 6 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="/ELGI Logo.jpg" alt="Company 6 logo" title="Company 6 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="/Ericssson.png" alt="Company 6 logo" title="Company 6 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="/GXS logo.jpg" alt="Company 6 logo" title="Company 6 Logo"/>
                  </div>
                  <div className="companies__logo-box">
                    <img src="/Findelity.png" alt="Company 6 logo" title="Company 6 Logo"/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
<Service></Service>
      {/* Why Choose Us Section */}
      <div className="whyschose">
        <div className="container">
          <div className="row">
            <div className="col-md-7 offset-md-3">
              <div className="title">
                <h2>Why <strong className="black">choose us</strong></h2>
              </div>
            </div>
            <div className='Zoom'>  
              <LearnMore></LearnMore>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
