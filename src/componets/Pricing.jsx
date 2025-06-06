import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/pricig.css'
import { div } from "framer-motion/client";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      title: "Cleaning Package",
      priceMonthly: "$39/month",
      priceYearly: "$399/year",
      features: [
        "Cleaning once a week",
        "House/Office",
      ],
      button: "Check Pricing",
    },
    {
      title: "Delivery Package",
      priceMonthly: "$49/month",
      priceYearly: "$499/year",
      features: [
        "5 Deliveries per month",
        "Inter-state Delivery",
      ],
      button: "Check Pricing",
    },
    {
      title: "Graphic Design Package",
      priceMonthly: "Custom Pricing",
      priceYearly: "Custom Pricing",
      features: [
        "5 Graphic Designs per month",
      ],
      button: "Contact Us",
    },
  ];

  return (
    <div className="coza">
        <section
      className="container text-center py-5"
      style={{
        background: "linear-gradient(135deg,rgb(122, 122, 122),rgb(0, 0, 0))",
        color: "white",
        borderRadius: "10px",
        padding: "50px 8px",
        width:"100%",
        marginTop:"60px"
      }}
    >
      <h2 className="mb-4">Our Pricing Plans</h2>

      {/* Toggle Switch for Monthly/Yearly Plans */}
      <div className="form-check form-switch d-flex justify-content-center mb-4">
        <label className="form-check-label mr">Monthly</label>
        <input
          className="form-check-input"
          type="checkbox"
          onChange={() => setIsYearly(!isYearly)}
        />
        <label className="form-check-label ms-2">Yearly (Save 15%)</label>
      </div>

      {/* Pricing Cards */}
      <div className="row justify-content-center">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div
              className="card shadow-lg h-100 glowing-borde"
              style={{
                borderRadius: "15px",
              }}
            >
              <div className="card-body">
                <h4 className="card-title">{plan.title}</h4>
                <h3 className="text-primary">
                  {isYearly ? plan.priceYearly : plan.priceMonthly}
                </h3>
                <ul className="list-unstyled">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="whit">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="btn btn-dark mt-3"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {plan.button}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Pricing;
