import { Feed } from "feed";

const basePath = "https://blog.rhen.cloud";

export default defineEventHandler(async (event) => {
  setHeader(event, "content-type", "text/xml");
  const docs = await queryCollection(event, "content").all();
  const feed = new Feed({
    title: "RhenCloud's Blog",
    description:
      "Welcome To My Blog Site. Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.",
    id: basePath,
    link: basePath,
    language: "zh-CN",
    favicon: `${basePath}/favicon.ico`,
    copyright: "MIT",
    author: {
      name: "RhenCloud",
      email: "i@rhen.cloud",
      link: basePath,
    },
  });

  // Add the feed items
  docs.forEach((doc) => {
    // console.log(doc)
    feed.addItem({
      title: doc.title || "",
      id: basePath + doc.path,
      link: basePath + doc.path,
      description: doc.description,
      content: doc.description,
      date: new Date(doc.meta?.date as string),
    });
  });

  return feed.rss2();
});
