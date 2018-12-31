// Create a temp-converter using empty starter code in class09.
// User should be able to enter a temperature to convert from fahrenheit
// to celcius and celcius to fahrenheit. The exact implentation
// and stying is up to to you! Use conditionals to have some style(s)
// on the page change depending on the temp entered
// (example: if temp is above 80f make page background red..
//  .or something more creative!). You can use Use jQuery .show() and .hide()
// or similar methods to have some elements appear on the page
// depending on the temp.

// function tempConvert() {
//   let temperature = parseFloat($("#temp").val());
//   let result = parseFloat($("#resultField").val());

//   if (tempType === "Fahrenheit") {
//     $('#resultField').val((temperature * 9) / 5 + 32);
//   } else {
//     result = ((temperature - 32) * 5) / 9;
//     $('#resultField').val((temperature - 32) * 5) / 9;
//   }

// }

// °F to °C	Deduct 32, then multiply by 5, then divide by 9
// °C to °F	Multiply by 9, then divide by 5, then add 32

$(document).ready(function () {
    let temp = 0;

    $('#choiceF').click(function () {
        temp = ((temp - 32) * 5) / 9;
        $('#result').html(parseFloat(temp))

    $('#choiceC').click(function () {
        temp = ((temp * 9)/5)+32;
        $('#result').html(temp)

    if (temp <= 32) {
        $('body').css('background-color','cornflowerblue')
    }
    else if (temp < 0) {
        $('body').css('background-color','snow')
    }
    else if (temp >= 33 && temp <= 69) {
        $('body').css('background-color','coral')
    }
    else {
        $('body').css('background-color','lavendar')
    }
})

})})