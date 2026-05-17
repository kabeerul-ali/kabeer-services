import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import services from "../data/services";

import { motion } from "framer-motion";

const ServicePage = () => {

  const { serviceId } = useParams();

  const navigate = useNavigate();

  const service = services.find(
  (item) =>
    String(item.id) === String(serviceId)
);

  if (!service) {
    return (
      <div className="container py-5 text-center">
        <h2>Service Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <div className="text-center mb-5">

        <h1 className="fw-bold">
          {service.serviceName}
        </h1>

        <p className="text-muted">
          {service.description}
        </p>

      </div>

      <div className="row g-4">

        {service.subServices.map((sub) => (

          <div
            className="col-6 col-md-4 col-lg-3"
            key={sub.id}
          >

            <motion.div

              whileHover={{ scale: 1.05 }}

              whileTap={{ scale: 0.97 }}

              initial={{ opacity: 0, y: 30 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.4 }}

              className="service-card"

              onClick={() =>
                navigate(
                  `/service/${service.id}/${sub.id}`
                )
              }
            >

              <img
                src={sub.image}
                alt={sub.name}
                className="service-image"
              />

              <div className="p-3">

                <h5 className="fw-bold">
                  {sub.name}
                </h5>

                <p className="text-info fw-bold">
                  {sub.price}
                </p>

              </div>

            </motion.div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default ServicePage;