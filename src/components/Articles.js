import React from "react";
import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <div className="p-2 md:w-1/5">
          <div
            className="h-full border-2 border-gray-200 border-opacity-60 rounded
              overflow-hidden"
          >
            
            <Link to={`/article/${article.name}`}>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center hover:scale-[1.05] transition hover:ease-in-out"
                src={article.thumbnail}
                alt="blog"
              />
            </Link>

            <div className="p-4 h-full bg-black hover:bg-zinc-800 text-white">
              
              <Link to={`/article/${article.name}`}>
                <h3 className="title-font font-medium text-white mb-3 uppercase">
                  {article.title}
                </h3>
              </Link>
              <p className="leading-relaxed my-5 text-sm font-medium uppercase text-zinc-400">
                {article.normalName}
                {/* {article.content[0].substring(0, 115)}... */}
              </p>

                <Link
                  className="text-red-600 md:mb-2 lg:mb-0 text-xs"
                  to={`/article/${article.name}`}
                >
                  View More
                </Link>
       
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Articles;
