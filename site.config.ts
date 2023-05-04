  import { siteConfig } from './lib/site-config'

  export default siteConfig({
    // the site's root Notion page (required)
    rootNotionPageId: '95c0ae7dd8424c2f9472749ad4eb6649',

    // if you want to restrict pages to a single notion workspace (optional)
    // (this should be a Notion ID; see the docs for how to extract this)
    //rootNotionSpaceId: 'fde5ac74eea345278f004482710e1af3',
    rootNotionSpaceId: 'null',

    // basic site info (required)
    name: 'Javeley Blog',
    domain: 'https://javeley.notion.site/Javeley-',
    author: 'Javeley',

    // open graph metadata (optional)
    description: '兴趣是最好的老师👩',

    // social usernames (optional)
    twitter: 'JaveleyQAQ',
    github: 'JaveleyQAQ',
    zhihu: 'Javeley',
    //linkedin: 'JaveleyQAQ',
    // newsletter: '#', // optional newsletter URL
    // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

    // default notion icon and cover images for site-wide consistency (optional)
    // page-specific values will override these site-wide defaults
    defaultPageIcon: 'https://cdn.jsdelivr.net/gh/Javeleyqaq/images/2023/05/202305040236260.png',
    defaultPageCover: 'https://cdn.jsdelivr.net/gh/Javeleyqaq/images/2023/05/202305040235969.png',
    defaultPageCoverPosition: 0.5,

    // whether or not to enable support for LQIP preview images (optional)
    isPreviewImageSupportEnabled: true,

    // whether or not redis is enabled for caching generated preview images (optional)
    // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
    // environment variables. see the readme for more info
    isRedisEnabled: true,

    // map of notion page IDs to URL paths (optional)
    // any pages defined here will override their default URL paths
    // example:
    //
    // pageUrlOverrides: {
    //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
    //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
    // }
    pageUrlOverrides: null,

    pageUrlAdditions: {
      '/blog': '95c0ae7dd8424c2f9472749ad4eb6649',
      '/tools-library':'384cdbc0965c4646b9ec47f977b52d02',
      '/library': '384cdbc0965c4646b9ec47f977b52d02'
    },

    // whether to use the default notion navigation style or a custom one with links to
    // important pages
    navigationStyle: 'custom',
    navigationLinks: [
      {
        title: 'About',
        pageId: '306e48b4243247ae8fb2369d8a9fc3a4'
      },
      {
        title: 'Contact',
        pageId: '7a34404d79a142d494cfae570c958645'
      }
    ]
  })
