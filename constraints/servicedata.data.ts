export interface ServiceInterface{
    title:string,
    image?:string,
    description:string,
}

const serviceData:ServiceInterface[]=[
    {
        title:"Same-day delivery",
        image:"",
        description:"Urgent packages delivered within hours. Ideal for time-sensitive items or important documents."
    },
    {
        title:"International delivery:",
        image:"",
        description:"Packages sent worldwide. Secure and reliable service, with customs clearance assistance provided."
    },
    {
        title:"Online tracking",
        image:"",
        description:"Track your package in real-time, receive updates on delays or issues. Convenient and user-friendly service."
    },
    {
        title:"Freight delivery",
        image:"",
        description:"Large, heavy or unusual items shipped safely and efficiently. Special handling equipment used when required."
    },
    {
        title:"24-hour service",
        image:"",
        description:"Delivery service available around the clock. Ideal for urgent packages that need to be delivered at any time of the day."
    },
    {
        title:"E-commerce fulfillment",
        image:"",
        description:"Warehousing and distribution services for e-commerce businesses. Picking, packing and shipping of orders for online retailers."
    },
]

export default serviceData;