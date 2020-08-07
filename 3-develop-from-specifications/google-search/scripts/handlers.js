function googleIt(event) {
  debugger;
  // read & process user input
  const form = event.target.form;
  const input = form.query.value;


  // call the core logic
 const search = googleURL(input);

  // render results for the user
  window.open(search, '_blank');

  // log action for developers
  console.log('\n-- user action --');
 console.log('userInput:', '(' + typeof input + ')', input);
 console.log('searchURL:', '(' + typeof search + ')', search);

  // tell the browser everything is OK
  return true;
}
