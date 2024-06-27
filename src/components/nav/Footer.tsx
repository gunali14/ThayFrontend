import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <p className="mb-1">© 2024 Thay Technologies Pvt Limited. All Rights Reserved.</p>
        <p className="mb-0">
          <a href="/AboutUs" className="text-primary mx-2">About Us</a>
          <a href="/ContactUs" className="text-primary mx-2">Contact Us</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
