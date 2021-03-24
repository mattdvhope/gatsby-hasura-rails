export const GetCodeFromUrl = () => {
  const url_with_code = window.location.search.match(/(code=)(.*)(?=&state)/)
  const code = url_with_code ? url_with_code[2] : null
  return code;
}
