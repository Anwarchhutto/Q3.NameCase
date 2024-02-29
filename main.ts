//lower case
let personname: String ="Faiz"
console.log("lowercase:",personname.toLowerCase());

//Upper Case
console.log ("UpperCase:",personname.toUpperCase());

//Title Case
console.log ("titlecase:",personname.replace (/\bw/g,c => c . toUpperCase()))
