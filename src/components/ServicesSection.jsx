import React from "react";

import { motion } from "framer-motion";

import services from "../data/services";

import ServiceCard from "./ServiceCard";

const ServicesSection = () => {

  return (

    <div className="container py-5">

      <motion.div

        initial={{
          opacity: 0,
          y: 30
        }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.6
        }}

        className="text-center mb-5"
      >

       
      </motion.div>

      <div className="row g-4">

        {services.map((service, index) => (

          service.available && (

            <motion.div

              key={service.id}

              className="col-6 col-md-4 col-lg-3"

              initial={{
                opacity: 0,
                y: 40
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.4,
                delay: index * 0.08
              }}

              viewport={{
                once: true
              }}
            >

              <ServiceCard service={service} />

            </motion.div>

          )

        ))}

      </div>

    </div>
  );
};

export default ServicesSection;