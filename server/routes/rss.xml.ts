import { Feed } from "feed";
import siteConfig from "~/config";

export default defineEventHandler(async (event) => {
  setHeader(event, "content-type", "text/xml");
  const docs = await queryCollection(event, "content").where("published", "=", true).all();

  const baseUrl = siteConfig.siteMeta.url ?? "";
  const favicon = siteConfig.siteMeta.favicon
    ? `${baseUrl}/${siteConfig.siteMeta.favicon}`
    : undefined;
  const language = siteConfig.siteMeta.lang ?? "zh-CN";

  const feed = new Feed({
    title: siteConfig.siteMeta.title ?? "",
    description: siteConfig.siteMeta.description ?? "",
    id: baseUrl,
    link: baseUrl,
    language,
    favicon,
    copyright: "MIT",
    author: {
      name: siteConfig.siteMeta.author ?? "",
      email: siteConfig.siteMeta.email ?? undefined,
      link: baseUrl,
    },
  });

  // Add the feed items
  docs.forEach((doc: Record<string, unknown>) => {
    const title = typeof doc.title === "string" ? doc.title : "";
    const path = typeof doc.path === "string" ? doc.path : "";
    const description = typeof doc.description === "string" ? doc.description : "";
    const meta = (doc as { meta?: Record<string, unknown> }).meta;
    const dateStr = meta && typeof meta.date === "string" ? meta.date : undefined;
    const date = dateStr ? new Date(dateStr) : new Date();

    feed.addItem({
      title,
      id: `${baseUrl}/${path}`,
      link: `${baseUrl}/${path}`,
      description,
      content: description,
      date,
    });
  });

  return feed.rss2();
});
