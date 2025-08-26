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
        <button className="FAQ-btn rounded-xl bg-amber-900 text-white px-24 py-1 mx-12">
          F.A.Q.
        </button>
      </div>
      <div className="mx-12 mt-5">
        <BlogSearch query={query} setQuery={setQuery} />
      </div>

      <div className="illustration-gallery">
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
