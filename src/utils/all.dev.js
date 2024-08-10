"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormattedDate = void 0;

/** */
var getFormattedDate = function getFormattedDate(date) {
  return date ? new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }) : "";
};

exports.getFormattedDate = getFormattedDate;