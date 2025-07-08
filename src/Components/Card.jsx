import React from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

export default function Card(props) {
  let review = props.reviews;



  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-md w-full text-center transition-all duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="flex justify-center mb-4">
        <img
          src={review.image}
          alt={review.name}
          className="w-24 h-24 rounded-full border-4 border-violet-400 object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="text-xl font-semibold text-gray-800">{review.name}</h2>

      {/* Job Title */}
      <p className="text-violet-600 font-medium uppercase text-sm mb-4">
        {review.job}
      </p>

      {/* Quote icons + text */}
      <div className="text-gray-600 px-4">
        <FaQuoteLeft className="inline-block text-violet-400 mr-2 text-lg" />
        <span>{review.text}</span>
        <FaQuoteRight className="inline-block text-violet-400 ml-2 text-lg" />
      </div>
     
    
    </div>
  );
}
