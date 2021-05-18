class HtmlElementStub {}

let HTMLElement: HTMLElement | HtmlElementStub = HtmlElementStub;
if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
    HTMLElement = window.HTMLElement;
}

export = HTMLElement;