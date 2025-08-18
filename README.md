# otterly_frontend_app

# 1. Backend

## API

## 1. **Get All Prompts**

**Method:** `GET`  
**URL:** `https://<host>/prompts`

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `200`

```json
{
  "prompts": [
    {
      "id": "01JAT7NPPVS4D3VNSSPEMTGR15",
      "prompt": "How to brew coffee?",
      "country": "us",
      "createdDate": "2024-10-20T21:02:00.046Z",
      "lastFinishedRunDate": "2024-10-20T21:04:00.046Z",
      "searchVolume": 100500,
      "brands": ["brand1", "brand2"],
      "brandReports": [
        {
          "reportId": "123",
          "brand": "Nike",
          "brandDomain": "nike.com"
        }
      ]
    },
    {
      "id": "01JAT7NXBJ2T98704F7ESP9TTR",
      "prompt": "What is the best electric car in 2024?",
      "country": "de",
      "createdDate": "2024-10-20T21:02:00.046Z"
    },
    {
      "id": "01JAT7P34KPAKGCNXJ0FD0FXS5",
      "prompt": "What is the best CMS in 2024?",
      "country": "us",
      "createdDate": "2024-10-20T21:02:00.046Z"
    }
  ]
}
```

## 2. **Create a New Prompt**

**Method:** `POST`  
**URL:** `https://<host>/prompts`

### Request Parameters

| **Property** | **Mandatory** | **Default** |
| ------------ | ------------- | ----------- |
| prompt       | yes           |             |
| country      | yes           |             |

### Headers

- Content-Type: `application/json`
- Authorization: `Bearer <JWT>`

### Request Body

```json
{
  "prompt": "What is the best project management software?",
  "country": "us"
}
```

### Response

**Status:** `201`

```json
{
  "id": "01JAT73C69J1GYAHT917MDCPB0",
  "prompt": "How to brew coffee?",
  "createdDate": "2024-10-21T21:02:00.046Z"
}
```

## 3. **Delete a Prompt**

**Method:** `DELETE`  
**URL:** `https://<host>/prompts/{id}`

### Path Parameters

| **Parameter** | **Description**            |
| ------------- | -------------------------- |
| id            | ID of the prompt to delete |

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `204 No Content`

## 4. **Get Prompt Status**

**Method:** `GET`  
**URL:** `https://<host>/prompts/{id}/statuses`

### Path Parameters

| **Parameter** | **Description**  |
| ------------- | ---------------- |
| id            | ID of the prompt |

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `200 OK`

```json
{
  "id": "01JAT73C69J1GYAHT917MDCPB0",
  "state": "running|finished|error"
}
```

## 5. **Get a Specific Prompt**

**Method:** `GET`  
**URL:** `https://<host>/prompts/{prompt_id}`

### Path Parameters

| **Parameter** | **Description**  |
| ------------- | ---------------- |
| prompt_id     | ID of the prompt |

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `200 OK`

```json
{
  "id": "01JAT7P34KPAKGCNXJ0FD0FXS5",
  "prompt": "What is the best CMS in 2024?",
  "data": [
    {
      "runId": "1bcdf654-c221-46b5-8a5a-747a5110c061",
      "runDate": "2024-10-09T22:11:41.923Z",
      "data": [
        {
          "service": "perplexity",
          "overviewAvailable": true,
          "content": "Based on the search results, there are several top content management systems (CMS) in 2024, each with its own strengths and ideal use cases. Here's an overview of some of the best CMS platforms:\nWordPress\nWordPress remains the most popular CMS, powering over 43% of all websites on the internet [1](https://www.hostinger.com/tutorials/best-cms) [5](https://www.wpbeginner.com/showcase/best-cms-platforms-compared/). It's highly versatile and suitable for most website types, from blogs to eCommerce sites. WordPress offers:\n\n58,000+ plugins for extended functionality\nCustomizable themes\nSEO-friendly features\nFree core software with hosting starting from $2.99/month [1](https://www.hostinger.com/tutorials/best-cms)\n\nHubSpot CMS\nHubSpot CMS is a powerful option that integrates with HubSpot's suite of marketing and sales tools [2](https://prismic.io/blog/website-cms-platforms) [5](https://www.wpbeginner.com/showcase/best-cms-platforms-compared/). It's particularly well-suited for businesses looking for an all-in-one solution. Key features include:\n\nDrag-and-drop editor\nContent optimization tools\nAI content assistant\nPersonalization capabilities\nSeamless integration with CRM and marketing automation\n\nContentful\nContentful is considered the gold standard for enterprise-level content management [3](https://www.webstacks.com/blog/enterprise-cms-platforms). It's a headless CMS that offers:\n\nReal-time collaboration\nPortable text editor\nCustomizable content schemas\nFlexibility for developers\nIdeal for eCommerce, mobile apps, and marketing sites\n\nJoomla\nJoomla is an excellent choice for multilingual websites and complex site structures [1](https://www.hostinger.com/tutorials/best-cms). It offers:\n\nBuilt-in multilingual support\nAdvanced user management tools\nBanner management features\nFree core software with hosting starting from $3.99/month\n\nDrupal\nDrupal is known for its power and security, making it ideal for large-scale websites [1](https://www.hostinger.com/tutorials/best-cms) [5](https://www.wpbeginner.com/showcase/best-cms-platforms-compared/). It provides:\n\nExcellent performance for high-traffic sites\nAdvanced content management features\nFlexible customization options for developers\nStrong security features\n\nThe best CMS for you will depend on your specific needs, technical expertise, and project requirements. WordPress is a versatile option suitable for many use cases, while HubSpot CMS is great for businesses seeking integrated marketing tools. For enterprises requiring a headless CMS, Contentful is a top choice. Joomla excels in multilingual support, and Drupal is ideal for large, complex websites requiring robust security.",
          "sources": [
            {
              "title": "1. 10+ best CMS platforms in 2024 (compared) - Hostinger",
              "link": "https://www.hostinger.com/tutorials/best-cms",
              "rank": 1
            },
            {
              "title": "2. 20 Best Website CMS Platforms in 2024 - Prismic",
              "link": "https://prismic.io/blog/website-cms-platforms",
              "rank": 2
            },
            {
              "title": "3. The 12 Best Enterprise CMS Platforms in 2024 - Webstacks",
              "link": "https://www.webstacks.com/blog/enterprise-cms-platforms",
              "rank": 3
            },
            {
              "title": "4. The 9 Best Content Management Systems of 2024 - Siege Media",
              "link": "https://www.siegemedia.com/creation/best-content-management-systems",
              "rank": 4
            },
            {
              "title": "5. 15 Best and Most Popular CMS Platforms in 2024 (Compared)",
              "link": "https://www.wpbeginner.com/showcase/best-cms-platforms-compared/",
              "rank": 5
            },
            {
              "title": "6. Best CMS solution in 2024 : r/Web_Development - Reddit",
              "link": "https://www.reddit.com/r/Web_Development/comments/1dp4vi2/best_cms_solution_in_2024/",
              "rank": 6
            },
            {
              "title": "7. Which is the best CMS in 2024? - GroRapid Labs",
              "link": "https://www.grorapidlabs.com/blog/which-is-the-best-cms-in-2024",
              "rank": 7
            },
            {
              "title": "8. Best CMS of 2024 - TechRadar",
              "link": "https://www.techradar.com/best/cms",
              "rank": 8
            }
          ],
          "snapshotUrl": "https://otterly-cdn.s3.us-east-1.amazonaws.com/snapshots/perplexity/qrSjGMitahncLqn6d.png",
          "meta": [
            {
              "name": "WordPress",
              "positionInText": 5,
              "sentiment": {
                "positive": [
                  "Remains the most popular CMS, powering over 43% of all websites on the internet",
                  "Highly versatile and suitable for a variety of website types",
                  "Offers 58,000+ plugins for extended functionality",
                  "SEO-friendly features"
                ],
                "neutral": [
                  "Free core software with hosting starting from $2.99/month"
                ],
                "negative": []
              }
            },
            {
              "name": "HubSpot",
              "positionInText": 22,
              "sentiment": {
                "positive": [
                  "Powerful option that integrates with HubSpot's suite of marketing and sales tools",
                  "Well-suited for businesses looking for an all-in-one solution",
                  "Seamless integration with CRM and marketing automation"
                ],
                "neutral": [],
                "negative": []
              }
            },
            {
              "name": "Contentful",
              "positionInText": 35,
              "sentiment": {
                "positive": [
                  "Considered the gold standard for enterprise-level content management",
                  "Real-time collaboration",
                  "Flexibility for developers",
                  "Ideal for eCommerce, mobile apps, and marketing sites"
                ],
                "neutral": [],
                "negative": []
              }
            },
            {
              "name": "Joomla",
              "positionInText": 49,
              "sentiment": {
                "positive": [
                  "Excellent choice for multilingual websites and complex site structures",
                  "Advanced user management tools",
                  "Built-in multilingual support"
                ],
                "neutral": ["Banner management features"],
                "negative": []
              }
            },
            {
              "name": "Drupal",
              "positionInText": 61,
              "sentiment": {
                "positive": [
                  "Known for its power and security, making it ideal for large-scale websites",
                  "Excellent performance for high-traffic sites",
                  "Advanced content management features",
                  "Strong security features"
                ],
                "neutral": [],
                "negative": []
              }
            }
          ]
        },
        {
          "service": "google",
          "overviewAvailable": true,
          "content": "Some of the best content management systems (CMS) in 2024 include:  10+ best CMS platforms in 2024 (compared) - HostingerHostinger [3](https://www.hostinger.com/tutorials/best-cms)What's the Best CMS for SEO? (New 2024 Data)Jan 17, 2024 — 1. WordPress. Unsurprisingly, WordPress usage keeps growing among top websites in Google. It's the best CMS because it...Gotch SEO [5](https://www.gotchseo.com/best-cms-for-seo/#:~:text=1.,Here's%20the%20complete%20list:)5 Best and Most Popular CMS Platforms in 2024 - Content WhaleMay 12, 2024 — 2. Research Different CMS Options. Explore the top 5 CMS platforms to understand what each offers. Look into WordPress...Content Whale [7](https://content-whale.com/blog/top-5-cms-platforms/#:~:text=e%2Dcommerce%20capabilities.-,2.,flexibility%20across%20multiple%20display%20platforms.)   WordPress A versatile platform with strong community support that's built for SEO and is easy to use. It's used by many top websites and is the most popular CMS, with 47.3% of the market share.  10+ best CMS platforms in 2024 (compared) - HostingerHostinger [3](https://www.hostinger.com/tutorials/best-cms)What's the Best CMS for SEO? (New 2024 Data)Jan 17, 2024 — 1. WordPress. Unsurprisingly, WordPress usage keeps growing among top websites in Google. It's the best CMS because it...Gotch SEO [5](https://www.gotchseo.com/best-cms-for-seo/#:~:text=1.,Here's%20the%20complete%20list:)5 Best and Most Popular CMS Platforms in 2024 - Content WhaleMay 12, 2024 — 2. Research Different CMS Options. Explore the top 5 CMS platforms to understand what each offers. Look into WordPress...Content Whale [7](https://content-whale.com/blog/top-5-cms-platforms/#:~:text=e%2Dcommerce%20capabilities.-,2.,flexibility%20across%20multiple%20display%20platforms.)CMS Market Share 2024 - Latest Trends and Usage StatisticsAug 13, 2024 — WordPress dominates content management platforms, holding 47.3% of the market, while Drupal follows with a 4.7% share,Codexpert [8](https://codexpert.io/cms-market-share/#:~:text=WordPress%20dominates%20content%20management%20platforms,increase%20from%202016%20to%202023.)Joomla A good choice for multilingual websites and complex site structures. It offers advanced security and customizability, but it has a steep learning curve and can be difficult to navigate.  20 Best Website CMS Platforms in 2024 - PrismicMar 14, 2024 — Security: Joomla has a Security Strike Team that constantly releases security patches and ensures the platform is as s...Prismic [1](https://prismic.io/blog/website-cms-platforms#:~:text=Security:%20Joomla%20has%20a%20Security,layouts%20without%20any%20coding%20knowledge.)10+ best CMS platforms in 2024 (compared) - HostingerHostinger [3](https://www.hostinger.com/tutorials/best-cms)5 Best and Most Popular CMS Platforms in 2024 - Content WhaleMay 12, 2024 — 2. Research Different CMS Options. Explore the top 5 CMS platforms to understand what each offers. Look into WordPress...Content Whale [7](https://content-whale.com/blog/top-5-cms-platforms/#:~:text=e%2Dcommerce%20capabilities.-,2.,flexibility%20across%20multiple%20display%20platforms.)Drupal A good choice for large-scale websites and more experienced developers. It offers advanced security and customizability.  10+ best CMS platforms in 2024 (compared) - HostingerHostinger [3](https://www.hostinger.com/tutorials/best-cms)5 Best and Most Popular CMS Platforms in 2024 - Content WhaleMay 12, 2024 — 2. Research Different CMS Options. Explore the top 5 CMS platforms to understand what each offers. Look into WordPress...Content Whale [7](https://content-whale.com/blog/top-5-cms-platforms/#:~:text=e%2Dcommerce%20capabilities.-,2.,flexibility%20across%20multiple%20display%20platforms.)Shopify A good choice if your focus is on selling products.  5 Best and Most Popular CMS Platforms in 2024 - Content WhaleMay 12, 2024 — 2. Research Different CMS Options. Explore the top 5 CMS platforms to understand what each offers. Look into WordPress...Content Whale [7](https://content-whale.com/blog/top-5-cms-platforms/#:~:text=e%2Dcommerce%20capabilities.-,2.,flexibility%20across%20multiple%20display%20platforms.)Wix The fastest-growing CMS, with an 800% market share increase from 2016 to 2023.  CMS Market Share 2024 - Latest Trends and Usage StatisticsAug 13, 2024 — WordPress dominates content management platforms, holding 47.3% of the market, while Drupal follows with a 4.7% share,Codexpert [8](https://codexpert.io/cms-market-share/#:~:text=WordPress%20dominates%20content%20management%20platforms,increase%20from%202016%20to%202023.)Hygraph An API-first platform that's designed for content federation, allowing enterprises to pull data from multiple sources into one central hub.  The 12 Best Enterprise CMS Platforms in 2024 - WebstacksApr 15, 2024 — Hygraph stands out as a fully GraphQL-native CMS designed for content federation, giving enterprises the ability to pu...Webstacks [4](https://www.webstacks.com/blog/enterprise-cms-platforms#:~:text=Hygraph%20stands%20out%20as%20a,intricate%2C%20multi%2Dplatform%20needs.)Ghost A minimalist CMS designed for blogging and publishing. It has a simple and fast interface, built-in SEO tools, and membership and subscription options.  10+ best CMS platforms in 2024 (compared) - Hostinger9. Ghost. ... Ghost is a minimalist CMS designed specifically for blogging and publishing. Its simple and fast interface helps con...Hostinger [6](https://www.hostinger.co.uk/tutorials/best-cms#:~:text=&text=Ghost%20is%20a%20minimalist%20CMS,and%20optimized%20for%20search%20engines)HubSpot CMS A powerful CMS that integrates your website with customer relationship management (CRM), marketing automation, and other marketing tools. It has a user-friendly drag-and-drop editor.  20 Best Website CMS Platforms in 2024 - PrismicMar 14, 2024 — Security: Joomla has a Security Strike Team that constantly releases security patches and ensures the platform is as s...Prismic [1](https://prismic.io/blog/website-cms-platforms#:~:text=Security:%20Joomla%20has%20a%20Security,layouts%20without%20any%20coding%20knowledge.)Weebly An easy-to-use CMS that lets you set up a simple website within minutes. It uses a drag-and-drop format, so you can add features and media to your website easily.  Best CMS of 2024 - TechRadarMay 10, 2024 — 4. Weebly. Easy to use CMS to build a website in minutes. Our expert review: Today's Best Deals. Weebly Starter. $10. TechRadar [2](https://www.techradar.com/best/cms#:~:text=4.,remove%20anything%20whenever%20you%20want.)20 Best Website CMS Platforms in 2024 - PrismicMar 14, 2024 — Security: Joomla has a Security Strike Team that constantly releases security patches and ensures the platform is as s...Prismic [1](https://prismic.io/blog/website-cms-platforms#:~:text=Security:%20Joomla%20has%20a%20Security,layouts%20without%20any%20coding%20knowledge.)Best CMS of 2024 - TechRadarMay 10, 2024 — 4. Weebly. Easy to use CMS to build a website in minutes. Our expert review: Today's Best Deals. Weebly Starter. $10. TechRadar [2](https://www.techradar.com/best/cms#:~:text=4.,remove%20anything%20whenever%20you%20want.)10+ best CMS platforms in 2024 (compared) - HostingerHostinger [3](https://www.hostinger.com/tutorials/best-cms)",
          "sources": [
            {
              "title": "",
              "link": "https://prismic.io/blog/website-cms-platforms#:~:text=Security:%20Joomla%20has%20a%20Security,layouts%20without%20any%20coding%20knowledge.",
              "rank": 1
            },
            {
              "title": "",
              "link": "https://www.techradar.com/best/cms#:~:text=4.,remove%20anything%20whenever%20you%20want.",
              "rank": 2
            },
            {
              "title": "",
              "link": "https://www.hostinger.com/tutorials/best-cms",
              "rank": 3
            },
            {
              "title": "",
              "link": "https://www.webstacks.com/blog/enterprise-cms-platforms#:~:text=Hygraph%20stands%20out%20as%20a,intricate%2C%20multi%2Dplatform%20needs.",
              "rank": 4
            },
            {
              "title": "",
              "link": "https://www.gotchseo.com/best-cms-for-seo/#:~:text=1.,Here's%20the%20complete%20list:",
              "rank": 5
            },
            {
              "title": "",
              "link": "https://www.hostinger.co.uk/tutorials/best-cms#:~:text=&text=Ghost%20is%20a%20minimalist%20CMS,and%20optimized%20for%20search%20engines",
              "rank": 6
            },
            {
              "title": "",
              "link": "https://content-whale.com/blog/top-5-cms-platforms/#:~:text=e%2Dcommerce%20capabilities.-,2.,flexibility%20across%20multiple%20display%20platforms.",
              "rank": 7
            },
            {
              "title": "",
              "link": "https://codexpert.io/cms-market-share/#:~:text=WordPress%20dominates%20content%20management%20platforms,increase%20from%202016%20to%202023.",
              "rank": 8
            }
          ],
          "snapshotUrl": "https://otterly-cdn.s3.us-east-1.amazonaws.com/snapshots/google/qrSjGMitahncLqn6d.png",
          "meta": [
            {
              "name": "WordPress",
              "positionInText": 251,
              "sentiment": {
                "positive": [
                  "Versatile platform with strong community support",
                  "Built for SEO",
                  "Easy to use",
                  "Most popular CMS with 47.3% of the market share",
                  "Usage keeps growing among top websites"
                ],
                "neutral": ["Mentions regarding market share and popularity"],
                "negative": []
              }
            },
            {
              "name": "Joomla",
              "positionInText": 1209,
              "sentiment": {
                "positive": [
                  "Good choice for multilingual websites and complex site structures",
                  "Offers advanced security and customizability"
                ],
                "neutral": [],
                "negative": [
                  "Steep learning curve",
                  "Can be difficult to navigate"
                ]
              }
            },
            {
              "name": "Drupal",
              "positionInText": 2254,
              "sentiment": {
                "positive": [
                  "Good choice for large-scale websites and experienced developers",
                  "Offers advanced security and customizability"
                ],
                "neutral": [],
                "negative": []
              }
            },
            {
              "name": "Shopify",
              "positionInText": 2486,
              "sentiment": {
                "positive": ["A good choice if focus is on selling products"],
                "neutral": [],
                "negative": []
              }
            },
            {
              "name": "Wix",
              "positionInText": 2636,
              "sentiment": {
                "positive": [
                  "Fastest-growing CMS with an 800% market share increase"
                ],
                "neutral": [],
                "negative": []
              }
            },
            {
              "name": "Hygraph",
              "positionInText": 2947,
              "sentiment": {
                "positive": [
                  "Designed for content federation",
                  "Allows enterprises to pull data from multiple sources"
                ],
                "neutral": [],
                "negative": []
              }
            },
            {
              "name": "Ghost",
              "positionInText": 3143,
              "sentiment": {
                "positive": [
                  "Minimalist CMS designed for blogging and publishing",
                  "Simple and fast interface",
                  "Built-in SEO tools and membership options"
                ],
                "neutral": [],
                "negative": []
              }
            },
            {
              "name": "HubSpot CMS",
              "positionInText": 3273,
              "sentiment": {
                "positive": [
                  "Integrates website with CRM and marketing tools",
                  "User-friendly drag-and-drop editor"
                ],
                "neutral": [],
                "negative": []
              }
            },
            {
              "name": "Weebly",
              "positionInText": 3526,
              "sentiment": {
                "positive": [
                  "Easy to use CMS",
                  "Drag-and-drop format to add features easily"
                ],
                "neutral": [],
                "negative": []
              }
            }
          ]
        },
        {
          "service": "chatgpt",
          "overviewAvailable": true,
          "content": "In 2024, the best CMS (Content Management System) for you depends on your needs:\n\nWordPress remains the most popular, powering over 40% of websites worldwide. It's highly customizable with a vast ecosystem of plugins and themes, making it versatile for blogs, business sites, and e-commerce with WooCommerce. It's a great choice if you want flexibility, but it may require some technical knowledge as your site grows​(\nBluehost\n)​(\nNeil Patel\n).\n\nWix is a top recommendation for beginners or users who need a quick and easy website setup. Its drag-and-drop interface and pre-made templates allow for fast, intuitive design. However, it lacks the scalability of WordPress for complex sites​(\nCloudzy\n)​(\nNeil Patel\n).\n\nShopify is the best option for e-commerce. It provides a user-friendly platform focused on selling online, with integrated payment systems and a variety of plugins tailored to retail​(\nCloudzy\n)​(\nNeil Patel\n).\n\nDrupal is excellent for large, content-heavy websites that require high performance and security. It's a more advanced CMS, suitable for developers or those needing strong content management at scale, though it has a steeper learning curve​(\nCloudzy\n).\n\nContentful is a popular headless CMS for fast, multi-platform content delivery, ideal for developers building dynamic websites and apps​(\nBluehost\n).\n\nEach of these platforms offers specific strengths, so your choice should reflect the complexity of your site, your technical expertise, and whether you prioritize design, e-commerce, or scalability.",
          "sources": [
            {
              "title": "Bluehost",
              "link": "https://www.bluehost.com/blog/best-cms-platforms-for-your-website/",
              "rank": 1
            },
            {
              "title": "Neil Patel",
              "link": "https://neilpatel.com/blog/best-content-management-systems/",
              "rank": 2
            },
            {
              "title": "Cloudzy",
              "link": "https://cloudzy.com/blog/best-cms/",
              "rank": 3
            }
          ],
          "snapshotUrl": "https://otterly-cdn.s3.us-east-1.amazonaws.com/snapshots/chatgpt/qrSjGMitahncLqn6d.png",
          "meta": [
            {
              "name": "WordPress",
              "positionInText": 17,
              "sentiment": {
                "positive": [
                  "Most popular CMS, powering over 40% of websites worldwide",
                  "Highly customizable with a vast ecosystem of plugins and themes",
                  "Versatile for blogs, business sites, and e-commerce"
                ],
                "neutral": [],
                "negative": [
                  "May require some technical knowledge as your site grows"
                ]
              }
            },
            {
              "name": "Wix",
              "positionInText": 178,
              "sentiment": {
                "positive": [
                  "Top recommendation for beginners",
                  "Drag-and-drop interface and pre-made templates make for fast, intuitive design"
                ],
                "neutral": [],
                "negative": ["Lacks scalability for complex sites"]
              }
            },
            {
              "name": "Shopify",
              "positionInText": 317,
              "sentiment": {
                "positive": [
                  "Best option for e-commerce",
                  "User-friendly platform focused on selling online",
                  "Integrated payment systems and variety of plugins tailored to retail"
                ],
                "neutral": [],
                "negative": []
              }
            },
            {
              "name": "Drupal",
              "positionInText": 404,
              "sentiment": {
                "positive": [
                  "Excellent for large, content-heavy websites",
                  "High performance and security",
                  "Suitable for those needing strong content management at scale"
                ],
                "neutral": [],
                "negative": ["Steeper learning curve"]
              }
            },
            {
              "name": "Contentful",
              "positionInText": 516,
              "sentiment": {
                "positive": [
                  "Popular headless CMS for fast, multi-platform content delivery",
                  "Ideal for developers building dynamic websites and apps"
                ],
                "neutral": [],
                "negative": []
              }
            }
          ]
        }
      ]
    }
  ]
}
```

# 6. **Get User Subscription details**

**Method:** `GET`  
**URL:** `https://<host>/users/me/subscriptions`

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `200`

```json
{
  "valid": true,
  "status": "trial|paid|unpaid",
  "trialEndDate": "2024-10-09T22:11:41.923Z",
  "trialPromptsAvailableCount": 3,
  "trialPromptsUsedCount": 1,
  "paidPromptsUsedCount": 5,
  "paidPromptsAvailableCount": 10
}
```

# 6. **Get User Details**

**Method:** `GET`  
**URL:** `https://<host>/users/me`

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `200 OK`

```json
{
  "userId": "123",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "createdDate": "2024-10-21T21:02:00.046Z",
  "onboardingStatus": "completed",
  "twoFactorAuthEnabled": false,
  "trialEndDate": "2024-11-21T21:02:00.046Z",
  "trialPromptsCount": 3,
  "trialPromptsUsedCount": 2,
  "promptsUsedCount": 5,
  "promptsPaidCount": 10,
  "subscriptionEndDate": "2025-10-21T21:02:00.046Z",
  "trial": true,
  "paid": false
}
```

## 22. **Update User Profile**

**Method:** `PATCH`  
**URL:** `https://<host>/users/me`

### Headers

- Content-Type: `application/json`
- Authorization: `Bearer <JWT>`

### Request Body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "onboardingStatus": "completed|skipped",
  "twoFactorAuthEnabled": true
}
```

## 7. **Create Keywords Research Request**

**Method:** `POST`  
**URL:** `https://<host>/research/keywords`

### Request Parameters

| **Property**    | **Mandatory** | **Default** |
| --------------- | ------------- | ----------- |
| country         | yes           |             |
| brand           | yes           |             |
| keywords        | no            |             |
| brandDomain     | no            |             |
| url             | no            |             |
| brandedKeywords | no            | false       |

**Note:**

- Either `keywords` or `brandDomain` must be provided
- If `brandedKeywords` is true, will generate brand-specific keyword variations
- Keywords research is performed asynchronously

### Headers

- Content-Type: `application/json`
- x-api-key: `your-api-key`

### Request Body

```json
{
  "country": "us",
  "brand": "jira",
  "brandDomain": "atlassian.com",
  "keywords": ["project management", "task tracking"],
  "brandedKeywords": true
}
```

```json
{
  "country": "us",
  "brand": "jira",
  "brandDomain": "atlassian.com",
  "url": "https://atlassian.com/about"
}
```

### Response

**Status:** `202`

```json
{
  "uuid": "039784c0-3ff4-4d0c-a5a1-bee9eaddc17d"
}
```

## 8. **Get Keywords Research Results**

**Method:** `GET`  
**URL:** `https://<host>/research/keywords/{uuid}`

### Headers

- Content-Type: `application/json`
- x-api-key: `your-api-key`

### Response

**Status:** `200`

```json
{
  "uuid": "98bac5d2-159c-457a-8e43-1922c57e8067",
  "state": "finished",
  "country": "us",
  "brand": "jira",
  "brandDomain": "atlassian.com",
  "keywords": "project management task tracking",
  "brandedKeywords": true,
  "prompts": [
    {
      "prompt": "How can I use Jira for effective time tracking?",
      "avgSearchVolume": 120
    },
    {
      "prompt": "What are the best project management tools for tracking tasks?",
      "avgSearchVolume": 90
    },
    {
      "prompt": "How does the Jira task tracker work to manage projects?",
      "avgSearchVolume": 80
    },
    {
      "prompt": "What is the most effective software for project time tracking?",
      "avgSearchVolume": 70
    },
    {
      "prompt": "What are the top non-branded tools for project tracking?",
      "avgSearchVolume": 60
    },
    {
      "prompt": "Which tracking tools can enhance project management efficiency?",
      "avgSearchVolume": 50
    }
  ]
}
```

### Response States

| **State** | **Description**                 |
| --------- | ------------------------------- |
| created   | Request has been created        |
| running   | Research is in progress         |
| finished  | Research completed successfully |
| failed    | Research failed                 |

## 9. **Create Brand Report**

**Method:** `POST`  
**URL:** `https://<host>/brands/reports`

### Headers

- Content-Type: `application/json`
- Authorization: `Bearer <JWT>`

### Request Body

```json
{
  "brand": "TechNova",
  "brandVariations": ["TechNova ltd", "TechNova new"],
  "brandDomain": "technova.com",
  "brandDomainVariations": ["technova.co.uk"],
  "promptIds": ["123"],
  "promptUuids": [
    "78adf5bd-a6e0-4dcd-af7b-92a24285c1fe",
    "5a032d87-1d94-4765-b080-c4fa0fd876cd"
  ]
}
```

**Note:**

- `promptUuids` used to import prompts from the AI backend, for testing purposes only (optional)

### Response

**Status:** `200 OK`

```json
{
  "id": "01JAT73C69J1GYAHT917MDCPB0"
}
```

## 10. **Update Brand Report**

**Method:** `PATCH`  
**URL:** `https://<host>/brands/reports/:id`

### Path Parameters

| **Parameter** | **Description** |
| ------------- | --------------- |
| id            | Brand report ID |

### Headers

- Content-Type: `application/json`
- Authorization: `Bearer <JWT>`

### Request Body

```json
{
  "brand": "TechNova",
  "brandVariations": ["TechNova ltd", "TechNova new"],
  "brandDomain": "technova.com",
  "brandDomainVariations": ["technova.co.uk"],
  "promptIds": ["123", "456"]
}
```

### Response

**Status:** `204 OK`

## 11. **Get Brand Report**

**Method:** `GET`  
**URL:** `https://<host>/brands/reports/:id`

### Path Parameters

| **Parameter** | **Description** |
| ------------- | --------------- |
| id            | Brand report ID |

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `200 OK`

```json
{
  "id": "01JAT73C69J1GYAHT917MDCPB0",
  "brand": "TechNova",
  "brandDomain": "technova.com",
  "brandVariations": ["TechNova ltd", "TechNova new"],
  "brandDomainVariations": ["technova.co.uk"],
  "logoUrl": "https://img.logo.dev/technova.com?token=pk_RXpFgq9QQ2OIDXQOsTzGbA",
  "createdDate": "2024-10-21T21:02:00.046Z",
  "updatedDate": "2024-10-21T21:02:00.046Z",
  "promptIds": ["123", "456"],
  "countries": ["us", "uk"]
}
```

**Status:** `404 Not Found`

```json
{
  "message": "Report not found"
}
```

## 12. **Delete Brand Report**

**Method:** `DELETE`  
**URL:** `https://<host>/brands/reports/:id`

### Path Parameters

| **Parameter** | **Description** |
| ------------- | --------------- |
| id            | Brand report ID |

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `204`

## 13. **Get All Brand Reports**

**Method:** `GET`  
**URL:** `https://<host>/brands/reports`

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `200 OK`

```json
[
  {
    "id": "01JAT73C69J1GYAHT917MDCPB0",
    "brand": "TechNova",
    "brandDomain": "technova.com",
    "brandVariations": ["TechNova ltd", "TechNova new"],
    "brandDomainVariations": ["technova.co.uk"],
    "logoUrl": "https://img.logo.dev/technova.com?token=pk_RXpFgq9QQ2OIDXQOsTzGbA",
    "createdDate": "2024-10-21T21:02:00.046Z",
    "updatedDate": "2024-10-21T21:02:00.046Z",
    "countries": ["us", "uk"]
  },
  {
    "id": "01JAT73C69J1GYAHT917MDCPB1",
    "brand": "InnoTech",
    "brandDomain": "innotech.com",
    "logoUrl": "https://img.logo.dev/innotech.com?token=pk_RXpFgq9QQ2OIDXQOsTzGbA",
    "createdDate": "2024-10-21T21:02:00.046Z",
    "updatedDate": "2024-10-21T21:02:00.046Z"
  }
]
```

## 14. **Get Brand Report Stats**

**Method:** `GET`  
**URL:** `https://<host>/brands/reports/:id/stats?country=us&startDate=2025-03-04T13:48:18Z&endDate=2025-04-04T13:48:18Z&services=google`

### Path Parameters

| **Parameter** | **Description**                                        |
| ------------- | ------------------------------------------------------ |
| id            | Brand report ID                                        |
| country       | Brand report country                                   |
| startDate     | Start date of the range in ISO format                  |
| endDate       | End date of the range in ISO format                    |
| services      | Array of services (optional). Empty means all services |

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `200 OK`

```json
{
  "brand": "TechNova",
  "brandDomain": "technova.com",
  "brandLogoUrl": "https://img.logo.dev/technova.com?token=pk_RXpFgq9QQ2OIDXQOsTzGbA",
  "brandMentions": {
    "current": 20,
    "previous": 25,
    "total": 99
  },
  "brandCoverage": {
    "current": 150,
    "total": 1000
  },
  "domainCoverage": {
    "current": 55,
    "total": 100
  },
  "shareOfVoice": {
    "current": 30,
    "previous": 25,
    "total": 200
  },
  "brandRank": {
    "current": 5,
    "previous": 7,
    "total": 50,
    "history": [
      { "rank": 5, "brand": "TechNova", "date": "2025-03-01" },
      { "rank": 7, "brand": "TechNova", "date": "2025-02-01" },
      { "rank": 6, "brand": "TechNova", "date": "2025-01-01" },
      { "rank": 8, "brand": "TechNova", "date": "2024-12-01" },
      { "rank": 9, "brand": "TechNova", "date": "2024-11-01" },
      { "rank": 10, "brand": "TechNova", "date": "2024-10-01" },
      { "rank": 3, "brand": "InnoTech", "date": "2025-03-01" },
      { "rank": 4, "brand": "NextGenAI", "date": "2025-03-01" }
    ],
    "mentions": [
      {
        "rank": 1,
        "brand": "Apple",
        "mentions": 120
      },
      {
        "rank": 2,
        "brand": "Google",
        "mentions": 100
      },
      {
        "rank": 3,
        "brand": "Meta",
        "mentions": 90
      },
      {
        "rank": 4,
        "brand": "TechNova",
        "mentions": 80
      }
    ]
  },
  "domainRank": {
    "history": [
      { "rank": 3, "domain": "technova.com", "date": "2025-03-01" },
      { "rank": 5, "domain": "technova.com", "date": "2025-02-01" },
      { "rank": 6, "domain": "technova.com", "date": "2025-01-01" },
      { "rank": 7, "domain": "technova.com", "date": "2024-12-01" },
      { "rank": 8, "domain": "technova.com", "date": "2024-11-01" },
      { "rank": 9, "domain": "technova.com", "date": "2024-10-01" },
      { "rank": 2, "domain": "innotech.com", "date": "2025-03-01" },
      { "rank": 1, "domain": "nextgenai.com", "date": "2025-03-01" }
    ],
    "citations": [
      {
        "rank": 1,
        "domain": "technova.com",
        "citations": 300,
        "logoUrl": "https://img.logo.dev/technova.com?token=pk_RXpFgq9QQ2OIDXQOsTzGbA"
      },
      {
        "rank": 2,
        "domain": "apple.com",
        "citations": 200,
        "logoUrl": "https://img.logo.dev/apple.com?token=pk_RXpFgq9QQ2OIDXQOsTzGbA"
      }
    ]
  },
  "domainCitations": {
    "current": 200,
    "previous": 180,
    "total": 1500,
    "mostCitedUrls": [
      {
        "rank": 1,
        "url": "https://technova.com/article1",
        "currentCitations": 80,
        "previousCitations": 70
      },
      {
        "rank": 2,
        "url": "https://technova.com/blog",
        "currentCitations": 60,
        "previousCitations": 50
      },
      {
        "rank": 3,
        "url": "https://technova.com/news",
        "currentCitations": 50,
        "previousCitations": 40
      },
      {
        "rank": 4,
        "url": "https://technova.com/research",
        "currentCitations": 45,
        "previousCitations": 35
      },
      {
        "rank": 5,
        "url": "https://technova.com/guides",
        "currentCitations": 40,
        "previousCitations": 30
      }
    ]
  },
  "prompts": {
    "searchVolumes": [
      { "rank": 1, "prompt": "best tech gadgets", "volume": 5000 },
      { "rank": 2, "prompt": "latest AI trends", "volume": 4500 },
      { "rank": 3, "prompt": "smartphone reviews", "volume": 4000 },
      { "rank": 4, "prompt": "top laptops 2025", "volume": 3500 },
      { "rank": 5, "prompt": "best gaming monitors", "volume": 3200 },
      { "rank": 6, "prompt": "VR headset comparisons", "volume": 3000 },
      { "rank": 7, "prompt": "cloud computing services", "volume": 2800 },
      { "rank": 8, "prompt": "AI-generated content tools", "volume": 2500 },
      { "rank": 9, "prompt": "best smart home devices", "volume": 2300 },
      { "rank": 10, "prompt": "coding bootcamps 2025", "volume": 2000 }
    ]
  }
}
```

## 15. **Get All Users (Admin)**

**Method:** `GET`  
**URL:** `https://<host>/admin/users`

### Query Parameters

| **Parameter** | **Description**                  | **Mandatory** |
| ------------- | -------------------------------- | ------------- |
| email         | Filter users by email (optional) | no            |

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `200 OK`

```json
[
  {
    "userId": "123",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "createdDate": "2024-10-21T21:02:00.046Z",
    "trialEndDate": "2024-11-21T21:02:00.046Z",
    "promptsUsedCount": 5,
    "trialPromptsCount": 3,
    "trialPromptsUsedCount": 2,
    "trialPromptsUsedTotalCount": 2,
    "promptsPaidCount": 10,
    "promptsDeletedCount": 1,
    "trial": true,
    "paid": false
  }
]
```

## 16. **Get User Details (Admin)**

**Method:** `GET`  
**URL:** `https://<host>/admin/users/{id}`

### Path Parameters

| **Parameter** | **Description** |
| ------------- | --------------- |
| id            | User ID         |

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `200 OK`

```json
{
  "userId": "123",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "createdDate": "2024-10-21T21:02:00.046Z",
  "trialEndDate": "2024-11-21T21:02:00.046Z",
  "promptsUsedCount": 5,
  "trialPromptsCount": 3,
  "trialPromptsUsedCount": 2,
  "trialPromptsUsedTotalCount": 2,
  "promptsPaidCount": 10,
  "promptsDeletedCount": 1,
  "trial": true,
  "paid": false
}
```

**Status:** `404 Not Found`

```json
{
  "message": "User not found"
}
```

## 17. **Get User Prompts (Admin)**

**Method:** `GET`  
**URL:** `https://<host>/admin/users/{id}/prompts`

### Path Parameters

| **Parameter** | **Description** |
| ------------- | --------------- |
| id            | User ID         |

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `200 OK`

```json
[
  {
    "id": "01JAT7NPPVS4D3VNSSPEMTGR15",
    "aiPromptId": "1bcdf654-c221-46b5-8a5a-747a5110c061",
    "prompt": "How to brew coffee?",
    "createdDate": "2024-10-20T21:02:00.046Z",
    "lastFinishedRunDate": "2024-10-20T21:04:00.046Z",
    "country": "us"
  }
]
```

## 18. **Get User Prompt Details (Admin)**

**Method:** `GET`  
**URL:** `https://<host>/admin/users/{id}/prompts/{promptId}`

### Path Parameters

| **Parameter** | **Description** |
| ------------- | --------------- |
| id            | User ID         |
| promptId      | Prompt ID       |

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `200 OK`

```json
{
  "id": "01JAT7NPPVS4D3VNSSPEMTGR15",
  "prompt": "How to brew coffee?",
  "data": [
    {
      "runId": "1bcdf654-c221-46b5-8a5a-747a5110c061",
      "runDate": "2024-10-09T22:11:41.923Z",
      "data": [
        {
          "service": "perplexity",
          "overviewAvailable": true,
          "content": "...",
          "sources": [...],
          "snapshotUrl": "https://otterly-cdn.s3.us-east-1.amazonaws.com/snapshots/perplexity/qrSjGMitahncLqn6d.png",
          "meta": [...]
        }
      ]
    }
  ]
}
```

## 19. **Get AI Prompt Details (Admin)**

**Method:** `GET`  
**URL:** `https://<host>/admin/prompts/{aiPromptId}`

### Path Parameters

| **Parameter** | **Description** |
| ------------- | --------------- |
| aiPromptId    | AI Prompt ID    |

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `200 OK`

```json
{
  "userId": "123",
  "aiPromptId": "78adf5bd-a6e0-4dcd-af7b-92a24285c1fe",
  "promptId": "01JAT7NPPVS4D3VNSSPEMTGR15"
}
```

**Status:** `404 Not Found`

```json
{
  "message": "Prompt not found"
}
```

## 20. **Retry Prompt Job (Admin)**

**Method:** `PUT`  
**URL:** `https://<host>/admin/prompts/{promptId}/runs/{runId}`

### Path Parameters

| **Parameter** | **Description** |
| ------------- | --------------- |
| promptId      | Prompt ID       |
| runId         | Run ID          |

### Headers

- Content-Type: `application/json`
- Authorization: `Bearer <JWT>`

### Request Body

```json
{
  "services": ["perplexity", "google", "chatgpt"],
  "countries": ["us"]
}
```

### Response

**Status:** `204 No Content`

## 21. Get Payment Plans

Returns available subscription plans with their features and pricing.

**GET** `/payment-plans`

### Headers

- Content-Type: `application/json`
- Authorization: `Bearer <JWT>`

**Response**

```json
{
  "plans": [
    {
      "id": "lite",
      "priceId": "lite-monthly",
      "name": "Lite",
      "interval": "month",
      "price": 2900,
      "features": [
        "10 search prompts",
        "Country-based monitoring",
        "AI Search Prompt Research",
        "Prompt Monitoring for AI Overviews, ChatGPT & Perplexity",
        "Weekly Brand Mentions & Ranking",
        "Brand Sentiment Tracking",
        "Weekly Link Tracking",
        "Link Analysis & Exports"
      ]
    },
    {
      "id": "standard",
      "priceId": "standard-monthly",
      "name": "Standard",
      "interval": "month",
      "price": 18900,
      "features": [
        "100 search prompts",
        "Country-based monitoring",
        "AI Search Prompt Research",
        "Prompt Monitoring for AI Overviews, ChatGPT & Perplexity",
        "Weekly Brand Mentions & Ranking",
        "Brand Sentiment Tracking",
        "Weekly Link Tracking",
        "Link Analysis & Exports"
      ]
    },
    {
      "id": "pro",
      "priceId": "pro-monthly",
      "name": "Pro",
      "interval": "month",
      "price": 98900,
      "features": [
        "1,000 search prompts",
        "Country-based monitoring",
        "AI Search Prompt Research",
        "Prompt Monitoring for AI Overviews, ChatGPT & Perplexity",
        "Weekly Brand Mentions & Ranking",
        "Brand Sentiment Tracking",
        "Weekly Link Tracking",
        "Link Analysis & Exports"
      ]
    }
  ]
}
```

Note: Prices are in cents (e.g., 2900 = $29.00)

### Response

**Status:** `204 No Content`

## 23. **Get Team Members**

**Method:** `GET`  
**URL:** `https://<host>/teams/members`

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `200 OK`

```json
{
  "members": [
    {
      "userId": "123",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "team-owner|team-admin|team-member",
      "status": "member|pending"
    }
  ]
}
```

## 24. **Create Team Invitation**

**Method:** `POST`  
**URL:** `https://<host>/teams/invitations`

### Headers

- Content-Type: `application/json`
- Authorization: `Bearer <JWT>`

### Request Body

```json
{
  "email": "user@example.com",
  "role": "team-admin|team-member"
}
```

### Response

**Status:** `204 No Content`

## 25. **Delete Team Invitation**

**Method:** `DELETE`  
**URL:** `https://<host>/teams/invitations/{id}`

### Path Parameters

| **Parameter** | **Description**                |
| ------------- | ------------------------------ |
| id            | ID of the invitation to delete |

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `204 No Content`

## 26. **Delete Team Member**

**Method:** `DELETE`  
**URL:** `https://<host>/teams/members/{userId}`

### Path Parameters

| **Parameter** | **Description**            |
| ------------- | -------------------------- |
| userId        | ID of the member to remove |

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `204 No Content`

## 27. **Update Team Member**

**Method:** `PATCH`  
**URL:** `https://<host>/teams/members/{userId}`

### Path Parameters

| **Parameter** | **Description**            |
| ------------- | -------------------------- |
| userId        | ID of the member to update |

### Headers

- Content-Type: `application/json`
- Authorization: `Bearer <JWT>`

### Request Body

```json
{
  "role": "team-admin|team-member"
}
```

### Response

**Status:** `204 No Content`

## 28. **Retry Prompt Job (Admin)**

**Method:** `PUT`  
**URL:** `https://<host>/admin/prompts/{promptId}/runs/{runId}`

### Path Parameters

| **Parameter** | **Description**        |
| ------------- | ---------------------- |
| promptId      | ID of the prompt       |
| runId         | ID of the run to retry |

### Headers

- Content-Type: `application/json`
- Authorization: `Bearer <JWT>`

### Request Body

```json
{
  "services": ["perplexity", "google", "chatgpt"],
  "countries": ["us"]
}
```

### Response

**Status:** `204 No Content`

## 29. **Migrate Prompts (Admin)**

**Method:** `POST`  
**URL:** `https://<host>/migrations/prompts`

### Headers

- Content-Type: `application/json`
- Authorization: `Bearer <JWT>`

### Request Body

```json
{
  "userId": "123",
  "promptUuids": ["uuid1", "uuid2"]
}
```

### Response

**Status:** `202 Accepted`

## 30. **Kinde Webhook**

**Method:** `POST`  
**URL:** `https://<host>/webhooks/kinde`

### Headers

- Content-Type: `application/json`

### Request Body

JWT token containing user information

### Response

**Status:** `200 OK`

## 31. **Prompts Webhook**

**Method:** `POST`  
**URL:** `https://<host>/webhooks/prompts?userId={userId}&promptId={promptId}`

### Query Parameters

| **Parameter** | **Description**  |
| ------------- | ---------------- |
| userId        | ID of the user   |
| promptId      | ID of the prompt |

### Headers

- Content-Type: `application/json`

### Request Body

```json
{
  "data": {
    "runFinishedDate": "2024-10-09T22:11:41.923Z"
  }
}
```

### Response

**Status:** `204 No Content`

## 32. **Create Tag**

**Method:** `POST`  
**URL:** `https://<host>/tags`

### Headers

- Content-Type: `application/json`
- Authorization: `Bearer <JWT>`

### Request Body

```json
{
  "name": "Important",
  "color": "red"
}
```

### Response

**Status:** `201 Created`

## 33. **Get All Tags**

**Method:** `GET`  
**URL:** `https://<host>/tags`

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `200 OK`

```json
[
  {
    "id": "tag123",
    "name": "Important",
    "color": "red",
    "promptsCount": 5
  }
]
```

## 34. **Update Tag**

**Method:** `PATCH`  
**URL:** `https://<host>/tags/{tagId}`

### Path Parameters

| **Parameter** | **Description** |
| ------------- | --------------- |
| tagId         | ID of the tag   |

### Headers

- Content-Type: `application/json`
- Authorization: `Bearer <JWT>`

### Request Body

```json
{
  "name": "Urgent",
  "color": "red"
}
```

### Response

**Status:** `204 No Content`

## 35. **Get Tag**

**Method:** `GET`  
**URL:** `https://<host>/tags/{tagId}`

### Path Parameters

| **Parameter** | **Description** |
| ------------- | --------------- |
| tagId         | ID of the tag   |

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `200 OK`

```json
{
  "id": "tag123",
  "name": "Important",
  "color": "red",
  "promptsCount": 5
}
```

## 36. **Delete Tag**

**Method:** `DELETE`  
**URL:** `https://<host>/tags/{tagId}`

### Path Parameters

| **Parameter** | **Description** |
| ------------- | --------------- |
| tagId         | ID of the tag   |

### Headers

- Authorization: `Bearer <JWT>`

### Response

**Status:** `204 No Content`

## 37. **Update Prompt Tags**

**Method:** `PUT`  
**URL:** `https://<host>/prompts/{promptId}/tags`

### Path Parameters

| **Parameter** | **Description**  |
| ------------- | ---------------- |
| promptId      | ID of the prompt |

### Headers

- Content-Type: `application/json`
- Authorization: `Bearer <JWT>`

### Request Body

```json
{
  "tagIds": ["01JTX8JR5J482VSZD7PQKE0PG0"]
}
```

### Response

**Status:** `204 No Content`

# Frontend

## Local development:

1. For VS Code - install the following extensions:

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

2. Create .env.local file with the following variables in frontend/src folder:

```
NEXT_PUBLIC_ROOT_DOMAIN=localhost:3000
KINDE_CLIENT_ID=6814d9b4c9b94a6c909b1cd7ba487911
KINDE_CLIENT_SECRET=tJjmpStiCdp0z9bqtJhAeMlttWvpt0VAS6EKrdaKL2dq5Yg5yKdC
KINDE_ISSUER_URL=https://otterlyai-dev1.eu.kinde.com
KINDE_SITE_URL=http://localhost:3000
NEXT_PUBLIC_KINDE_EMAIL_CODE_CONNECTION_ID=conn_01987c5d9318d3de98d0554235a18d02
NEXT_PUBLIC_KINDE_GOOGLE_CONNECTION_ID=TODO
NEXT_PUBLIC_API_URL=https://api.dev1.otterly.ai
NEXT_PUBLIC_DEV_USERSNAP_ON=true
NEXT_PUBLIC_SALTFISH_ENABLED=true
NEXT_PUBLIC_APP_ENV=dev
APP_ENV=dev
```

3. Run the app locally

```

cd frontend/src
yarn install
yarn dev

```

# Infrastructure / Deployment setup

## AWS

**Create IAM policy for secrets update**

1. Open https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/policies
2. Click Create Policy
3. Switch to JSON tab and paste the following:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "secretsmanager:UpdateSecret",
            "Resource": [
                "arn:aws:secretsmanager:eu-central-1:139727021655:secret:/test/otterly-app*",
                "arn:aws:secretsmanager:eu-central-1:139727021655:secret:/prod/otterly-app*"
            ]
        }
    ]
}
```

4. Click Next
5. Enter policy name - `otterly-app-update-secrets` and Create

**Create IAM role for deployment**

1. Open https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/roles
2. Click Create Role
3. Select Web Identity
4. Select identity provider - `token.actions.githubusercontent.com`
5. Select audience - `sts.amazonaws.com`
6. Enter GitHub org = `otterlyai`
7. Enter repo name = `otterly_frontend_app`
8. Add permissions - search and select `cdk-deploy`, `cdk-bootstrap`, `otterly-app-update-secrets` policies
9. Enter role name - `otterly-app-github-actions`

**DNS Setup**

1. Open Route 53 (https://us-east-1.console.aws.amazon.com/route53/home?region=us-east-1#/hostedzones)
2. Click Create Hosted Zone
3. Enter domain name - `test.otterly.ai`
4. Select type - `Public Hosted Zone`
5. Click Create
6. Copy NS records from the AWS Route 53 hosted zone and configure them in your domain registrar as nameserver (NS) records for the corresponding subdomain. For example:
   - If your hosted zone is `test.otterly.ai`, in your domain registrar:
     1. Create NS records for the `test` subdomain
     2. Add all 4 AWS nameservers as values (they look like: `ns-1234.awsdns-56.org`)
7. Repeat the same steps for `app.otterly.ai` and `api.otterly.ai` domains

**App Secrets Setup**

1. Open AWS Secrets Manager (https://eu-central-1.console.aws.amazon.com/secretsmanager/home?region=eu-central-1#/secret)
2. Click Create secret
3. Select `Other type of secret`
4. Select secret type - `Plaintext` and keep default empty JSON value
5. Click Next
6. Enter secret name - `/test/otterly-app`
7. Click Create secret
8. Repeat the same steps for `/prod/otterly-app`

**Amplify deployment Secrets Setup**

1. Repeat the same steps as above and create secrets for `/test/amplify-github-token` and `/prod/amplify-github-token'
2. Use `GitHub Personal Access Token` as secret value, same for both secrets (see below)

**Amplify deployment webhooks**

1. Go to Amplify portal (https://eu-central-1.console.aws.amazon.com/amplify)
2. Open `<env>-otterly-app` app
3. Open `Hosting` => `Build settings` => scroll to Incoming webhooks section
4. Click `Create webhook`
5. Enter webhook name - `build_webhook` and select `main` branch
6. Copy the webhook URL
7. Paste it in the `AMPLIFY_DEPLOY_WEBHOOK_TEST`/ `AMPLIFY_DEPLOY_WEBHOOK_PROD` secret in Github Actions

## Github

**Personal Access Token for AWS Amplify**

1. Go to GitHub Settings > Developer settings > [Personal access tokens (classic)](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Set token name: `otterly-app-amplify`
4. Select the following permissions:
   - `read:repo_hook`
   - `delete:packages`
   - `repo`
   - `repo:status`
   - `repo_deployment`
   - `public_repo`
   - `repo:invite`
   - `security_events`
   - `write:packages`
   - `read:packages`
   - `admin:repo_hook`
   - `write:repo_hook`
5. Click "Generate token"
6. Copy and securely store the generated token - it will only be shown once

## Github Actions

Add the following [secrets](https://github.com/otterlyai/otterly_frontend_app/settings/secrets/actions) in Github Actions:

- AWS_DEPLOY_ROLE_ARN = arn:aws:iam::139727021655:role/otterly-app-github-actions

- KINDE_CLIENT_ID_TEST = take from the Kinde portal (test environment)
- KINDE_CLIENT_SECRET_TEST = take from the Kinde portal (test environment)
- KINDE_CLIENT_ID_PROD = take from the Kinde portal (production environment)
- KINDE_CLIENT_SECRET_PROD = take from the Kinde portal (production environment)
- AMPLIFY_DEPLOY_WEBHOOK_TEST = take from the Amplify portal (test environment)
- AMPLIFY_DEPLOY_WEBHOOK_PROD = take from the Amplify portal (production environment)

Add the following [variables](https://github.com/otterlyai/otterly_frontend_app/settings/variables/actions) in Github Actions:

- ENVIRONMENT_TEST = test
- STAGE_TEST = test
- AWS_DEPLOY_REGION = eu-central-1
- APP_NAME = otterly-app
