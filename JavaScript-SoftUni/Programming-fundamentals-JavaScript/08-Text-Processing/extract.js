function extract(string) {
  let last = string.split("\\").pop();

  let index = last.lastIndexOf(".");
  console.log(`File name: ${last.substring(0, index)}`);
  console.log(`File extension: ${last.substring(index + 1)}`);
}
extract("C:\\Internal\\training-internal\\Template.pptx");
