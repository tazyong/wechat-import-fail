"use strict";
var common_vendor = require("../common/vendor.js");
function getQueryString(query) {
  return common_vendor.lib.stringify(query, { arrayFormat: "repeat" });
}
exports.getQueryString = getQueryString;
