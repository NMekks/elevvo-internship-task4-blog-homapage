import React from "react";

const Blog = () => {
  return (
    <div className="blog-homepage">
        
      <div className="blog-image mx-12 mt-20 mb-8 w-60">
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
        <button className="FAQ-btn rounded-xl bg-amber-900 text-white px-24 py-1 mx-12">F.A.Q.</button>
      </div>
      <div className="search-bar flex mt-5 justify-start mx-12">
        <input className="search py-1 px-2 w-[16.5%] text-xl text-gray-400 border border-gray-300 rounded-xl bg-white" placeholder="Search"/>
      </div>
      
    </div>
  );
};

export default Blog;
