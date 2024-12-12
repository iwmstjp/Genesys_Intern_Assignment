function combinations(digits){
    if(digits.length === 0){
        return [];
    }else if(digits.length > 4){
        console.error("Input length must be between 0 and 4 characters.");
        return [];
    }
    if(typeof(digits) !== 'string' ){
        console.error("Input must be string.");
        return [];
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
            console.error("Input contains invalid characters.");
            return [];
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