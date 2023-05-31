const buildUI = (element, parentElement) => {
  const { contentType } = element;
  return contentType === "element"
    ? buildElement(element, parentElement)
    : buildText(element, parentElement);
};

const buildElement = (
  { tagName, children, attributes, componentID },
  parentElement
) => {
  const newElement = document.createElement(tagName);
  newElement.setAttribute("componentID", componentID);
  if (attributes) {
    attributes.forEach(({ attributeName, attributeValue }) => {
      newElement.setAttribute(
        attributeName,
        attributeValue ? attributeValue : true
      );
    });
  }
  if (children) {
    children.forEach((child) => {
      buildUI(child, newElement);
    });
  }
  return parentElement.appendChild(newElement);
};
const buildText = ({ tagText }, parentElement) => {
  return parentElement.appendChild(document.createTextNode(tagText));
};

export default buildUI;
