var NanoProxyDbFunctions = require("./NanoProxyDbFunctions.js");

var NanoProxy = function(nano, prefix) {
  this.nano = nano;
  this.prefix = prefix;

  this.db = new NanoProxyDbFunctions(nano, prefix);

  this.config = this.nano.config;
};

NanoProxy.prototype.use = function(name) {
  return this.db.use(name);
};

NanoProxy.prototype.scope = NanoProxy.prototype.use;

NanoProxy.prototype.request = function(opts, callback) {
  throw new Error("Not implemented");
};

NanoProxy.prototype.relax = NanoProxy.prototype.request;
NanoProxy.prototype.dinosaur = NanoProxy.prototype.request;

NanoProxy.prototype.updates = function(params, callback) {
  throw new Error("Not implemented");
};

NanoProxy.prototype.followUpdates(params, callback) {
  throw new Error("Not implemented");
};

module.exports = NanoProxy;

