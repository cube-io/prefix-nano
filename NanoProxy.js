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
  if(opts.db) {
    opts.db = [this.prefix, opts.db].join("_");
  }
  return this.nano.request(opts, callback);
};

NanoProxy.prototype.relax = NanoProxy.prototype.request;
NanoProxy.prototype.dinosaur = NanoProxy.prototype.request;

NanoProxy.prototype.updates = function(params, callback) {
  return this.nano.updates(params, callback);
};

NanoProxy.prototype.followUpdates = function(params, callback) {
  return this.nano.followUpdates(params, callback);
};

module.exports = NanoProxy;

