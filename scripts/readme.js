"use strict";
exports.__esModule = true;
var supporters_1 = require("../config/supporters");
var str = '';
for (var _i = 0, supporters_2 = supporters_1["default"]; _i < supporters_2.length; _i++) {
    var s = supporters_2[_i];
    str += "- " + s.name + (s.twitterUsername
        ? " [@" + s.twitterUsername + "](https://twitter.com/" + s.twitterUsername + ")"
        : '') + "\n";
}
console.log(str);
