const url = "https://api.rawg.io/api/games";

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        // call the createGames function and pass the data returned from the call
        createGames(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function createGames(json) {
    // you always need to log/dir the data to see what is in it
    console.dir(json);

    // we need to get the results property
    const results = json.results;

    const container = document.querySelector(".results");

    // variable to hold the HTML string that gets created
    let html = "";

    for (let i = 0; i < results.length; i++) {
        html += `<div class="game">
                    <h2>${results[i].name}</h2>
                    <img src="${results[i].background_image}" alt="${results[i].name}">
                </div>`;
    }

    // the forEach version of the loop
    // results.forEach(result => {
    //     html += `<div class="game">
    //                 <h2>${result.name}</h2>
    //                 <img src="${result.background_image}" alt="${result.name}">
    //             </div>`;
    // });

    // assign the created HTML to be the innerHTML of the div
    container.innerHTML = html;
}
