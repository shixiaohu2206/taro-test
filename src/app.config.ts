export default defineAppConfig({
  pages: ["pages/index/index", "pages/my/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },

  tabBar: {
    color: "red",
    selectedColor: "#333",
    backgroundColor: "#f0f0f0",
    borderStyle: "black",
    position: "bottom",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./home.png",
        selectedIconPath: "./home.png",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
        iconPath: "./home.png",
        selectedIconPath: "./home.png",
      },
    ],
  },
  usingComponents: {},
});
