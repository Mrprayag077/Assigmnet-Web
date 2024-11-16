import axios from "axios";

// Function to fetch top headlines, optionally filtered by category
export const fetchTopHeadlines = async (category = "") => {
  const API_URL = category
    ? `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7515284b44a1404a9a0ff5de260b0f02`
    : "https://newsapi.org/v2/top-headlines?country=us&apiKey=7515284b44a1404a9a0ff5de260b0f02"; // Default to US if no category

  try {
    // const response = await axios.get(API_URL);
    // NOT ALBE TO FETCH REPSOSNE WHEN HSOTED ON VERCEL THAT'S WHY ADDED TH EDUMMY DATA, BUT api works in localHost
    const response = {
      status: "ok",
      totalResults: 66,
      articles: [
       
        {
          source: {
            id: "the-washington-post",
            name: "The Washington Post",
          },
          author: "Andrew Jeong",
          title:
            "Surge in worldwide measles cases driven by lack of vaccine coverage, WHO says - The Washington Post",
          description:
            "The WHO and CDC say there were about 10.3 million cases of measles last year, up 20 percent from 2022. Children are especially susceptible to complications.",
          url: "https://www.washingtonpost.com/health/2024/11/15/measles-vaccine-immunization-cdc-rfk/",
          urlToImage:
            "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WLLDNHUDDDPWGNHBSQBM7X6QSY_size-normalized.jpg&w=1440",
          publishedAt: "2024-11-15T12:26:57Z",
          content:
            "An estimated 10.3 million cases of measles occurred worldwide last year, up 20 percent from 2022, primarily because of inadequate immunization coverage, the World Health Organization and the U.S. Cen… [+386 chars]",
        },
        {
          source: {
            id: null,
            name: "[Removed]",
          },
          author: null,
          title: "[Removed]",
          description: "[Removed]",
          url: "https://removed.com",
          urlToImage: null,
          publishedAt: "2024-11-15T11:45:43Z",
          content: "[Removed]",
        },
        {
          source: {
            id: null,
            name: "ScienceAlert",
          },
          author: "The Conversation",
          title:
            "Not Just Weight Loss: 8 Conditions Drugs Like Wegovy Might Treat - ScienceAlert",
          description:
            "The weight-loss jab Wegovy made its debut on June 4 2021.",
          url: "https://www.sciencealert.com/not-just-weight-loss-8-conditions-drugs-like-wegovy-might-treat",
          urlToImage:
            "https://www.sciencealert.com/images/2024/11/weight_loss_inject_pen.jpg",
          publishedAt: "2024-11-15T04:30:37Z",
          content:
            "The weight-loss jab Wegovy made its debut on June 4 2021. It was the first new weight-loss drug to be approved by the US Food and Drug Administration since 2014.\r\nThere has been a lot of excitement s… [+6920 chars]",
        },
        {
          source: {
            id: null,
            name: "Gloucestershire Live",
          },
          author: "Ben Hurst",
          title:
            "Professor Tim Spector says blood pressure reduced by three surprise foods - Gloucestershire Live",
          description:
            "Nutrition expert said study had showed eating marmite, crisps and even Bombay mix could help with hypertension",
          url: "https://www.gloucestershirelive.co.uk/news/health/professor-tim-spector-says-blood-9715583",
          urlToImage:
            "https://i2-prod.gloucestershirelive.co.uk/incoming/article9715602.ece/ALTERNATES/s1200/0_spect6PNG.png",
          publishedAt: "2024-11-15T02:17:00Z",
          content:
            "Professor Tim Spector has spoken about how marmite could be a major factor in lowering blood pressure. And he added that a number of surprising foods also contain a key nutrient which could help with… [+2899 chars]",
        },
        {
          source: {
            id: "the-washington-post",
            name: "The Washington Post",
          },
          author: "Emily Codik",
          title:
            "Perimenopause, standing desks and service dogs: The week in Well+Being - The Washington Post",
          description:
            "Plus, how to lower your risk of developing Parkinson’s disease.",
          url: "https://www.washingtonpost.com/wellness/2024/11/14/perimenopause-standing-desks-service-dogs/",
          urlToImage:
            "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/N6IQ5FREKFGADMYPUM3OAAT4S4.jpg&w=1440",
          publishedAt: "2024-11-15T01:31:40Z",
          content:
            "Happy Thursday! This week, were writing about standing desks, service dogs and how exercise can reduce your risk of developing Parkinsons disease. Plus, weve got our weekly joy snack. But before that… [+381 chars]",
        },
        {
          source: {
            id: null,
            name: "The Mercury News",
          },
          author: "Nollyanne Delacruz",
          title:
            "Invasive mosquitoes found in six places in Santa Clara County - The Mercury News",
          description:
            "The Aedes aegypti mosquito is an non-native species of mosquito that is known for aggressive biting during the day and can transmit several different diseases. Most recently, it was found in San Jo…",
          url: "https://www.mercurynews.com/2024/11/14/invasive-mosquitoes-found-in-six-places-in-santa-clara-county/",
          urlToImage:
            "https://www.mercurynews.com/wp-content/uploads/2024/10/LDN-L-MOSQUITOS-0510-01.jpg?w=1024&h=682",
          publishedAt: "2024-11-14T23:59:23Z",
          content:
            "Santa Clara County officials announced Thursday that an invasive breed of mosquito had been found in a fourth location in San Jose, according to a press release.\r\nThe Aedes aegypti mosquito is an non… [+4066 chars]",
        },
        {
          source: {
            id: "fortune",
            name: "Fortune",
          },
          author: "Ani Freedman",
          title:
            "Walking more could add as much as 11 years to your life, study says. Here’s how - Fortune",
          description:
            "Most Americans aren’t hitting recommended exercise per week—but doing more could mean a longer life.",
          url: "https://fortune.com/well/article/walking-to-live-longer/",
          urlToImage:
            "https://fortune.com/img-assets/wp-content/uploads/2024/11/GettyImages-1792762989-e1731623642500.jpg?resize=1200,600",
          publishedAt: "2024-11-14T23:33:49Z",
          content:
            "Everyone has a different relationship with exercise. You might be a fitness junkie, hitting the gym five days a week or training for a marathon to push your bodys limits. But for most Americans, phys… [+4450 chars]",
        },
        {
          source: {
            id: null,
            name: "KSDK.com",
          },
          author: "Sam Clancy",
          title:
            "19 E. coli infections reported after off-campus event for Rockwood High School - KSDK.com",
          description:
            "The email said it was all connected to food eaten at an end-of-season event.",
          url: "https://www.ksdk.com/article/news/health/rockwood-summit-high-school-e-coli-cases/63-66f09035-4d75-4b44-84ea-13e9e6b1dd10",
          urlToImage:
            "https://media.ksdk.com/assets/KSDK/images/ab384559-822a-4b7e-b02c-784c2026a4aa/ab384559-822a-4b7e-b02c-784c2026a4aa_1140x641.jpg",
          publishedAt: "2024-11-14T22:47:13Z",
          content:
            "ST. LOUIS COUNTY, Mo. Rockwood Summit High School underwent a deep clean overnight after multiple cases of suspected E. coli infections following an off-campus school event last week.\r\nIn an email se… [+2147 chars]",
        },
        {
          source: {
            id: null,
            name: "KQED",
          },
          author: "Carly Severn",
          title:
            "Whooping Cough Is Soaring in the Bay Area. Here’s How to Get Vaccines - KQED",
          description:
            "Cases of whooping cough, which largely affects young children and infants, are on the rise, particularly in Marin County. Low vaccination rates are likely playing a part.",
          url: "https://www.kqed.org/news/12014470/whooping-cough-is-soaring-in-the-bay-area-heres-how-to-get-vaccines",
          urlToImage:
            "https://cdn.kqed.org/wp-content/uploads/sites/10/2024/11/WhoopingCoughGetty-1020x680.jpg",
          publishedAt: "2024-11-14T22:45:22Z",
          content:
            "In San Francisco, there have been 84 reported cases this year, a massive increase considering there was only one reported case in all of 2023.\r\n“It’s entirely possible that a lot of the rise that we’… [+5125 chars]",
        },
        {
          source: {
            id: null,
            name: "KMPH Fox 26",
          },
          author: "Stephen Hawkins",
          title:
            "Human cases of bird flu confirmed in Madera County related to sick dairy cattle - KMPH Fox 26",
          description:
            "The Madera County Department of Public Health working with state and federal health agencies has identified two human cases of H5N1 bird flu.One of the cases h",
          url: "https://kmph.com/news/local/human-cases-of-bird-flu-confirmed-in-madera-county-h5n1-department-of-public-health-infected-dairy-cattle-cdc-personal-protective-equipment-ppe",
          urlToImage:
            "https://kmph.com/resources/media/4070f94f-a28d-4b64-aa93-5b79e3b55a6c-large16x9_AP24151637938573.jpg",
          publishedAt: "2024-11-14T21:53:43Z",
          content:
            "MADERA, Calif. (FOX26) The Madera County Department of Public Health working with state and federal health agencies has identified two human cases of H5N1 bird flu.\r\nOne of the cases has been confirm… [+1845 chars]",
        },
        {
          source: {
            id: null,
            name: "Medical Xpress",
          },
          author: "Salk Institute",
          title:
            "Cholesterol may not be the only lipid involved in trans fat-driven cardiovascular disease - Medical Xpress",
          description:
            "Excess cholesterol is known to form artery-clogging plaques that can lead to stroke, arterial disease, heart attack, and more, making it the focus of many heart health campaigns. Fortunately, this attention to cholesterol has prompted the development of chole…",
          url: "https://medicalxpress.com/news/2024-11-cholesterol-lipid-involved-trans-fat.html",
          urlToImage:
            "https://scx2.b-cdn.net/gfx/news/2024/cholesterol-is-not-the.jpg",
          publishedAt: "2024-11-14T21:09:05Z",
          content:
            "Excess cholesterol is known to form artery-clogging plaques that can lead to stroke, arterial disease, heart attack, and more, making it the focus of many heart health campaigns. Fortunately, this at… [+7391 chars]",
        },
        {
          source: {
            id: null,
            name: "Thedebrief.org",
          },
          author: "Kenna Hughes-Castleberry, Kenna Hughes-Castleberry",
          title:
            "Scientists Have Created a New App That Could Help Users Reduce Negative Thoughts - The Debrief",
          description:
            "Scientists at Harvard University have developed an app that focuses on breaking cycles of negative thoughts that contribute to depression.",
          url: "https://thedebrief.org/scientists-have-created-a-new-app-that-could-help-users-reduce-negative-thoughts/",
          urlToImage:
            "https://thedebrief.b-cdn.net/wp-content/uploads/2024/11/negative-thoughts.jpg",
          publishedAt: "2024-11-14T21:07:53Z",
          content:
            "Could mobile gaming reduce someones depression symptoms by reducing negative thoughts? A new study published in the Journal of Medical Internet Research suggests that it can, as long as it involves t… [+4495 chars]",
        },
        {
          source: {
            id: null,
            name: "Medical Xpress",
          },
          author: "Wayne Gillam",
          title:
            "New lens system for endoscopes could allow physicians to see inside the body like never before - Medical Xpress",
          description:
            "The human body contains a vast, complex, and interconnected web of organic tunnels and passageways that weave their way through the cardiovascular, respiratory, and digestive systems. For physicians, reaching into this maze of arteries, bronchial tubes, and g…",
          url: "https://medicalxpress.com/news/2024-11-lens-endoscopes-physicians-body.html",
          urlToImage:
            "https://scx2.b-cdn.net/gfx/news/2024/new-lens-system-for-en.jpg",
          publishedAt: "2024-11-14T20:46:12Z",
          content:
            "The human body contains a vast, complex, and interconnected web of organic tunnels and passageways that weave their way through the cardiovascular, respiratory, and digestive systems. For physicians,… [+7313 chars]",
        },
        {
          source: {
            id: "reuters",
            name: "Reuters",
          },
          author: "Jennifer Rigby, Julie Steenhuysen",
          title:
            "Many long COVID patients adjust to slim recovery odds as world moves on - Reuters",
          description:
            "There are certain phrases that Wachuka Gichohi finds difficult to hear after enduring four years of living with long COVID, marked by debilitating fatigue, pain, panic attacks and other symptoms so severe she feared she would die overnight.",
          url: "https://www.reuters.com/business/healthcare-pharmaceuticals/many-long-covid-patients-adjust-slim-recovery-odds-world-moves-2024-11-14/",
          urlToImage:
            "https://www.reuters.com/resizer/v2/PMBHNFRXP5ODLDTB6VJR6I4QJ4.jpg?auth=390f8e48d2aae7d7d311c29db5aee4af9d3d577a630c5e566f22e98be1518afc&height=1005&width=1920&quality=80&smart=true",
          publishedAt: "2024-11-14T20:28:26Z",
          content: null,
        },
        {
          source: {
            id: null,
            name: "Harvard School of Engineering and Applied Sciences",
          },
          author: "Anna Lamb",
          title: "Is cheese bad for you? - Harvard Gazette",
          description:
            "Harvard professor of epidemiology and nutrition explains why most Americans are probably eating way too much.",
          url: "https://news.harvard.edu/gazette/story/2024/11/is-cheese-bad-for-you/",
          urlToImage:
            "https://news.harvard.edu/wp-content/uploads/2024/11/cheese-thumbnail-min.png",
          publishedAt: "2024-11-14T20:12:47Z",
          content:
            "A series of random questions answered by Harvard experts.\r\nThe average American consumes 41.8 pounds of cheese per year. We asked Harvard Chan School nutritionist Walter C. Willett about the health i… [+4038 chars]",
        },
        {
          source: {
            id: "national-geographic",
            name: "National Geographic",
          },
          author: "Elizabeth Anne Brown",
          title:
            "Why are women more disgusted than men? It may help them live longer - National Geographic",
          description:
            'In primates ranging from gorillas to macaques to people, females are more likely to get "the ick"—and researchers think there\'s a surprising benefit.',
          url: "https://www.nationalgeographic.com/science/article/women-disgust-men-longevity",
          urlToImage:
            "https://i.natgeofe.com/n/4d6af169-4fca-41ef-a0d8-a166de0a6017/shutterstock_2302134557_16x9.jpg?w=1200",
          publishedAt: "2024-11-14T19:30:45Z",
          content:
            "Then theres no avoidance for anyone. Its too high value, Sarabian says. \r\nStudying disgust in humans requires a little more subtletyits frowned upon to offer food with poop on it to people, even in a… [+907 chars]",
        },
        {
          source: {
            id: null,
            name: "Real Simple",
          },
          author: "https://www.facebook.com/realsimple/",
          title:
            "7 Healthiest Fish You Should Eat More Of, According to RDs - Real Simple",
          description:
            "Discover the 7 healthiest fish to eat, because the variety you buy matters. Some of the healthiest fish you can purchase include salmon, anchovies, and more.",
          url: "https://www.realsimple.com/healthiest-fish-to-eat-8745384",
          urlToImage:
            "https://www.realsimple.com/thmb/0MMs023quPZm5JpzNne_73cOiW4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/healthiest-fish-you-should-eat-more-of-GettyImages-1407311574-16d69e92cebd4663a6e108cbde0da4d6.jpg",
          publishedAt: "2024-11-14T19:03:00Z",
          content:
            "A common recommendation among healthcare professionals (and mainstream health media) is to eat more fish. But with the sheer amount of seafood options available, making a purchasing decision can be t… [+8503 chars]",
        },
        {
          source: {
            id: null,
            name: "KSL.com",
          },
          author: "UtahRadon.org",
          title:
            "Study links gas commonly found in Utah homes to childhood leukemia - KSL.com",
          description:
            "A recent study from Oregon State University found a link between exposure to radon gas and childhood leukemia rates.",
          url: "https://www.ksl.com/article/51185372/study-links-gas-commonly-found-in-utah-homes-to-childhood-leukemia",
          urlToImage:
            "https://img.ksl.com/slc/3024/302462/30246247.jpeg?filter=kslv2/responsive_story_lg",
          publishedAt: "2024-11-14T18:33:53Z",
          content:
            "Radon gas linked to childhood leukemia\r\nA recent 18-year, 700-plus county study from Oregon State University found a link between exposure to radon gas and childhood leukemia rates. The study, a coll… [+3454 chars]",
        },
        {
          source: {
            id: null,
            name: "Live Science",
          },
          author: "Stephanie Pappas",
          title:
            "Teen sickened with Canada's first human case of bird flu is in critical condition — and the source remains a mystery - Livescience.com",
          description:
            "A teenager in Canada is critically ill with the country's first human case of H5N1 bird flu. Health officials aren't sure how the youth was exposed.",
          url: "https://www.livescience.com/health/viruses-infections-disease/teen-sickened-with-canadas-first-human-case-of-bird-flu-is-in-critical-condition-and-the-source-remains-a-mystery",
          urlToImage:
            "https://cdn.mos.cms.futurecdn.net/cr4kPPGfGnT9dC6y8b4rw7-1200-80.jpg",
          publishedAt: "2024-11-14T17:44:27Z",
          content:
            "A teenager in Canada is critically ill with the first human case of H5N1 bird flu contracted in the country, and public health officials aren't sure how the youth was exposed.\r\nThe teen had no known … [+3091 chars]",
        },
      ],
    };
    console.log( response.data);
    return response.articles;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    throw error;
  }
};
