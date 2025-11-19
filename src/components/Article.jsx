import React from "react";
import News from "../assets/News.png";

const Article = () => {
  return (
    <article className="container p-6 mx-auto mt-5 bg-black/80 rounded-lg text-white">
      <h2 className="mb-2 text-2xl font-bold text-center">Latest News</h2>

      <div className="flex items-center shadow bg-white rounded-lg p-5 max-w-4xl mx-auto mt-4">
        <img className="h-52 rounded-lg" src={News} alt="News" />
        <div className="ml-6 w-fit">
          <h3 className="text-xl text-black font-semibold">
            Vite is Revolutionizing Frontend
          </h3>
          <p className="text-gray-600 mt-2">
            Vite is a next-gen frontend tool that delivers fast development.
          </p>
        </div>
      </div>
      
    </article>
  );
};

export default Article;
