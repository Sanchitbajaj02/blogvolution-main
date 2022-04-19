//Creates a description of a string without cutting off the last word.
// const createDescription = (str, length) => {
//     if (str.length > length) {
//         while (str[length] !== " ") length++
//         str = str.substring(0, length) + "...";
//     }
//     return str;
// }
const createDescription = (str, length) => {
  var rgxwords = new RegExp("([^ ]*[ ]{0,1}){1," + length + "}", "ig");
  str = str.match(rgxwords)[0];
  // str = str.substring(0, length) + "...";
  return str;
};
// + "..."
const stripHTML = (htmlStr) => {
  return htmlStr.replace(/<\/?[^>]+(>|$)/g, "");
};

function filterCardsOnHomePage(arr, n) {
  var result = new Array(n),  
    len = arr.length,
    taken = new Array(len);    

  if (n > len)  
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) { 
    var x = Math.floor(Math.random() * len);    
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  // console.log(result);
  return result;
}

export { createDescription, stripHTML, filterCardsOnHomePage };
