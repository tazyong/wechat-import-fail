"use strict";
var common_vendor = require("../../common/vendor.js");
require("side-channel");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const title = common_vendor.ref("Hello");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/workspace/wechat-import-fail/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
