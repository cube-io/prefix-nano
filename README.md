prefix-nano
===========

Adds the ability to prefix [nano](https://github.com/dscape/nano)-connections.
What does that mean?
Well, there will be an optional argument when establishing database connection:

```js
var db = require("prefix-nano")(url[, prefix]);
```

What happens if a prefix is added?
It is basically prepended to all database names requested through that connection.
So we can do this to get a connection to the `"voizee_dialplans"`-database:

```js
var db = require("prefix-nano")(url, "voizee");
var dialplanDb = db.use("dialplans");
```

