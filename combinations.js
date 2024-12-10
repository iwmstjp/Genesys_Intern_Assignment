function combinations(digits){
    return []
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