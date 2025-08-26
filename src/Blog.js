import React, { useState, useEffect } from "react";
import BlogPosts from "./BlogPosts";
import BlogSearch from "./BlogSearch";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/blogPostsData.json`)
      .then((res) => res.json())
      .then((data) => setBlogPosts(data));
  }, []);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    setResults(
      blogPosts.filter((item) =>
        [item.title, ...item.category, item.description]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    );
  }, [query, blogPosts]);

  return (
    <div className="blog-homepage flex flex-col md:flex-row gap-24 mx-12 mt-20">
      <div className="md:w-1/3 flex flex-col space-y-6">
      <div className="blog-image w-60">
        <img className="rounded-sm" src="/blog-image.jpg" alt="Blog Image" />
      </div>

      <div className="blog-intro">
        <p className="w-60 justify-center">
          Welcome to my blog where i share my experiences with you all! Thank
          you checking out my page!
        </p>
      </div>
      <div className="socials">
        <a href="#">Twitter |</a>
        <a href="#">Tumblr |</a>
        <a href="#">Instagram |</a>
        <a href="#">TikTok</a>
      </div>
      <div className="FAQ ">
        <button className="FAQ-btn rounded-md w-56 bg-amber-900 text-white py-1">
          F.A.Q.
        </button>
      </div>
      <div className="mt-5">
        <BlogSearch query={query} setQuery={setQuery} />
      </div>
      </div>

      <div className="illustration-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {(query ? results : blogPosts).map((post, idx) => (
          <BlogPosts
            key={idx}
            title={post.title}
            image={post.image}
            description={post.description}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
