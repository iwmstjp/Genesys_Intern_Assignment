function combinations(digits){
    if(digits.length === 0){
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


if (JSON.stringify(combinations("23"))== JSON.stringify(["ad","ae","af","bd","be","bf","cd","ce","cf"])){
    console.log("Sucess");
}else{
    console.log("Wrong");
    console.log(combinations("23"));
}
if (JSON.stringify(combinations(""))== JSON.stringify([])){
    console.log("Sucess");
}else{
    console.log("Wrong");
    console.log(combinations(""));
}
if (JSON.stringify(combinations("2"))== JSON.stringify(["a","b","c"])){
    console.log("Sucess");
}else{
    console.log("Wrong");
    console.log(combinations("2"));
}