import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
  const [asc, setAce] = useState(true);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services?sort=${asc ? "asc" : "desc"}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc]);
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
          <button onClick={() => setAce(!asc)} className="btn btn-error">
            {asc ? "Price: High to Low" : "Price: Low to High"}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
