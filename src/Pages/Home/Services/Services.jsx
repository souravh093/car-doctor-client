import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
  return (
    <div>
      <div className="flex justify-center">
        <div className="space-y-2 text-center">
          <h3 className="text-2xl font-bold text-orange-600">Services</h3>
          <h2 className="text-5xl font-bold">Our Services Area</h2>
          <p className="max-w-2xl text-center">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don not look even slightly
            believable.{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {
            services.map(service => <ServiceCard key={service._id} service={service} />)
        }
      </div>
    </div>
  );
};

export default Services;
