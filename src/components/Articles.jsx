import React from "react";

const Articles = () => {
  const articles = [
    {
      author: "Joel Khalili",
      title:
        "Peter Todd Was ‘Unmasked’ As Bitcoin Creator Satoshi Nakamoto. Now He’s In Hiding",
      description:
        "Peter Todd has gone underground after an HBO documentary named him as the creator of Bitcoin, Satoshi Nakamoto, whose real identity has long remained a mystery.",
      url: "https://www.wired.com/story/peter-todd-was-unmasked-as-bitcoin-creator-satoshi-nakamoto-now-hes-in-hiding/",
      urlToImage:
        "https://media.wired.com/photos/6716870e6874cb5feda0798e/191:100/w_1280,c_limit/102124-bitcoin-satoshi-an.jpg",
      publishedAt: "2024-10-22T11:33:59Z",
    },
    {
      author: "Andy Greenberg",
      title:
        "Meet ZachXBT, the Masked Vigilante Tracking Down Billions in Crypto Scams and Thefts",
      description:
        "He just untangled a $243 million bitcoin theft, what may be the biggest-ever crypto heist to target a single victim. And he has never shown his face.",
      url: "https://www.wired.com/story/meet-zachxbt-243-million-crypto-theft/",
      urlToImage:
        "https://media.wired.com/photos/671803d2124551b4eaed68ad/191:100/w_1280,c_limit/security_zachxbt_crypto_vigilante.jpg",
      publishedAt: "2024-10-24T09:00:00Z",
    },
    {
      author: "Joel Khalili",
      title: "As Trump Takes a Victory Lap, the Crypto Faithful Kiss the Ring",
      description:
        "The crypto industry is celebrating the return of Donald Trump to the White House in anticipation of an easier ride under his regime.",
      url: "https://www.wired.com/story/trump-crypto-support/",
      urlToImage:
        "https://media.wired.com/photos/672bda0a90a94384370310f4/191:100/w_1280,c_limit/business_crypto_faithful_trump.jpg",
      publishedAt: "2024-11-06T21:11:39Z",
    },
    {
      author: "Joel Khalili",
      title: "As Trump Takes a Victory Lap, the Crypto Faithful Kiss the Ring",
      description:
        "The crypto industry is celebrating the return of Donald Trump to the White House in anticipation of an easier ride under his regime.",
      url: "https://www.wired.com/story/trump-crypto-support/",
      urlToImage:
        "https://media.wired.com/photos/672bda0a90a94384370310f4/191:100/w_1280,c_limit/business_crypto_faithful_trump.jpg",
      publishedAt: "2024-11-06T21:11:39Z",
    },
    {
      author: "Joel Khalili",
      title: "As Trump Takes a Victory Lap, the Crypto Faithful Kiss the Ring",
      description:
        "The crypto industry is celebrating the return of Donald Trump to the White House in anticipation of an easier ride under his regime.",
      url: "https://www.wired.com/story/trump-crypto-support/",
      urlToImage:
        "https://media.wired.com/photos/672bda0a90a94384370310f4/191:100/w_1280,c_limit/business_crypto_faithful_trump.jpg",
      publishedAt: "2024-11-06T21:11:39Z",
    },
    {
      author: "Joel Khalili",
      title: "As Trump Takes a Victory Lap, the Crypto Faithful Kiss the Ring",
      description:
        "The crypto industry is celebrating the return of Donald Trump to the White House in anticipation of an easier ride under his regime.",
      url: "https://www.wired.com/story/trump-crypto-support/",
      urlToImage:
        "https://media.wired.com/photos/672bda0a90a94384370310f4/191:100/w_1280,c_limit/business_crypto_faithful_trump.jpg",
      publishedAt: "2024-11-06T21:11:39Z",
    },
    {
      author: "Joel Khalili",
      title: "As Trump Takes a Victory Lap, the Crypto Faithful Kiss the Ring",
      description:
        "The crypto industry is celebrating the return of Donald Trump to the White House in anticipation of an easier ride under his regime.",
      url: "https://www.wired.com/story/trump-crypto-support/",
      urlToImage:
        "https://media.wired.com/photos/672bda0a90a94384370310f4/191:100/w_1280,c_limit/business_crypto_faithful_trump.jpg",
      publishedAt: "2024-11-06T21:11:39Z",
    },
  ];

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

        {/* Articles List */}
        <div className="flex justify-center gap-1 items-center mt-10 min-h-screen p-4">
          <div className="w-full max-w-lg lg:max-w-4xl">
            {articles.map((article, index) => (
              <div
                key={index}
                className="rounded-sm shadow-custom box-border flex flex-col lg:flex-row gap-4 font-light h-full mb-5 mx-auto px-2 py-2 relative w-full"
              >
                {/* Left column: Image */}
                <div className="w-full lg:w-1/3 flex-shrink-0 mb-4 lg:mb-0">
                  <img
                    src={article.urlToImage}
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
                    <p className="mt-2 text-gray-600">{article.description}</p>
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
