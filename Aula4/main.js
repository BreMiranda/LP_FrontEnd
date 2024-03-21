const myArray = [40,50,90,78,50,88,23,7,12];

/* for (let item of myArray ){
    if(item > 18){
        console.log(item)
    }
}
 */

let num18 = myArray.find(findFunction); //função que retorna true ou false, se retornar true ira retornar o item

value => value > 18;
//mesma coisa acima ^ e v 
/* function findFunction(value){
    return value> 18;
} */

console.log(num18);

//mesmaa coisa do código acima, mas menor
let num18 = myArray.find(value => value > 18;); //função que retorna true ou false, se retornar true ira retornar o item

//mesma coisa mas menor ainda
let num18 = myArray.find(a => a > 18;); //função que retorna true ou false, se retornar true ira retornar o item
