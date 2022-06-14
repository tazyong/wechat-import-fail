"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_index = require("../../utils/index.js");
require("side-channel");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const queryString = utils_index.getQueryString({
      a: [1, 2],
      b: "abc"
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(queryString))
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/workspace/wechat-import-fail/src/pages/test/index.vue"]]);
wx.createPage(MiniProgramPage);
