import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h2>Categories</h2>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h2>Links</h2>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h2>About</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem facilis eveniet ipsum doloribus exercitationem molestias vel nam! Quis, enim! Optio quibusdam eligendi ut quae vel, dolorum in dicta a!</span>
        </div>
        <div className="item">
          <h2>Contact</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore odio iste at rerum nihil. Ducimus quia officiis dolor molestiae placeat suscipit corrupti, eum modi, qui, ullam quisquam nihil id.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Lojinha</span>
          <span className="copyright">© Copyright 2022 - <a href="https://github.com/tjfaccipieri" target='_blank'>/tjfaccipieri</a></span>
        </div>
        <div className="right">
          <img src="/payment.png" alt="Payment Methods" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
