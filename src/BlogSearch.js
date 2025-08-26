import React from "react";

const BlogSearch = ({ query, setQuery }) => {
  return (
    <div className="blog-search">
      <div className="">
        <form className="" role="search">
          <input
            class="py-1 px-2 w-56 text-xl text-gray-400 border border-gray-300 rounded-md bg-white"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            type="search"
            aria-label="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default BlogSearch;
