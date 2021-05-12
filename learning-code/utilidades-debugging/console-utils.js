// %S = string
// %d = numero
// %j = json

console.log("Un %s y un %s", "perrito", "gatito");

console.info("hello world");
console.warn("hello error");

console.assert(42 === "42");

console.trace("hello");

const util = require("util");
const debuglog = util.debuglog("foo");

// NODE_DEBUG=foo node console-utils.js
debuglog("hello from foo");

