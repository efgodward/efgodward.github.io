// 1. Add .click() event handlers for each of the boxes:
let total = 0;

$("#a10").click(addTen);
$("#a20").click(addTwenty);
$("#a30").click(addThirty);

function addTen() {
  total = total + 10;
  $("#out").html(total);
}
function addTwenty() {
  total = total + 20;
  $("#out").html(total);
}
function addThirty() {
  total = total + 30;
  $("#out").html(total);
}

$("#red").click(colorRed);
$("#blue").click(colorBlue);

function colorRed() {
  $("#out").css("background-color", "red");
}

function colorBlue() {
  $("#out").css("background-color", "blue");
}

$("#out").click(reset);

function reset() {
  total = 0;
  $("#out").html(total);
  $("#out").css("background-color", "white");
}

$("#n10").click(minusTen);
$("#n20").click(minusTwenty);
$("#n30").click(minusThirty);

function minusTen() {
  total = total - 10;
  $("#out").html(total);
}

function minusTwenty() {
  total = total - 20;
  $("#out").html(total);
}

function minusThirty() {
  total = total - 30;
  $("#out").html(total);
}

//zero out function

// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, let count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - .html()
// - .css()
