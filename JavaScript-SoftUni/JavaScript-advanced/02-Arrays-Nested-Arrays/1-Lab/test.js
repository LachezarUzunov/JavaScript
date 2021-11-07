function requestValidator(obj) {
  const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

  const uriRegex = /^([A-Za-z0-9+\.])+$/;

  const messageRegex = /([<>\\&'"]+)/;

  if (
    obj.hasOwnProperty(method) == false ||
    validMethods.includes(obj.method) == false
  ) {
    throw new Error("Invalid request header: Invalid Method");
  }

  if (obj.hasOwnProperty(uri) == false || uriRegex.test(obj.uri) == false) {
    throw new Error("Invalid request header: Invalid Uri");
  }

  if (
    obj.hasOwnProperty(version) == false ||
    validVersions.includes(obj.uri) == false
  ) {
    throw new Error("Invalid request header: Invalid Version");
  }

  if (
    obj.hasOwnProperty(message) == undefined ||
    messageRegex.test(obj.message)
  ) {
    throw new Error("Invalid request header: Invalid Message");
  }
  return obj;
}

console.log(
  requestValidator({
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: "",
  })
);
