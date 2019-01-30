// Create a submit handler for the meme form

$(".meme-form").submit(memeGenerate);

function memeGenerate() {
  event.preventDefault();

  let input = $(".meme-form").val();
  console.log(input);

  var xhr = $.get(
    "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=ER9MeL5OVp14e4eR4EpQuneU9Bc12UH4"
  );
  xhr.done(function(data) {
    console.log("success got data", data);

    let post = data.data[0].title;

    let title = data.data[0].title;
    let gif = data.data[0].images.original.url;

    console.log(gif);

    // memeGenerate.forEach(function(element, index) {
    //   console.log(`${element} Ryan Gosling`);

    
    });
  };

// Do all of the following inside of this submit handler function...

// Stop the page from refreshing when the form is submitted  (event.preventDefault())

// Get the value of meme-input and save as a variable

// Use the JavaScript example at https://developers.giphy.com/docs/ to get the
// results from the http://api.giphy.com/v1/gifs/search endpoint (exactly as in example) but changing in your API key (you will need to register for API key)

// Use your knowledge of objects and arrays to get the list of give memes

// Swap out Ryan Goesling for your input term using string concatenation

// Use a forEach loop to append a list element containing a video to meme-list for each meme video
// hint: <li><video src='+ looping gif image path here + ' type="video/mp4" autoplay></video></li>
