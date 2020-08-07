
function displaySubString(event) {
  debugger;
  // read & process user input
  const form = event.target.form
  const userString = form.string.value;

  const preStart = form.begin.value;
  const start = Number(preStart);

  const preEnd = form.end.value;
  const end = Number(preEnd);

  // execute core logic
  const result = getPartialString(userString, start, end);
  console.log(result);

  // communicate result to user
  document.getElementById('program-output').innerHTML = result;

  // log action for developers
  console.log('\n-- user action --');
  console.log('userString:', userString);
  console.log('start:', start);
  console.log('end:', end);
  console.log('result:', result);
}

