function greet(name){
  return `Hello ${name}!!!`
}

console.log(greet("Class")); //pass in literal string

function functionalGreet(fnGetString){ //who to call}
return `Hello ${fnGetString()}!!!`; //Call()
}

function kevin(){
  return `Abel`;
}
console.log(functionalGreet(kevin));
