"use strict";
var HtmlElementStub = (function () {
    function HtmlElementStub() {
    }
    return HtmlElementStub;
}());
var HTMLElement = HtmlElementStub;
if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
    HTMLElement = window.HTMLElement;
}
module.exports = HTMLElement;
//# sourceMappingURL=index.js.map