//array de nomes que retorne o primeiro nome com "A"

let myArray = ["brend", "milene", "sarah", "ana"]

let achandoLetra = myArray.find(nome => nome.includes('A') || nome.includes('a')); 

console.log (achandoLetra);