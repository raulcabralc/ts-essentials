// Union: type1 | type2
function userInput(input1: number | string, input2: number | string) {
  let result: any;
  if (typeof input1 === "string" && typeof input2 === "string") {
    result = `${input1.toString()} e ${input2.toString()}`;
  } else if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  }
  return result;
}

const combineNames = userInput("Apple", "Avocado");
console.log(combineNames);

const combinePrices = userInput(20, 40);
console.log(combinePrices);
