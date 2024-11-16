import React, { useEffect, useState, useRef } from "react";
import { fetchTopHeadlines } from "../service/http";
import defaultImg from '../assets/image2.png';
import newPaperImg from '../assets/newspaper.png';
import LoadingImg from '../assets/loading.png';
import ErrorImage from '../assets/mark.png';
import NotificationBar from './NotificationBar';
import ArticlePopup from "./ArticlePopup";
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, setSelectedArticle, clearSelectedArticle } from '../redux/articlesSlice';

const Articles = () => {
  const dispatch = useDispatch();
  const { articles, loading, error, selectedArticle } = useSelector(
    (state) => state.articles
  );

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);


  const [isPopupOpen, setIsPopupOpen] = useState(false);
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
    dispatch(setSelectedArticle(article));

    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedArticle(null);
    dispatch(clearSelectedArticle());

  };

  if (loading) {
    return <div className="flex flex-col items-center justify-center text-center">
      <img src={LoadingImg} alt="No news available" className="w-[100px] my-[50px] lg:my-[150px] lg:w-[200px]" />
    </div>;
  }

  if (error) {
    return <div className="flex flex-col items-center justify-center text-center">
      <img src={ErrorImage} alt="No news available" className="w-[100px] my-[50px] lg:my-[150px] lg:w-[200px]" />
      <p className="mt-4 text-xl text-gray-500">{error}</p>
    </div>;
  }


  return (
    <div className="flex flex-col justify-center">
      <NotificationBar />


      <div className="flex justify-center gap-8 items-start mt-10 min-h-screen p-4">
        <div className="w-full max-w-lg lg:max-w-4xl">
          {articles.length > 0 ? (
            // Render articles if available
            articles.map((article, index) => (
              <div
                key={index}
                ref={el => articleRefs.current[index] = el}
                className="rounded-sm shadow-custom box-border flex flex-col lg:flex-row gap-4 font-light h-full mb-5 mx-auto px-2 py-2 relative w-full"
                onClick={() => openPopup(article, index)}
              >
                  <div className="w-full lg:w-1/3 flex-shrink-0 mb-4 lg:mb-0">
                    <img
                      src={article.urlToImage || defaultImg}
                      alt={article.title}
                      className="bg-center bg-cover rounded-md w-full h-[200px] lg:h-[250px]"
                    />
                  </div>

                  <div className="flex flex-col justify-between w-full lg:w-2/3 p-4 lg:pl-8">
                    <div>
                      <h2 className="text-xl font-[400] text-gray-600 text-[18px] lg:text-lg">
                        {article.title}
                      </h2>
                      <p className="flex justify-start gap-1 text-[13px] my-1 text-nowrap overflow-hidden">
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
              ))
          ) : (
            // Render when no articles are available
            <div className="flex flex-col items-center justify-center text-center">
              <img src={newPaperImg} alt="No news available" className="w-[200px] lg:w-[300px]" />
              <p className="mt-4 text-xl text-gray-500">No news available</p>
            </div>)}
        </div>

        {isPopupOpen && (
          <ArticlePopup
            isPopupOpen={isPopupOpen}
            selectedArticle={selectedArticle}
            closePopup={closePopup}
            isMobile={isMobile}
          />
        )}
      </div>
    </div>
  );
};

export default Articles;