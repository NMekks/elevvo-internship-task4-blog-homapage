import React, { useState, useEffect } from "react";
import BlogPosts from "./BlogPosts";
import BlogSearch from "./BlogSearch";
import Pagination from "./Pagination";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; // Number of posts to display per page
  const [search, setSearch] = useState("");

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

  const filteredPosts = blogPosts.filter(
    (post) =>
    [post.title, post.description, ...post.category]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  // Calculate posts for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages for pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handler for pagination button clicks
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="blog-homepage flex flex-col md:flex-row gap-24 mx-12 mt-20 mb-20">
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
          <a className=" text-amber-900 hover:text-amber-600" href="#">
            Twitter
          </a>{" "}
          |
          <a className=" text-amber-900 hover:text-amber-600" href="#">
            Tumblr{" "}
          </a>
          |
          <a className=" text-amber-900 hover:text-amber-600" href="#">
            Instagram{" "}
          </a>
          |
          <a className=" text-amber-900 hover:text-amber-600" href="#">
            TikTok
          </a>
        </div>
        <div className="FAQ ">
          <button className="FAQ-btn rounded-md w-56 bg-amber-900 hover:bg-amber-600 text-white py-1">
            F.A.Q.
          </button>
        </div>
        <div className="mt-5">
          <BlogSearch
            query={query}
            setQuery={(value) => {
              setQuery(value);
              setCurrentPage(1); // reset to page 1 on search
            }}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="illustration-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {currentPosts.length > 0 ? (
            currentPosts.map((post, idx) => (
              <BlogPosts
                key={idx}
                title={post.title}
                image={post.image}
                description={post.description}
                date={post.date}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No posts found.
            </p>
          )}
        </div>
        {/* Pagination Component */}
        {filteredPosts.length > postsPerPage && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            paginate={paginate}
          />
        )}
      </div>
    </div>
  );
};

export default Blog;
