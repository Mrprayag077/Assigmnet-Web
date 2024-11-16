import React from 'react';

const NotificationBar: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-3 text-orange-500 font-semibold items-center mt-12 mb-8 mx-auto p-2.5 w-full max-w-4xl justify-between">
        <p>
          The API doesn't allow responses when hosted, so I have added dummy
          data for the hosted application. You can refer to my video summary for
          the API implementation on localhost.{" "}
          <a
            href="https://drive.google.com/drive/u/1/folders/1GHj3sAfS6jumOvgqPi3tX_d7MJfB0yKo"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-green-600 underline hover:text-yellow-500"
          >
            Video Summary
          </a>
          <a
            href="https://github.com/Mrprayag077/Assigmnet-Web"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-green-600 underline hover:text-yellow-500"
          >
            Github Link
          </a>
        </p>

        <div className="flex items-center px-3 py-1.5 text-sm font-medium rounded-full border border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mb-4">
          Frontend: ReactJS, Redux, TailwindCSS, Vercel -
          <a
            href="https://mrprayag-portfolio-2d915.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-yellow-300 underline hover:text-yellow-500"
          >
            My Portfolio
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  items-center bg-red-500 text-sm shadow-lg mt-2 mb-8 mx-auto p-2.5 w-full max-w-4xl justify-between">
        <div className="text-white text-xs lg:text-lg py-1 pb-2 lg:font-medium lg:mb-0 text-center lg:text-left">
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
        <div className="flex flex-row gap-2 justify-center lg:justify-start">
          <a
            target="_blank"
            href="https://inshorts.onelink.me/398813699/Website"
            className="flex justify-center"
          >
            <img
              className="h-10 w-28"
              src="https://assets.inshorts.com/website_assets/images/appstore.png"
              alt="inshorts"
            />
          </a>
          <a
            target="_blank"
            href="https://inshorts.onelink.me/398813699/Website"
            className="flex justify-center"
          >
            <img
              className="h-10 w-28"
              src="https://assets.inshorts.com/website_assets/images/playstore.png"
              alt="inshorts"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default NotificationBar;