function processForm() {
  let temperature = Number(document.tempForm.temp.value);
  let temptype;
  let result;

  for (var i = 0, ii = document.tempForm.choice.length; i < ii; i++) {
    if (document.tempForm.choice[i].checked) {
      temptype = document.tempForm.choice[i].value;
    }
  }

  if (temptype === "fahrenheit") {
    result = (temperature * 9) / 5 + 32;
  } else {
    result = ((temperature - 32) * 5) / 9;
  }
  document.tempForm.resultField.value = result;
}
