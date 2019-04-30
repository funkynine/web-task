// При выполнении цикла браузер завис, используя try catch исправить ситуацию и вывести ошибку
async function main () {

  for(let i = 0; i < 1000; i++){
    if(i == 999){
      let result = i;
      return result;
    };
  };

  await result;

  try {
    console.log(result);
  } catch (error) {
    console.warn(error);
  }
};

console.log(main());