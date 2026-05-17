import React from "react";

import { motion } from "framer-motion";

const items = [
  "500+ Happy Customers",
  "Same Day Service",
  "Trusted Professionals",
  "Affordable Pricing",
  "24/7 Support",
  "Fast Response"
];

const TrustSection = () => {

  return (

    <div className="trust-section container">

      <div className="row g-4">

        {items.map((item, index) => (

          <div
            className="col-6 col-md-4"
            key={index}
          >

            <motion.div

              whileHover={{
                scale: 1.05
              }}

              initial={{
                opacity: 0,
                y: 30
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.4
              }}

              className="trust-card"
            >
              {item}
            </motion.div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default TrustSection;