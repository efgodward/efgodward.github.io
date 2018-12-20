$('#submit').click(function(){

const a = parseFloat($('#a').val());
const b = parseFloat($('#b').val());
console.log(a,b);

if (a > b){
    $('#comparison').html('>')
}
else if (b > a){
    $('#comparison').html('<')
}
else if (a === b){
    $('#comparison').html('=')
}
})