// 全局配置

module.exports = {

  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/global-color.scss";
        `
      }
    }
  }
};
