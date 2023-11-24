function createNode(value) {
  return {
    value,
    next: null,
  };
}

let newNode = createNode("Hello");

console.log(newNode);
