import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="pricing">
      <h1>Pricing Plans</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa
        dolore, cumque iusto nostrum ratione ipsum porro reprehenderit velit
        nihil!
      </p>
      <div className="pricing__plans">
        <div className="pricing__plans__box">
          <div className="pricing-header">
            <h3 className="pricing-title">Starter</h3>
          </div>
          <div className="pricing-body">
            <div className="price-wrapper">
              <span className="currency">$</span>
              <span className="price">14.50</span>
              <span className="period">/month</span>
            </div>
            <ul className="pricing-features">
              <li className="active">60 GB space</li>
              <li className="active">600 GB transfer</li>
              <li className="active">Pro Design Panel</li>
              <li>15-minute support</li>
              <li>Unlimited Emails</li>
              <li>24/7 Security</li>
            </ul>
          </div>
          <div className="pricing-footer">
            <a href="#" className="purchase-button">
              Purchase Now
            </a>
          </div>
        </div>
        <div className="pricing__plans__box">
          <div className="pricing-header">
            <h3 className="pricing-title">Premium</h3>
          </div>
          <div className="pricing-body">
            <div className="price-wrapper">
              <span className="currency">$</span>
              <span className="price">21.50</span>
              <span className="period">/month</span>
            </div>
            <ul className="pricing-features">
              <li className="active">120 GB space</li>
              <li className="active">1200 GB transfer</li>
              <li className="active">Pro Design Panel</li>
              <li className="active">15-minute support</li>
              <li>Unlimited Emails</li>
              <li>24/7 Security</li>
            </ul>
          </div>
          <div className="pricing-footer">
            <a href="#" className="purchase-button">
              Purchase Now
            </a>
          </div>
        </div>
        <div className="pricing__plans__box">
          <div className="pricing-header">
            <h3 className="pricing-title">Advanced</h3>
          </div>
          <div className="pricing-body">
            <div className="price-wrapper">
              <span className="currency">$</span>
              <span className="price">42.00</span>
              <span className="period">/month</span>
            </div>
            <ul className="pricing-features">
              <li className="active">250 GB space</li>
              <li className="active">5000 GB transfer</li>
              <li className="active">Pro Design Panel</li>
              <li className="active">15-minute support</li>
              <li className="active">Unlimited Emails</li>
              <li className="active">24/7 Security</li>
            </ul>
          </div>
          <div className="pricing-footer">
            <a href="#" className="purchase-button">
              Purchase Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
