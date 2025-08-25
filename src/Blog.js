import React from "react";

const Blog = () => {
  return (
    <div className="blog-homepage">
        <div className="search-bar flex mt-8 justify-center">
        <div className="search w-[50%] py-1 px-4 text-xl text-gray-300 border border-gray-300 rounded-lg bg-white">Search</div>
      </div>
      <div className="blog-image mx-12 mt-5 mb-8 w-60">
        <img src="/blog-image.jpg" alt="" />
      </div>
      <div className="blog-intro">
        <p className="w-64 justify-center mx-12">
          Welcome to my blog where i share my experiences with you all! Thank
          you checking out my page!
        </p>
      </div>
      <div className="socials mx-12 my-4">
        <a href="#">Twitter |</a>
        <a href="#">Tumblr |</a>
        <a href="#">Instagram |</a>
        <a href="#">TikTok</a>
      </div>
      <div className="FAQ ">
        <button className="FAQ-btn rounded-lg bg-amber-900 text-white px-24 py-1 mx-12">F.A.Q.</button>
      </div>
      
    </div>
  );
};

export default Blog;
