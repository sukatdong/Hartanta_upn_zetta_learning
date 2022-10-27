function ts(text, index1, index2) {
    return text.slice(index1, index2);
}
var text = "Learning Typescript is different than Javascript";
var index1 = 9;
var index2 = 19;
console.log(ts(text, index1, index2));
