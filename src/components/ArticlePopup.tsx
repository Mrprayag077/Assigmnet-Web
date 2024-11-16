// ArticlePopup.tsx
import React from "react";

interface ArticlePopupProps {
  article: any;
  closePopup: () => void;
}

const ArticlePopup: React.FC<ArticlePopupProps> = ({ article, closePopup }) => {
  return (
    <div className="bg-white p-4 w-1/3 rounded-lg shadow-lg z-50">
      <img
        src={article.urlToImage || "defaultImg"}
        alt={article.title}
        className="w-full h-[250px] object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
      <p className="text-gray-600 mb-4">{article.description}</p>
      <div className="flex justify-between gap-3">
        <button
          onClick={closePopup}
          className="bg-red-500 text-white px-4 py-2 w-1/2 rounded hover:bg-red-600"
        >
          Close
        </button>
        <a
          href={article.url}
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
