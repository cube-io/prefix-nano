var realNano = require("nano");
var NanoProxy = require("./NanoProxy.js");

var initialize = function(url, prefix) {
  if(!prefix) {
    return realNano(url);
  }

  return new NanoProxy(realNano(url), prefix);
};

module.exports = initialize;

