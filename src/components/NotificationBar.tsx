import React from 'react';

const NotificationBar: React.FC = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row  items-center bg-red-500 text-sm shadow-lg mt-12 mb-8 mx-auto p-2.5 w-full max-w-4xl justify-between">
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