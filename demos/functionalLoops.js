data = [
  {
    name: "class"
  },
  {
    name: "Abel"
  }
];

function greet(text){
  return `hello ${text}!!!`;
}
////////////////////////////////////////////////////////////
// for (item of data){
// console.log(greet(item.name));
// }

////////////////////////////////////////////////////////////
// function print(item){
//   console.log(greet(item.name))
// }
// data.forEach(print)  //For each will call out function later.

////////////////////////////////////////////////////////////
/// ONE LINE
// data.forEach((item) => { console.log(`hello ${item.name}!!!`) });
// /// ONE LINE 
// data.forEach(item => console.log(`hello ${item.name}!!!`));



// [12,34,56].forEach( (n) => {console.log(n)})



/////////////////////////////////////////////////////////////////////////////////////
menu = {
  breakfast : [
    {name: "pancakes", price:3.99},
    {name: "ham", price: 4.99},
  ],
  lunch : [
    {name: "sandwich", price:6.99},
    {name: "soup", price: 2.99},
  ],
}

//KEY IS AN IDENTIFIER INSIDE AN OBJECT THAT POINTS TO A VALUE. Eg, {name}, breakfast, luch
///lONG
// keys = Object.keys(menu)
// for(m of keys){
//   console.log(m);
// }

/// ONE LINE
// Object.keys(menu).forEach(m=>console.log(m))

// /// LONGER
// keys = Object.keys(menu)
// for(m of keys){
//   console.log(m)
//   for(item of menu[m]){
//     console.log(item.name, item.price); //one item
//   }
// }

/// TO GET THE rice of soup
// console.log("PRICE OF SOUP: ", menu["lunch"][1].price);

/// Another Way
// Object.keys(menu).forEach(m => {
//   console.log(m + ":");
//   menu[m].forEach(i => {
//     console.log("\t", i.name, i.price);
//   });
// });

///Another Way
// Object.keys(menu).forEach( m => menu[m].forEach(i=> console.log(m+":\t", i.name, i.price)));


displayItem = i => console.log(i.name, i.price)
displaySection = m => { console.log(m + ":\t"); menu[m].forEach(displayItem)};
Object.keys(menu).forEach(displaySection);

