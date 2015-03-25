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

};

NanoProxyDbFunctions.prototype.destroy = function(name, callback) {

};

NanoProxyDbFunctions.prototype.list = function(callback) {

};

NanoProxyDbFunctions.prototype.compact = function(name, designname, callback) {

};

NanoProxyDbFunctions.prototype.replicate = function(source, target, opts, callback) {

};

NanoProxyDbFunctions.prototype.changes = function(name, params, callback) {

};

NanoProxyDbFunctions.prototype.follow = function(name, params, callback) {

};

NanoProxyDbFunctions.prototype.use = function(name) {
  return this.nano.use(prefixName.call(this, name));
};

module.exports = NanoProxyDbFunctions;

