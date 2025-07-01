let itemInput: unknown;
let itemName: string;

itemInput = 10;
itemInput = "Test";

// itemName = itemInput;
// itemName deve ser string, não unknown

if (itemInput === "string") {
  itemName = itemInput;
}
