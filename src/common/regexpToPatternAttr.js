export default (regexp) => {
  return regexp
    ? regexp
      .toString()
      .replace(/^\/{1}/, "")
      .replace(/\/[^\/]?$/, "")
    : undefined
}
