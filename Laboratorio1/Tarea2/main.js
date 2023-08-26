function getNegativeNumbers(inputArray) {
    const negativeNumbers = inputArray.filter(number => number < 0);
    return negativeNumbers;
  }
  
  function main() {
    const numbersArray = [];
    
    while (true) {
      let userInput = prompt("Ingrese un número o escriba 'salir' para terminar:");
  
      if (userInput.toLowerCase() === 'salir') {
        break;
      }
  
      const parsedNumber = parseFloat(userInput);
  
      if (!isNaN(parsedNumber)) {
        numbersArray.push(parsedNumber);
        console.log(`Número ${parsedNumber} añadido al array.`);
      } else {
        console.log("No se ingresó un número válido. Intente nuevamente.");
      }
    }
  
    console.log("Array de números ingresados:", numbersArray);
  
    const negativeNumbersArray = getNegativeNumbers(numbersArray);
    console.log("Array de números negativos:", negativeNumbersArray);
  }
  
  
  main();
  