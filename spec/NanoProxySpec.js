var NanoProxy = require("../NanoProxy.js");

describe("NanoProxy", function() {
    it("proxies `updates` directly", function() {
        var realNanoMock = {
            updates: jasmine.createSpy("real nano updates")
        };
        var nano = new NanoProxy(realNanoMock, "prefix");

        var params = {
            something: "other"
        };
        var callback = function verySpecificCallback() {};
        nano.updates(params, callback);

        expect(realNanoMock.updates).toHaveBeenCalledWith(params, callback);
    });

    it("proxies `followUpdates` directly", function() {
        var realNanoMock = {
            followUpdates: jasmine.createSpy("real nano updates")
        };
        var nano = new NanoProxy(realNanoMock, "prefix");

        var params = {
            something: "other"
        };
        var callback = function verySpecificCallback() {};
        nano.followUpdates(params, callback);

        expect(realNanoMock.followUpdates).toHaveBeenCalledWith(params, callback);
    });

    it("proxies `use` and `scope` with a prefixing of the name", function() {
        var useSpy = jasmine.createSpy("real nano use");
        var realNanoMock = {
            use: useSpy,
            db: {
                use: useSpy
            }
        };
        var nano = new NanoProxy(realNanoMock, "prefix");

        nano.use("database");

        expect(realNanoMock.db.use).toHaveBeenCalledWith("prefix_database");

        nano.scope("other_database");

        expect(realNanoMock.db.use).toHaveBeenCalledWith("prefix_other_database");
    });

    it("proxies `request`, `relax` and `dinosaur` with a prefixing of the db option", function() {
        var realNanoMock = {
            request: jasmine.createSpy("real nano request")
        };
        var nano = new NanoProxy(realNanoMock, "prefix");
        var callback = function verySpecificCallback() {};

        nano.request({db: "database"}, callback);

        expect(realNanoMock.request).toHaveBeenCalledWith({db: "prefix_database"}, callback);

        nano.relax({db: "other_database"}, callback);

        expect(realNanoMock.request).toHaveBeenCalledWith({db: "prefix_other_database"}, callback);

        nano.dinosaur({db: "third_database"}, callback);

        expect(realNanoMock.request).toHaveBeenCalledWith({db: "prefix_third_database"}, callback);
    });
});
