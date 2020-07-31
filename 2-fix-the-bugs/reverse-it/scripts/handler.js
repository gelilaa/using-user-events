function reverseHandler(event) {
  debugger;
  // read & process user input
  const userInput = event.target.input;
 
  // execute core logic
  const reversed = reverse(userInput);
console.log(reversed);
  // display results to user
  document.getElementById('program-output').innerHTML = reversed;

  // log action for developers
  console.log('\n-- user action --');
  console.log('userInput:', '(' + typeof userInput + ')', userInput);
  console.log('reversed:', '(' + typeof reversed + ')', reversed);

  // tell the browser everything is OK
  return true;
  }
