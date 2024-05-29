
const output = document.getElementById("output");
const array = [1, 2, 3, 4];

function filterEven() {
  return new Promise((resolve, reject) => {
    // Filter out the even numbers from the array
    const evenArray = array.filter((e) => e % 2 === 0);
    
    // Simulate an asynchronous operation with a 1-second delay
    setTimeout(() => {
      // Update the output element with the even numbers
      output.innerText = evenArray.join(", ");
      // Resolve the promise with the filtered even numbers
      resolve(evenArray);
    }, 1000); // 1-second delay
  });
}

function multiplyByTwo(val) {
  return new Promise((resolve, reject) => {
    // Map over the even numbers array and multiply each number by 2
    const result = val.map((e) => e * 2);
    
    // Simulate an asynchronous operation with a 2-second delay
    setTimeout(() => {
      // Update the output element with the multiplied numbers
      output.innerText = result.join(", ");
      
      // Resolve the promise with the multiplied numbers
      resolve(result);
    }, 2000); // 2-second delay
  });
}

filterEven()
  .then((val) => multiplyByTwo(val))
  .catch((error) => console.error("Error:", error)); 
