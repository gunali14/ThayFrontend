
import '../Style.css'; // Assuming this is where your global styles are defined

const LearnMore = () => {
  return (
    <div className="sticky-top">
      <section className="bsb-pricing-2 py-5 py-xl-8">
        <div className="container">
          <div className="row gy-5 gy-lg-0 gx-xl-5">

            <div className="col-12 col-lg-4">
              <div className="card border-0 border-bottom border-primary  zoom">
                <div className="card-body p-4 p-xxl-5">
                  <h1 className="h4 mb-2" style={{ fontStyle: 'oblique'}}>Our Vision<hr/></h1>
                  <p style={{ fontFamily: 'Garamond, serif' }}>Our vision is to become a leader in the IT solutions arena by providing professional and high-quality services to our clients. We strive to provide customer-centric solutions of international standards to our clients at affordable costs. We also work toward improving scalability of IT businesses and help them achieve their goals.</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="card border-0 border-bottom border-primary pt-md-4 pb-md-4 bsb-pricing-popular zoom">
                <div className="card-body p-4 p-xxl-5">
                  <h2 className="h4 mb-2" style={{ fontStyle: 'oblique'}}>Our CEO<hr/></h2>
                  <p style={{ fontFamily: 'Garamond, serif' }}>Mr. P. Srinivasan, CEO of Thay Technologies, has years of experience in a wide spectrum of IT solutions. He has successfully led several projects and has gained a reputation among our clients. Thay Technologies is the brainchild of Mr. P. Srinivasan and has been established with a vision to empower the IT industry with scalability, flexibility, and efficiency.</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="card border-0 border-bottom border-primary  zoom">
                <div className="card-body p-4 p-xxl-5">
                  <h2 className="h4 mb-2" style={{ fontStyle: 'oblique'}}>Core Values<hr/></h2>
                  <p style={{ fontFamily: 'Garamond, serif' }}>At Thay Technologies, we adore perfection, innovation, quality, relationships, and knowledge. We adhere to the corporate culture and emphasize human values.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>
        {`
      

          .zoom {
            transition: transform .2s;
            transition: box-shadow .3s;
            
            border: 1px solid #ccc;
            background: #fff;
            float: left;
          }

          .zoom:hover {
            transform: scale(1.1);
            box-shadow: 0 0 11px rgba(33,33,33,.2); 
            
          }
        `}
      </style>
    </div>
  );
};

export default LearnMore;
