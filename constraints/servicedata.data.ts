export interface ServiceInterface {
  title: string;
  image?: string;
  description: string;
}

const serviceData: ServiceInterface[] = [
  {
    title: "Same-Day Delivery",
    image: "/img/same-day.jpeg",
    description:
      "Get your urgent packages delivered within hours. Perfect for time-sensitive items and important documents.",
  },
  {
    title: "International Delivery",
    image: "/img/international.jpeg",
    description:
      "Ship packages worldwide with a secure and reliable service. Includes customs clearance support for smooth delivery.",
  },
  {
    title: "Online Tracking",
    image: "/img/tracking.jpeg",
    description:
      "Monitor your shipment in real-time with live updates. Stay informed about delays or delivery progress.",
  },
  {
    title: "Freight Delivery",
    image: "/img/freight.jpeg",
    description:
      "Transport large, heavy, or oversized items with care. Specialized equipment ensures safe and efficient handling.",
  },
  {
    title: "24/7 Delivery Service",
    image: "/img/24-7.jpeg",
    description:
      "Available around the clock for urgent deliveries anytime—day or night. Reliability when it matters most.",
  },
  {
    title: "E-commerce Fulfillment",
    image: "/img/e-commerce.jpeg",
    description:
      "Comprehensive warehousing, packing, and shipping services for online stores. Streamline your order fulfillment process.",
  },
];

export default serviceData;
