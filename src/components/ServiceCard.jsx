import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {

  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}

      className="service-card"
      onClick={() =>
        navigate(`/service/${service.id}`)
      }
    >
      <img
        src={service.serviceImage}
        alt={service.serviceName}
        className="service-image"
      />

      <div className="service-content">

        <h5 className="fw-bold">
          {service.serviceName}
        </h5>

        <p className=" small">
          {service.description}
        </p>

      </div>
    </motion.div>
  );
};

export default ServiceCard;