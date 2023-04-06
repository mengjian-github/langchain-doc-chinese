import { defineConfig } from "vuepress/config";

export default defineConfig({
  title: "LangChain中文文档",
  base: "/langchain-doc-chinese/",
  themeConfig: {
    nav: [
      {
        text: "Github",
        link: "https://github.com/mengjian-github/langchain-doc-chinese",
      },
    ],
    sidebar: [
      "/",
      {
        title: "入门",
        children: ["/getting-started/install"],
      },
    ],
  },
});
