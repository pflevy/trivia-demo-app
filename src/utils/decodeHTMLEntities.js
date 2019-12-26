function decodeHTMLEntities(input) {
  let doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

export default decodeHTMLEntities;
