import React, { useEffect, useState, useRef } from "react";
import { fetchTopHeadlines } from "../service/http";
import defaultImg from '../assets/image.png';
import NotificationBar from './NotificationBar';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [popupPosition, setPopupPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const articleRefs = useRef({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await fetchTopHeadlines();
        const filteredArticles = data.filter(
          (article) => article.source.name !== "[Removed]"
        );
        setArticles(filteredArticles);
        setLoading(false);
      } catch (err) {
        setError("Failed to load articles. Please try again later.");
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const openPopup = (article, index) => {
    const element = articleRefs.current[index];
    if (element) {
      const rect = element.getBoundingClientRect();
      setPopupPosition(rect.top + window.scrollY);
    }
    setSelectedArticle(article);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedArticle(null);
  };

  if (loading) {
    return <div className="text-center">Loading articles...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col justify-center">
      <NotificationBar />



      {/* Main content area */}
      <div className="flex justify-center gap-8 items-start mt-10 min-h-screen p-4">
        {/* Articles List */}
        <div className="w-full max-w-lg lg:max-w-4xl">
          {articles.map((article, index) => (
            <div
              key={index}
              ref={el => articleRefs.current[index] = el}
              className="rounded-sm shadow-custom box-border flex flex-col lg:flex-row gap-4 font-light h-full mb-5 mx-auto px-2 py-2 relative w-full"
              onClick={() => openPopup(article, index)}
            >
              {/* Left column: Image */}
              <div className="w-full lg:w-1/3 flex-shrink-0 mb-4 lg:mb-0">
                <img
                  src={article.urlToImage || defaultImg}
                  alt={article.title}
                  className="bg-center bg-cover rounded-md w-full h-[200px] lg:h-[250px]"
                />
              </div>

              {/* Right column: Title and Description */}
              <div className="flex flex-col justify-between w-full lg:w-2/3 p-4 lg:pl-8">
                <div>
                  <h2 className="text-xl font-[400] text-gray-600 text-[18px] lg:text-lg">
                    {article.title}
                  </h2>
                  <p className="flex justify-start gap-1 text-[13px] my-1">
                    <span>
                      <span className="font-[500]">news by</span>{" "}
                      {article.author}
                    </span>
                    <span>{article.publishedAt}</span>
                  </p>
                  <p className="mt-2 text-gray-600 text-[15px] lg:text-lg">
                    {article.description || "No Description"}
                  </p>
                </div>

                <div className="mt-4">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline no-underline font-[500] text-sm"
                    onClick={e => e.stopPropagation()}
                  >
                    <span>read more at </span>
                    {article.publishedAt}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Popup */}
        {isPopupOpen && selectedArticle && !isMobile && (
          <div
            // className="sticky top-4 mt-[250px] bg-white p-4 w-1/3 rounded-lg shadow-lg"
            className="sticky bg-white p-4 w-1/3 rounded-lg shadow-lg"
            style={{
              maxHeight: 'calc(100vh - 2rem)',
              overflowY: 'auto',
              top: 'calc(4rem + 20px)' // Adjust for your menu bar height (e.g., 4rem) and any additional spacing (10px)
            }}
          // style={{ maxHeight: 'calc(100vh - 2rem)', overflowY: 'auto' }}
          >
            <img
              src={selectedArticle.urlToImage || defaultImg}
              alt={selectedArticle.title}
              className="w-full h-[250px] object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{selectedArticle.title}</h2>
            <p className="text-gray-600 mb-4">{selectedArticle.description}</p>
            <div className="flex justify-between gap-3">
              <button
                onClick={closePopup}
                className="bg-red-500 text-white px-4 py-2 w-1/2 rounded hover:bg-red-600"
              >
                Close
              </button>
              <a
                href={selectedArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 w-1/2 text-center rounded hover:bg-green-600"
              >
                View Full Article
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;