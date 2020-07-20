const ul = document.getElementById('content');
const url = 'https://the-one-api.herokuapp.com/v1/book';

fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function (data) {
        // Create and append the li's to the ul
        console.log(data);
    })
