# JS Markup to HTML Converter

This is a utility module that allows you to create HTML elements from JS markup.

## Installation

No installation is required for this module. Simply include the code in your project and start using it.

## Usage

To use the `buildUI` function to create HTML elements from JS markup, follow these steps:

1. Call the `buildUI` function, passing the JS markup element and the parent HTML element as parameters:
```javascript
const element = {
  // JS markup element
};
const parentElement = document.querySelector("parent");
buildUI(element, parentElement);
```
2. Optional: Modify the JS markup element as per your requirements to build the desired HTML structure.
Make sure to adjust the code according to your specific requirements, such as selecting the desired parent HTML element and providing the appropriate JS markup element.

## Note
This function works in conjunction with another package I have built, which turns HTML into the desired markup, with the required structure:

[HTML-2-JavaScript](https://www.npmjs.com/package/@jasonmarq/html-2-javascript)

The `buildUI` function creates HTML elements based on the provided JS markup. It supports both element and text content types. The resulting HTML structure will reflect the structure of the JS markup element.

Please ensure that the necessary functions (`buildElement`, `buildText`) and the `buildUI` function are available and accessible within your project.

Ensure cross-browser compatibility when using the code provided, as it may require adjustments for specific browsers.