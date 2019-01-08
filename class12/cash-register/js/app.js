// User flow:
// 1: user enters numerical value into #newEntry
// 2: user pushes enter key (submits the form), the new line is appended to the <tbody id="entries">
// 3: #total is updated to reflect the sum of all the #entries
//
// Instructions:
// 1: Add a .submit event to the form; use an anonymous function to handle the sumbit
// Inside the anonymous function:
// 2: Remeber to prevent the default action on the form!
// 3: Create a variable to store the user input from #newEntry
// 4: Remember to call parseFloat() on this variable! It needs to be a number.
// 5: Append a new <tr></tr> to the <tbody id="entries"> containing two <td>'s, one of which contains the new variable: <tr><td></td><td>NEW VALUE</td></tr>
// 6: Figure out a way to update the number in #total (Hint: look back at the calculator box example)
// 7: Empty the input in #newEntry (clear it out)
// 8: Limit the total line to 2 digits on the right of the decimal point

let sum = 0;

$("#entry").submit(function() {
  event.preventDefault();

  let input = parseFloat($("#newEntry").val());
    $("#entries").append(`<tr>
    <td></td>
    <td>
    <tr><td></td><td> ${input} </td><tr>
    </td>
    </tr>`);
    sum = sum + input;
    $("#total").html(`${sum}`);
    $("#entry").val("");
});

// var total = 0;

// document.getElementById('entry').onsubmit = enter;

// function enter() {
//   var entry = document.getElementById('newEntry').value;
//   var entry = parseFloat(entry);
//   currency = currencyFormat(entry);
//   document.getElementById('entries').innerHTML += '<tr><td></td><td>' + currency + '</td></tr>';
//   total += entry;
//   document.getElementById('total').innerHTML = currencyFormat(total);

//   document.getElementById('newEntry').value = '';
//   return false;
// }

// function currencyFormat(number) {
//   var currency = parseFloat(number);
//   currency = currency.toFixed(2);
//   currency = '$' + currency;
//   return currency;
//});
