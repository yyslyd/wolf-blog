import { Feed } from "feed";
import siteConfig from "~/config";

export default defineEventHandler(async (event) => {
  setHeader(event, "content-type", "text/xml");
  const docs = await queryCollection(event, "content").all();
  const feed = new Feed({
    title: siteConfig.siteMeta.title,
    description: siteConfig.siteMeta.description,
    id: siteConfig.siteMeta.url,
    link: siteConfig.siteMeta.url,
    language: siteConfig.siteMeta.lang,
    favicon: `${siteConfig.siteMeta.url}/${siteConfig.siteMeta.favicon}`,
    copyright: "MIT",
    author: {
      name: siteConfig.siteMeta.author,
      email: siteConfig.siteMeta.email,
      link: siteConfig.siteMeta.url,
    },
  });

  // Add the feed items
  docs.forEach((doc) => {
    // console.log(doc)
    feed.addItem({
      title: doc.title || "",
      id: siteConfig.siteMeta.url + "/" + doc.path,
      link: siteConfig.siteMeta.url + "/" + doc.path,
      description: doc.description,
      content: doc.description,
      date: new Date(doc.meta?.date as string),
    });
  });

  return feed.rss2();
});
