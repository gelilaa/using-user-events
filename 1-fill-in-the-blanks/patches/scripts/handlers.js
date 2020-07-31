function setBackground(event) {
  // read & process user input
  const divId = event.target.form;

  // execute core logic
  const newColor = setBackground(divId);

  // display results to user
  document.body.style.backgroundColor = newColor;

  // log action for developers
  console.log('\n-- setBackground --');
  console.log('divId:', '(' + typeof divId + ')', divId);
  console.log('newColor:', '(' + typeof newColor + ')', newColor);

  // tell the browser everything is OK
  return true;
}

function unsetBackground() {
  // render results to user
  document.body.style.backgroundColor = 'white';

  // log action for developers
  console.log('\n-- unsetBackground --');

  // tell the browser everything is OK
  return true;
}
