const optimizeImage = (url) =>
  url.replace(
    "/upload/",
    "/upload/f_auto,q_auto,w_800/"
  );

const services = [
  {
    id: "curtain-rods",
    serviceName: "Curtain Rods",
    available: true,
    serviceImage: optimizeImage(
      "https://res.cloudinary.com/dfjttwg1q/image/upload/v1778658914/curtain_road_dnxwik.png"
    ),
    description: "Professional curtain rod installation service.",
    subServices: [
      {
        id: "with material ",
        name: "New Rod Installation",
        price: "₹150 /ft",
        image: optimizeImage(
          "https://res.cloudinary.com/dfjttwg1q/image/upload/v1778658914/curtain_road_dnxwik.png"
        ),
        description: "Strong and premium curtain rod fitting service.",
        whatsappMessage:
          "Hello Kabeer Services, I need New Rod Installation service.",
      },
       {
        id: "labour rate ",
        name: "New Rod Installation",
        price: "40 /ft",
        image: optimizeImage(
          "https://res.cloudinary.com/dfjttwg1q/image/upload/v1778658914/curtain_road_dnxwik.png"
        ),
        description: "Strong and premium curtain rod fitting service.",
        whatsappMessage:
          "Hello Kabeer Services, I need New Rod Installation service.",
      },
    ],
  },

  {
    id: "fiber-sheet",
    serviceName: "Fiber Sheet",
    available: true,
    serviceImage: optimizeImage(
      "https://res.cloudinary.com/dfjttwg1q/image/upload/v1778658914/fiver_sheet_gbulch.png"
    ),
    description: "Affordable and durable fiber sheet installation service.",
    subServices: [
      {
        id: "sheet-installation",
        name: "Sheet Installation",
        price: "₹20 /sqft",
        image: optimizeImage(
          "https://res.cloudinary.com/dfjttwg1q/image/upload/v1778658914/fiver_sheet_gbulch.png"
        ),
        description: "Professional fiber sheet installation work.",
        whatsappMessage:
          "Hello Kabeer Services, I need Sheet Installation service.",
      },
      {
        id: "sheet-with-material",
        name: "Sheet With Material",
        price: "₹80 /sqft",
        image: optimizeImage(
          "https://res.cloudinary.com/dfjttwg1q/image/upload/v1778658914/fiver_sheet_gbulch.png"
        ),
        description: "Complete fiber sheet service including material.",
        whatsappMessage:
          "Hello Kabeer Services, I need Sheet With Material service.",
      },
    ],
  },

  {
    id: "pigeon-net",
    serviceName: "Pigeon Net",
    available: true,
    serviceImage: optimizeImage(
      "https://res.cloudinary.com/dfjttwg1q/image/upload/v1778658796/pigen_net_xkwhml.png"
    ),
    description: "Safe and durable pigeon net installation service.",
    subServices: [
      {
        id: "balcony-net-installation",
        name: "with material",
        price: "₹15 /sqft",
        image: optimizeImage(
          "https://res.cloudinary.com/dfjttwg1q/image/upload/v1778658796/pigen_net_xkwhml.png"
        ),
        description: "Professional balcony pigeon net installation.",
        whatsappMessage:
          "Hello Kabeer Services, I need Balcony Net Installation service.",
      },
      {
        id: "balcony-net-installation labour rate ",
        name: "labour rate",
        price: "₹6 /sqft",
        image: optimizeImage(
          "https://res.cloudinary.com/dfjttwg1q/image/upload/v1778658796/pigen_net_xkwhml.png"
        ),
        description: "Professional balcony pigeon net installation.",
        whatsappMessage:
          "Hello Kabeer Services, I need Balcony Net Installation service.",
      },
    ],
  },

  {
    id: "electric-work",
    serviceName: "Electric Work",
    available: true,
    serviceImage: optimizeImage(
      "https://res.cloudinary.com/dfjttwg1q/image/upload/v1778658912/electric_work_ef038y.png"
    ),
    description:
      "Professional electrical repair and installation services.",
    subServices: [
      {
        id: "fan-installation",
        name: "Fan Installation",
        price: "₹199",
        image: optimizeImage(
          "https://res.cloudinary.com/dfjttwg1q/image/upload/v1778664638/fan_install_cy4aqn.png"
        ),
        description:
          "Professional fan installation by expert electricians.",
        whatsappMessage:
          "Hello Kabeer Services, I need Fan Installation service.",
      },

      {
        id: "switch-board-repair",
        name: "Switch Board Repair",
        price: "₹149",
        image: optimizeImage(
          "https://res.cloudinary.com/dfjttwg1q/image/upload/v1778658912/electric_work_ef038y.png"
        ),
        description: "Quick and safe switch board repair service.",
        whatsappMessage:
          "Hello Kabeer Services, I need Switch Board Repair service.",
      },

      {
        id: "light-point",
        name: "Light Point",
        price: "₹300",
        image: optimizeImage(
          "https://res.cloudinary.com/dfjttwg1q/image/upload/v1778664638/fan_install_cy4aqn.png"
        ),
        description: "Professional light point fitting and setup.",
        whatsappMessage:
          "Hello Kabeer Services, I need Light Point service.",
      },

      {
        id: "surface-light",
        name: "Surface Light",
        price: "₹149",
        image: optimizeImage(
          "https://res.cloudinary.com/dfjttwg1q/image/upload/v1778664638/fan_install_cy4aqn.png"
        ),
        description: "Modern surface light installation service.",
        whatsappMessage:
          "Hello Kabeer Services, I need Surface Light service.",
      },

      {
        id: "strip-light",
        name: "Strip Light",
        price: "₹50",
        image: optimizeImage(
          "https://res.cloudinary.com/dfjttwg1q/image/upload/v1778664852/strip_light_wfkqhe.webp"
        ),
        description: "Decorative strip light installation service.",
        whatsappMessage:
          "Hello Kabeer Services, I need Strip Light service.",
      },

      {
        id: "geyser-installation",
        name: "Geyser Installation",
        price: "₹600",
        image: optimizeImage(
          "https://res.cloudinary.com/dfjttwg1q/image/upload/v1778658914/geyser_intall_elwgvq.png"
        ),
        description: "Professional geyser installation service.",
        whatsappMessage:
          "Hello Kabeer Services, I need Geyser Installation service.",
      },

      {
        id: "tube-light",
        name: "Tube Light",
        price: "₹99",
        image: optimizeImage(
          "https://res.cloudinary.com/dfjttwg1q/image/upload/v1778665046/tube_light_rsrlqd.jpg"
        ),
        description: "Fast tube light fitting and replacement service.",
        whatsappMessage:
          "Hello Kabeer Services, I need Tube Light service.",
      },
    ],
  },
];

export default services;