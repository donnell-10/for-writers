import React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NewsCarousel = ({ newsArticles = []}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextArticle = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === newsArticles.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevArticle = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? newsArticles.length - 1 : prevIndex - 1
      );
    };
  
    return (
        <div className="relative max-w-lg overflow-hidden bg-white shadow-md rounded-lg">
          {/* News Panels */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {newsArticles.length > 0 ? (
              newsArticles.map((article, index) => (
                <div
                  key={index}
                  className="min-w-full flex-shrink-0 p-4 bg-purple-100 rounded-md shadow-md flex justify-center"
                >
                    <div className="w-3/4">
                        <h2 className="text-xl font-bold mb-2">{article.category}</h2>
                        <h3 className="text-lg font-semibold">{article.title}</h3>
                        <p className="text-gray-600 mt-1">{article.description}</p>
                        <a
                            href={article.link}
                            className="text-blue-600 hover:underline mt-2 block">
                            Read More
                        </a>
                    </div>
                </div>

              ))
            ) : (
              <div className="min-w-full flex-shrink-0 p-4 bg-white rounded-md shadow-md">
                <p>No news available</p>
              </div>
            )}
          </div>
    
          {/* Carousel Controls with Chevrons */}
          <button
            onClick={prevArticle}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-purple-400 hover:bg-purple-500 rounded-full p-2 shadow-md"
          >
            <ChevronLeft size={24} className="text-gray-800" />
          </button>
          <button
            onClick={nextArticle}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-purple-400 hover:bg-purple-500 rounded-full p-2 shadow-md"
          >
            <ChevronRight size={24} className="text-gray-800" />
          </button>
        </div>
      );
  };

export default NewsCarousel;