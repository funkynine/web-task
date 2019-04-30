// задана строка " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at." вивести масив з усіма індексами літери "a" у даній строці


let str = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at.';
const SEPARATOR = ' ';

findWordWithA = () => {
  let arr = splitString(str, SEPARATOR);
  
  let result = arr.forEach(element => {
    if (element.search('a') != -1){
      console.log(element);
    };
  });
  
  return result;
};

splitString = (stringToSplit, separator) => {
  let arrayOfStrings = stringToSplit.split(separator);
  return arrayOfStrings;
}

findWordWithA();