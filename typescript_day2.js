function ts(text1) {
    var result = '';
    text1.map(function (text, index) {
        result += (index ? ' ' : '') + text;
    });
    return result;
}
var tes = [1, 'data', 3, 'result'];
var tes2 = ['Bejo', 'has', 4, 'sport', 'car'];
console.log(ts(tes));
console.log(ts(tes2));
