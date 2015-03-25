var NanoProxyDbFunctions = require("../NanoProxyDbFunctions.js");

describe("NanoProxyDbFunctions", function() {
    it("proxies `create` with a prefixed name", function() {
        var realNanoMock = {
            db: {
                create: jasmine.createSpy("real nano.db.create")
            }
        };
        var nanoDb = new NanoProxyDbFunctions(realNanoMock, "prefix");
        var callback = function verySpecificCallback() {};

        nanoDb.create("database", callback);

        expect(realNanoMock.db.create).toHaveBeenCalledWith("prefix_database", callback);
    });

    it("proxies `get` with a prefixed name", function() {
        var realNanoMock = {
            db: {
                get: jasmine.createSpy("real nano.db.get")
            }
        };
        var nanoDb = new NanoProxyDbFunctions(realNanoMock, "prefix");
        var callback = function verySpecificCallback() {};

        nanoDb.get("database", callback);

        expect(realNanoMock.db.get).toHaveBeenCalledWith("prefix_database", callback);
    });

    it("proxies `destroy` with a prefixed name", function() {
        var realNanoMock = {
            db: {
                destroy: jasmine.createSpy("real nano.db.destroy")
            }
        };
        var nanoDb = new NanoProxyDbFunctions(realNanoMock, "prefix");
        var callback = function verySpecificCallback() {};

        nanoDb.destroy("database", "rev-12345678", callback);

        expect(realNanoMock.db.destroy).toHaveBeenCalledWith("prefix_database", "rev-12345678", callback);
    });

    it("proxies `list` directly", function() {
        var realNanoMock = {
            db: {
                list: jasmine.createSpy("real nano.db.list")
            }
        };
        var nanoDb = new NanoProxyDbFunctions(realNanoMock, "prefix");
        var callback = function verySpecificCallback() {};

        nanoDb.list(callback);

        expect(realNanoMock.db.list).toHaveBeenCalledWith(callback);
    });

    it("proxies `compact` with a prefixed name", function() {
        var realNanoMock = {
            db: {
                compact: jasmine.createSpy("real nano.db.compact")
            }
        };
        var nanoDb = new NanoProxyDbFunctions(realNanoMock, "prefix");
        var callback = function verySpecificCallback() {};

        nanoDb.compact("database", "design-hello", callback);

        expect(realNanoMock.db.compact).toHaveBeenCalledWith("prefix_database", "design-hello", callback);
    });

    it("proxies `replicate` with a prefixed source name", function() {
        var realNanoMock = {
            db: {
                replicate: jasmine.createSpy("real nano.db.replicate")
            }
        };
        var nanoDb = new NanoProxyDbFunctions(realNanoMock, "prefix");
        var options = {
            something: "other"
        };
        var callback = function verySpecificCallback() {};

        nanoDb.replicate("source", "http://otherhost:5984/target", options, callback);

        expect(realNanoMock.db.replicate).toHaveBeenCalledWith("prefix_source", "http://otherhost:5984/target", options, callback);
    });

    it("proxies `changes` with a prefixed name", function() {
        var realNanoMock = {
            db: {
                changes: jasmine.createSpy("real nano.db.changes")
            }
        };
        var nanoDb = new NanoProxyDbFunctions(realNanoMock, "prefix");
        var params = {
            something: "other"
        };
        var callback = function verySpecificCallback() {};

        nanoDb.changes("database", params, callback);

        expect(realNanoMock.db.changes).toHaveBeenCalledWith("prefix_database", params, callback);
    });

    it("proxies `follow` with a prefixed name", function() {
        var realNanoMock = {
            db: {
                follow: jasmine.createSpy("real nano.db.follow")
            }
        };
        var nanoDb = new NanoProxyDbFunctions(realNanoMock, "prefix");
        var params = {
            something: "other"
        };
        var callback = function verySpecificCallback() {};

        nanoDb.follow("database", params, callback);

        expect(realNanoMock.db.follow).toHaveBeenCalledWith("prefix_database", params, callback);
    });

    it("proxies `use` with a prefixed name", function() {
        var useSpy = jasmine.createSpy("real nano use");
        var realNanoMock = {
            use: useSpy,
            db: {
                use: useSpy
            }
        };
        var nanoDb = new NanoProxyDbFunctions(realNanoMock, "prefix");

        nanoDb.use("database");

        expect(useSpy).toHaveBeenCalledWith("prefix_database");
    });
});
