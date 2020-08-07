function typeCastHandler(event) {
  // read & process user input
  debugger;
  const form = event.target.form;
  const intendedType = form.type.value;
  const input = form.value.value;

  // execute core logic
  const newValue = typeCaster(input, intendedType);

  // communicate result to user
  document.getElementById('casted-value').InnerHTML = typeof newValue + ': ' + newValue;

  // log action for developers
  console.log('\n-- user action --');
  console.log('stringToCast:', '(' + typeof input + ')', input);
  console.log('intendedType:', '(' + typeof intendedType + ')', intendedType);
  console.log('newValue:', '(' + typeof newValue + ')', newValue);

  // tell the browser everything is OK
  return true;
}

