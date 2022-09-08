// Three stages: initialiation(variable declaration),condition,final expression,statement
// for ([initialization]; [condition]; [iteration]) {[loop body(statement)]} 
let family = ["Maosa","Moma","Moraa","Marube"]
function LoopThrough(family){
    for(let i = 0; i < family.length; i++){
        // statement
        // console.log(family[i]);
    }
}
LoopThrough(family)


console.log("The fine four(Maosa's):");
// For of
function LoopThrough(family){
    for(let fam of family ){
        // statement
        // console.log("Hello");
        console.log(fam);
    }
}
LoopThrough(family)
// looping through an object 
const store = [{name:"laptop", price:1000, count:5},{name:"desktop",price: 3000, count:4},{name:"mouse", price:100, count:10},{name:"phone", price:200, count:2}]
const stores = {name:"laptop", price:1000, count:5}
function LoopThroughObj(obj){
    for(let key in obj){
        console.log(key);
        // ton find the key value
        console.log(obj[key]);
    }
}
LoopThroughObj(stores)
