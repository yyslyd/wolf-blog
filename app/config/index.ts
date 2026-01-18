import type { SiteConfig } from "~/types/nav";

const siteConfig: SiteConfig = {
  siteMeta: {
    title: "wolf's blog",
    description: "Wish the world could be kind to everyone.",
    keywords: ["Technology", "Blog", "Development", "Programming"],
    author: "wolf",
    url: "https://theworld.com",
    email: "ydd2844@gmail.com",
    lang: "zh-CN",
    favicon: "/favicon.svg",
    startTime: "2025-10-01",
  },

  hero: {
    title: "wolf's blog",
    description: ["Wish the world could be kind to everyone."],
    typed: {
      enable: true,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      backDelay: 2000,
    },
  },

  profile: {
    avatar: "/avatar.png",
    birthday: "2010-03-28",
  },

  socialLinks: [
    { name: "Email", url: "mailto:ydd2844@gmail.com" },
  ],

    navbar: {
    links: [
      // { name: "Home", path: "/", icon: "fa6-solid:house" },
      { name: "归档", path: "/archive", icon: "fa-solid:newspaper" },
      {
        name: "分类",
        path: "/categories",
        icon: "fa-solid:folder",
        // children: [
        //   { name: "前端", path: "/categories/frontend", icon: "fa-solid:code" },
        //   { name: "后端", path: "/categories/backend", icon: "fa-solid:server" },
        // ],
      },
      { name: "标签", path: "/tags", icon: "fa-solid:tags" },
      { name: "关于", path: "/about", icon: "fa-solid:user" },
    ],
  },

  lines: [
    { name: "EdgeOne", url: "https://theworld.com", ping: true },
    { name: "Vercel", url: "https://theworld.com", ping: true },
    { name: "Dev", url: "http://localhost:3000", ping: false },
  ],

  theme: {
    background: "/background.webp",
    backgroundMobile: "https://www.loliapi.com/acg/pe",
    color: "#bd83f3",
  },

  footer: {
    beian: "",
    beianLink: "https://beian.miit.gov.cn/",
    customHtml: "",
    hitokoto: {
      enable: true,
      type: "a&b&c&d&j",
    },
  },

  comment: {
    twikoo: {
      enable: false,
      envId: "",
    },
  },

  umami: {
    enable: false,
    scriptUrl: "",
    apiKey: "",
    websiteId: "",
    apiEndpoint: "",
  },
};

export default siteConfig;





