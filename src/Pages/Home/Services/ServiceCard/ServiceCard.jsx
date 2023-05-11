import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-full bg-base-100 border-2 ">
      <figure>
        <img className="h-[342px] object-cover" src={img} alt="Shoes" />
      </figure>
      <div className="card-body ">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="card-title">{title}</h2>
            <p className="text-2xl font-bold text-orange-500">
              Price: ${price}
            </p>
          </div>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}>
              <button className="text-2xl text-orange-600 hover:text-orange-700">
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
