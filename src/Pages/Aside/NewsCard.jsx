import React from "react";
import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title = "No Title Available",
    author = {},
    thumbnail_url,
    details = "No details available",
    rating = {},
    total_view = 0,
  } = news || {};

  const formattedDate = author.published_date
    ? new Date(author.published_date).toLocaleDateString()
    : "Unknown Date";

  return (
    <div className="card bg-base-100 shadow-md mb-6">
      {/* Author + Share */}
      <div className="flex bg-base-200 justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src={author.img || "https://via.placeholder.com/40"}
                alt={author.name || "Unknown Author"}
              />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-sm">{author.name || "Unknown Author"}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-primary flex gap-1">
          <FaRegBookmark />
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <div className="px-4 py-4">
        <h2 className="text-lg font-bold text-primary cursor-pointer">{title}</h2>
      </div>

      {/* Image */}
      <div className="px-4 py-2">
        <img
          src={thumbnail_url || "https://via.placeholder.com/300"}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>

      {/* Details */}
      <div className="px-4 text-accent">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <Link
              to={`/readmore/${id}`}
              className="text-primary font-semibold cursor-pointer hover:underline"
            >
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-base-200 mt-3">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: rating.number || 0 }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-600">{rating.number || "0"}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
