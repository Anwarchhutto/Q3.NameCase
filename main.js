//lower case
var personname = "Faiz";
console.log("lowercase:", personname.toLowerCase());
//Upper Case
console.log("UpperCase:", personname.toUpperCase());
//Title Case
console.log("titlecase:", personname.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
