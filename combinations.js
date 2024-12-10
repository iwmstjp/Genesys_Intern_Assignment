function combinations(digits){
    if(digits.length === 0 || digits.length > 4){
        return [];
    }
    if(typeof(digits) !== 'string' ){
        return []
    }
    const wordsMap ={
        "2":["a","b","c"],
        "3":["d","e","f"],
        "4":["g","h","i"],
        "5":["j","k","l"],
        "6":["m","n","o"],
        "7":["p","q","r","s"],
        "8":["t","u","v"],
        "9":["w","x","y","z"],
    };
    result = [""]
    for(digit of digits){
        const words = wordsMap[digit];
        if(typeof(words) === 'undefined'){
            return []
        }
        const tmp = [];
        for(const prefix of result){
            for(const word of words){
                tmp.push(prefix+word);
            }
        }
        result = tmp;
    }
    return result;
}
module.exports = combinations;