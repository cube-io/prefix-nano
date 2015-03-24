var realNano = require("nano");
var NanoProxy = require("./NanoProxy.js");

var initialize = function(url, prefix) {
  if(!prefix) {
    return realNano(url);
  }

  return new NanoProxy(nano(url), prefix);
};

module.exports = initialize;

