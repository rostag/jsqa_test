const JSQA_APP = {};
exports.JSQA_APP = JSQA_APP;
exports.create = function (ns_string) {
    var parts = ns_string.split('.'),
        parent = JSQA_APP,
        i;
    if (parts[0] === 'JSQA_APP') parts = parts.slice(1);
    for (i = 0; i < parts.length; i++) {
        if (typeof parent[parts[i]] === 'undefined') parent[parts[i]] = {};
        parent = parent[parts[i]];
    }
    return parent;
};
