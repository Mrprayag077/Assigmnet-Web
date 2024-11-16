import React, { useEffect, useState } from "react";
import { fetchTopHeadlines } from "../service/http";
import defaultImg from '../assets/image.png';
const Articles = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(null); // State for popup URL
  const [iframeSrc, setIframeSrc] = useState('');


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

  const openPopup = (url) => {
    setIframeSrc(url);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIframeSrc('');
  };

  if (loading) {
    return <div className="text-center">Loading articles...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }





  return (
    <div className="flex flex-col justify-center">
      {/* Red Box: For best experience section */}
      <div className="flex items-center bg-red-500 text-sm shadow-lg mt-12 mb-8 mx-auto p-2.5 w-full max-w-4xl justify-between -z-10">
        <div className="text-white font-medium">
          For the best experience use{" "}
          <a
            target="_blank"
            href="https://inshorts.com/mobile"
            className="text-white font-medium"
          >
            inshorts
          </a>{" "}
          app on your smartphone
        </div>
        <div className="flex">
          <a
            target="_blank"
            href="https://inshorts.onelink.me/398813699/Website"
            className="flex"
          >
            <img
              className="iAjs3sBFVb0SFkCNlLII"
              src="https://assets.inshorts.com/website_assets/images/appstore.png"
              height="52"
              width="140"
              alt="inshorts"
            />
          </a>
          <a
            target="_blank"
            href="https://inshorts.onelink.me/398813699/Website"
            className="flex"
          >
            <img
              className="iAjs3sBFVb0SFkCNlLII"
              src="https://assets.inshorts.com/website_assets/images/playstore.png"
              height="52"
              width="140"
              alt="inshorts"
            />
          </a>
        </div>
      </div>


      {/* Popup */}



      {/* Articles List */}
      <div className="flex justify-center gap-1 items-center mt-10 min-h-screen p-4">

        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
            <div className="bg-white w-1/3 h-full shadow-lg p-4 flex flex-col">
              <button
                className="self-end text-red-500 font-bold mb-4"
                onClick={closePopup}
              >
                Close
              </button>
              <iframe
                src={iframeSrc}
                className="w-full h-full border-0"
                title="Article Preview"
              ></iframe>
            </div>
          </div>
        )}

        <div className="w-full max-w-lg lg:max-w-4xl">
          {articles.map((article, index) => (
            <div
              key={index}
              className="rounded-sm shadow-custom box-border flex flex-col lg:flex-row gap-4 font-light h-full mb-5 mx-auto px-2 py-2 relative w-full"
              onClick={() => openPopup(article.url)}
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
                  <h2 className="text-xl font-[400] text-gray-600">
                    {article.title}
                  </h2>
                  <p className="flex justify-start gap-1 text-[13px] my-1">
                    <span>
                      <span className="font-[500]">news by</span>{" "}
                      {article.author}
                    </span>
                    <span>{article.publishedAt}</span>
                  </p>
                  <p className="mt-2 text-gray-600">{article.description || "No Description"}</p>
                </div>

                <div className="mt-4">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline no-underline font-[500] text-sm"
                  >
                    <span className="">read more at </span>
                    {article.publishedAt}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
