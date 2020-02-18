const url = `https://api.rawg.io/api/games/4200`;

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createGameDetails(json);
    })
    .catch(function(error) {
        console.log(error);
    });

    
function createGameDetails(json) {
    console.dir(json);

    // set the name value
    const name = document.querySelector("h1");
    name.innerHTML = json.name;

    // set the description value
    const description = document.querySelector(".description");
    description.innerHTML = json.description;

    // set the image value
    const image = document.querySelector(".image");
    image.style.backgroundImage = `url("${json.background_image}")`;
}


// this second function provides default values in case any property we need is missing
function createGameDetailsWithDefaultValues(json) {
    // name
    const name = document.querySelector("h1");

    // create a default value for the name
    let nameValue = "No name";

    if (json.name) {
        // the name property exists, assign it to nameValue
        nameValue = json.name;
    }

    // use nameValue, not json.name
    name.innerHTML = nameValue;

    // description
    const description = document.querySelector(".description");

    // create a default value for the description
    let descriptionValue = "No description provided";

    if (json.description) {
        // the name description exists, assign it to descriptionValue
        descriptionValue = json.description;
    }

    // use descriptionValue, not json.description
    description.innerHTML = descriptionValue;

    // image
    // create a default background image value in case both background_image and background_image_additional don't exist
    let bgImage = "https://via.placeholder.com/1000";

    if (json.background_image) {
        // background_image exists, assign it to bgImage
        bgImage = json.background_image;

    } else if (json.background_image_additional) {
        // background_image doesn't exist
        // background_image_additional does exist, assign it to bgImage
        bgImage = json.background_image_additional;
    }

    const image = document.querySelector(".image");
    // use bgImage for the background image value
    image.style.backgroundImage = `url("${bgImage}")`;
}
