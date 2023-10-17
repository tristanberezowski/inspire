import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>About Us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
            </div>
            <div className="col-md-4">
              <h3>Contact</h3>
              <ul>
                <li>Email: info@example.com</li>
                <li>Phone: +123 456 789</li>
                <li>Address: 123 Main St, Anytown USA</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Follow Us</h3>
              <ul className="social-icons">
                <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2023. All rights reserved.</p>
        </div>
      </footer>
    );
  }

export default Footer;