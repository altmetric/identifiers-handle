"use strict";

function extract(str) {
    var matches = String(str).match(/\b[0-9.]+\/[^\s]+\b/ig);
    if (!matches) { return []; }

    return matches;
}

exports.extract = extract;
