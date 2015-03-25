var NanoProxyDbFunctions = function(nano, prefix) {
  this.nano = nano;
  this.prefix = prefix;
};

NanoProxyDbFunctions.prototype.create = function(name, callback) {
  return this.nano.db.create(prefixName.call(this, name), callback);
};

function prefixName(name) {
  return [this.prefix, name].join("_");
}

NanoProxyDbFunctions.prototype.get = function(name, callback) {
  return this.nano.db.get(prefixName.call(this, name), callback);
};

NanoProxyDbFunctions.prototype.destroy = function(name, rev, callback) {
  return this.nano.db.destroy(prefixName.call(this, name), rev, callback);
};

NanoProxyDbFunctions.prototype.list = function(callback) {
  return this.nano.db.list(callback);
};

NanoProxyDbFunctions.prototype.compact = function(name, designname, callback) {
  return this.nano.db.compact(prefixName.call(this, name), designname, callback);
};

NanoProxyDbFunctions.prototype.replicate = function(source, target, opts, callback) {
  return this.nano.db.replicate(prefixName.call(this, source), target, opts, callback);
};

NanoProxyDbFunctions.prototype.changes = function(name, params, callback) {
  return this.nano.db.changes(prefixName.call(this, name), params, callback);
};

NanoProxyDbFunctions.prototype.follow = function(name, params, callback) {
  return this.nano.db.follow(prefixName.call(this, name), params, callback);
};

NanoProxyDbFunctions.prototype.use = function(name) {
  return this.nano.use(prefixName.call(this, name));
};

module.exports = NanoProxyDbFunctions;
