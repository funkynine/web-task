const FIRST_OBJ = {};
const SECOND_OBJ = {
  name:"Ihor",
  secondName:"Bazyliuk",
  age: 13
};

isEmpty = (obj) => {
  return Object.getOwnPropertyNames(obj).length === 0;
};

console.log(isEmpty(FIRST_OBJ));
console.log(isEmpty(SECOND_OBJ));