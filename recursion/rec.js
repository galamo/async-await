// function whatever(){
//     whatever();
// } dont do this!!!!

function countDown(number) {
    console.log(number);
    if (number <= 1) {
        return number;
    }

    return countDown(--number)
}



let dic = { "t": { "a": { "k": { "e": null }, "k": { "e": null }, "b": { "s": null } }, "k": { "e": null }, } };

function scanDic(obj, char) {
    console.log(char);
    if (obj[char] == null) {
        console.log(obj[char], char);
        return;
    }       

    for (let key in obj[char]) {
        scanDic(obj[char], key)
    }

}