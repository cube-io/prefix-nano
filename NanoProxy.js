var NanoProxyDbFunctions = require("./NanoProxyDbFunctions.js");

var NanoProxy = function(nano, prefix) {
  this.nano = nano;
  this.prefix = prefix;

  this.db = new NanoProxyDbFunctions(nano, prefix);

  this.config = this.nano.config;
};

NanoProxy.prototype.use = function(db) {
  return this.db.use(db);
  // return this.nano.use([this.prefix, db].join("_"));
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

