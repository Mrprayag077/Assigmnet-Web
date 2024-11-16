import React from "react";

// Utility function to truncate text
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

const ArticlePopup = ({
  isPopupOpen,
  selectedArticle,
  closePopup,
  isMobile,
}) => {
  if (!isPopupOpen || !selectedArticle) return null;

  return isMobile ? (
    // Mobile Popup
    <div className="fixed w-full bottom-0 left-0 right-0 bg-neutral-100 p-4 rounded-lg shadow-lg z-50">
      <img
        src={selectedArticle.urlToImage || defaultImg}
        alt={selectedArticle.title}
        className="w-full h-[250px] object-cover rounded-md mb-4"
      />
      <h2 className="text-[19px] font-bold mb-2">{selectedArticle.title}</h2>
      <p className="text-gray-600 text-[16px] mb-4">
        {truncateText(selectedArticle.description, 50)}
      </p>
      <div className="flex flex-col sm:flex-row justify-between gap-3">
        <button
          onClick={closePopup}
          className="bg-red-500 text-white px-4 py-2 w-full sm:w-1/2 rounded hover:bg-red-600 mb-3 sm:mb-0"
        >
          Close
        </button>
        <a
          href={selectedArticle.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 w-full sm:w-1/2 text-center rounded hover:bg-green-600"
        >
          View Full Article
        </a>
      </div>
    </div>
  ) : (
    // Desktop Popup
    <div
      className="sticky bg-white p-4 w-1/3 rounded-lg shadow-lg"
      style={{
        maxHeight: "calc(100vh - 2rem)",
        overflowY: "auto",
        top: "calc(4rem + 20px)", // Adjust for your menu bar height
      }}
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
  );
};

export default ArticlePopup;
