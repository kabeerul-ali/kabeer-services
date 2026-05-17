import React from "react";

import { useParams } from "react-router-dom";

import services from "../data/services";

import { motion } from "framer-motion";

const SubServicePage = () => {

  const { serviceId, subServiceId } = useParams();

  const service = services.find(
  (item) =>
    String(item.id) === String(serviceId)
);

  const subService = service?.subServices.find(
  (item) =>
    String(item.id) === String(subServiceId)
);

  if (!service || !subService) {

    return (

      <div className="container py-5 text-center">

        <h2 className="text-light">
          Service Not Found
        </h2>

      </div>
    );
  }

  const handleDealNow = () => {

    const currentUrl = window.location.href;

    const message =
`Hello Kabeer Services

Service: ${service.serviceName}

Sub Service: ${subService.name}

Price: ${subService.price}

${currentUrl} \n\n\n\nThanks!\n\n\n`

;

    const whatsappUrl =
`https://api.whatsapp.com/send?phone=919528536346&text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
  };

  return (

    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-8 col-lg-6">

          <motion.div

            initial={{
              opacity: 0,
              y: 30
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.5
            }}

            className="service-card"
          >

            <img
              src={subService.image}
              alt={subService.name}
              className="service-image"
            />

            <div className="p-4">

              <h2 className="fw-bold mb-3 text-light">

                {subService.name}

              </h2>

              <h4 className="text-info mb-3">

                {subService.price}

              </h4>

              <p className="text-light">

                {subService.description}

              </p>

              <button
                className="deal-btn"
                onClick={handleDealNow}
              >

                Deal Now

              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </div>
  );
};

export default SubServicePage;