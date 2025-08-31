import React from "react";

const BlogPosts = ({ image, title, description, date }) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-md hover:transition hover:scale-105 border border-gray-300 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/600x400/CCCCCC/333333?text=Image+Missing";
        }}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-700 text-base mb-5">{description}</p>
        <div className="flex justify-between items-center text-gray-500 text-sm mt-auto">
          <span>{date}</span>
          <button className="bg-amber-900 hover:bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
