//look up services where you can submit an email form
//google maps can be incorporated - we'll work on this later

//collect some datat - list of restaurants: hoteltonight for restuarant reservations
//do a sort of simulation on an iphone screen- maybe something for Eleven Madision park, normally a 1 year wait! etc..
document.querySelector('.submit-button').click = thankyouName;

function thankyouName () {
    let name = document.querySelector('.namethanks').value;

    let solution =  `Thanks! We'll be in touch, ${name}!`;

    document.querySelector('.submit-button').innerHTML = solution;
}
