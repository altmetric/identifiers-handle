"use strict";

const handle = require("../lib/handle");

test("extracts a Handle", () => {
    var text = "http://hdl.handle.net/10149/596901";

    expect(handle.extract(text)).toEqual(["10149/596901"]);
});

test("extracts another Handle", () => {
    var text = "http://hdl.handle.net/2117/83545it.ly/1UtXnTW";

    expect(handle.extract(text)).toEqual(["2117/83545it.ly/1UtXnTW"]);
});

test("extracts Handles separated by Unicode whitespace", () => {
    var text = "10149/596901 10251/79612";

    expect(handle.extract(text)).toEqual(["10149/596901", "10251/79612"]);
});
