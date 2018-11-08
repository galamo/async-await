let words = ["scream", "scrum", "scale", "necromancer"];
let dic = {};
let indexWord = (word, dic) => {
    let c = word[0];
    //stop condition
    if (word.length == 0) {
        return;
    } else {
        if (!(c in dic)) {
            dic[c] = {}
        }
        indexWord(word.substr(1), dic[c])
    }
}


words.forEach((word) => {
    indexWord(word, dic);
})
let resultsArray = [];

let searchWord = (dic, prefix, result = "") => {
    let c = prefix[0];

    if (dic[c] == null) {
        return subSearch(dic, result)
    } else {
        return searchWord(dic[c], prefix.substr(1), result + c)
    }
}

let subSearch = (dic, result) => {
    if (Object.keys(dic).length == 0) {
        resultsArray.push(result);
    }
    for (let key in dic) {
        subSearch(dic[key], result + key)
    }

}
searchWord(dic, "scr", "");