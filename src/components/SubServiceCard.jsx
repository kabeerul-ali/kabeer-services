import React from "react";
import services from "../data/services";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Services</h2>

        <p className="text-muted">
          Fast • Trusted • Same Day Professional Services
        </p>
      </div>

      <div className="row g-4">
        {services.map((service) => (
          service.available && (
            <div
              className="col-6 col-md-4 col-lg-3"
              key={service.id}
            >
              <ServiceCard service={service} />
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;