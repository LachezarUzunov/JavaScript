function extractFile(string) {
  // find last element of path split by \\
  const tokens = string.split("\\");
  // split last element in two at final period
  const fileName = tokens.pop();

  let index = fileName.lastIndexOf(".");
  let name = fileName.substring(0, index);
  let extension = fileName.substring(index + 1);

  console.log(name);
  console.log(extension);
}

extractFile("C:\\Internal\\training-internal\\Template.pptx");
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
